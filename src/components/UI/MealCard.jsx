import { useState, useContext, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../../context/CartContextValue";
import toast from "react-hot-toast";

export default function MealCard({ meal }) {
  const { addToCart, updateQuantity, cartItems } = useContext(CartContext);

  const existingItem = cartItems.find((item) => item.id === meal.id);

  const [quantity, setQuantity] = useState(0);
  const [added, setAdded] = useState(false);

  const imgRef = useRef();

  useEffect(() => {
    if (existingItem) {
      setQuantity(existingItem.quantity);
    }
  }, [existingItem]);

  // Flying Animation
  const flyToCart = () => {
    const cart = document.getElementById("cart-icon");
    if (!cart || !imgRef.current) return;

    const imgRect = imgRef.current.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    const clone = imgRef.current.cloneNode(true);

    clone.style.position = "fixed";
    clone.style.top = imgRect.top + "px";
    clone.style.left = imgRect.left + "px";
    clone.style.width = imgRect.width + "px";
    clone.style.height = imgRect.height + "px";
    clone.style.zIndex = 9999;
    clone.style.borderRadius = "12px";
    clone.style.transition = "all 0.8s cubic-bezier(.65,-0.3,.2,1)";

    document.body.appendChild(clone);

    setTimeout(() => {
      clone.style.top = cartRect.top + "px";
      clone.style.left = cartRect.left + "px";
      clone.style.width = "30px";
      clone.style.height = "30px";
      clone.style.opacity = "0.5";
    }, 10);

    setTimeout(() => {
      clone.remove();
    }, 800);
  };

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
    flyToCart();

    if (existingItem) {
      updateQuantity(meal.id, quantity + 1);
    } else {
      addToCart(meal);
    }

    toast.success(`🔥 Added 1 item`);

    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-red-500/20 bg-black"
      whileHover={{ y: -10, scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.5)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <img
        ref={imgRef}
        src={meal.image}
        alt={meal.name}
        className="h-48 w-full object-cover rounded-t-2xl"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{meal.name}</h3>

        <div className="flex justify-between mt-2">
          <span className="text-red-500 font-bold">{meal.price} EGP</span>

          {existingItem && (
            <motion.span
              key={existingItem.quantity}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-cyan-500 text-sm font-bold"
            >
              🔥 {existingItem.quantity}
            </motion.span>
          )}
        </div>

        <motion.p
          key={quantity}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-cyan-500 font-bold mt-1"
        >
          Total: {meal.price * quantity} EGP
        </motion.p>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
            className="flex-1 bg-gray-800 py-2 text-white rounded-lg hover:bg-gray-700 transition"
          >
            −
          </button>

          <motion.div
            key={quantity}
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 text-center text-white font-bold"
          >
            {quantity}
          </motion.div>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="flex-1 bg-gray-800 py-2 text-white rounded-lg hover:bg-gray-700 transition"
          >
            +
          </button>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleAdd}
          className={`mt-3 w-full py-2 rounded-lg font-bold text-white ${
            existingItem ? "bg-cyan-600 hover:bg-cyan-500" : "bg-red-600 hover:bg-red-500"
          } transition`}
        >
          {existingItem ? "Update Cart" : `Add ${quantity}`}
        </motion.button>

        <AnimatePresence>
          {added && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-cyan-500 text-center mt-2 font-bold"
            >
              ✅ Added!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}