import { useState, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../../context/CartContextValue";
import { FaPlus, FaMinus, FaShoppingCart, FaFire } from "react-icons/fa";
import toast from "react-hot-toast";

export default function MealCard({ meal, size = "medium" }) {
  const { addToCart, updateQuantity, cartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [added, setAdded] = useState(false);
  const imgRef = useRef();

  const sizeConfig = {
    large: {
      imageHeight: "h-80 lg:h-96",
      titleSize: "text-2xl lg:text-3xl",
      padding: "p-8",
      showDescription: true,
    },
    medium: {
      imageHeight: "h-96",
      titleSize: "text-xl",
      padding: "p-6",
      showDescription: false,
    },
    small: {
      imageHeight: "h-48",
      titleSize: "text-lg",
      padding: "p-4",
      showDescription: false,
      compact: true,
    },
  };

  const config = sizeConfig[size];
  const existingItem = cartItems.find((item) => item.id === meal.id);

  // Flying Animation to Cart
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
    flyToCart();

    if (existingItem) {
      updateQuantity(meal.id, existingItem.quantity + quantity);
      toast.success(`✅ Updated ${meal.name} in cart!`);
    } else {
      addToCart({ ...meal, quantity });
      toast.success(`🔥 Added ${quantity} ${meal.name} to cart!`);
    }

    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
    setQuantity(1);
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <motion.div
      className="group bg-[#0a0a0a] border border-white/5 hover:border-red-600/30 transition-all duration-500 overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden bg-[#1a1a1a] ${size === "small" ? "w-1/3" : "w-full"} ${config.imageHeight}`}>
        <motion.img
          ref={imgRef}
          src={meal.image}
          alt={meal.name}
          className="w-full h-full object-cover transition-all duration-700"
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-20" />

        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 font-bold tracking-wide border border-red-500/50">
          {meal.price.toLocaleString()} EGP
        </div>

        {/* Existing Item Badge */}
        <AnimatePresence>
          {existingItem && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 text-xs font-bold tracking-wider uppercase border border-green-500/50 flex items-center gap-1"
            >
              <FaFire className="text-yellow-400" />
              {existingItem.quantity} in Cart
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className={`p-6`}>
        <div className="mb-2">
          <span className="text-xs text-red-500/80 uppercase tracking-[0.2em]">
            {meal.category || "Chicken Kickers"}
          </span>
        </div>

        <h3 className={`font-bold text-white mb-2 group-hover:text-red-500 transition-colors tracking-wide ${config.titleSize}`}>
          {meal.name}
        </h3>

        {meal.description && config.showDescription && (
          <p className="text-gray-500 text-sm mb-4 font-light">
            {meal.description}
          </p>
        )}

        {/* Total Price */}
        <p className="text-gray-400 text-sm mb-4 font-light">
          Total: <span className="text-red-500 font-bold">{meal.price * quantity} EGP</span>
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400 text-xs uppercase tracking-widest">
            Quantity
          </span>
          <div className="flex items-center gap-3">
            <motion.button
              onClick={decreaseQuantity}
              className="w-10 h-10 border border-red-600/30 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
              whileTap={{ scale: 0.9 }}
            >
              <FaMinus className="text-xs" />
            </motion.button>

            <AnimatePresence mode="wait">
              <motion.span
                key={quantity}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                className="w-10 text-center font-bold text-white text-lg"
              >
                {quantity}
              </motion.span>
            </AnimatePresence>

            <motion.button
              onClick={increaseQuantity}
              className="w-10 h-10 border border-red-600/30 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
              whileTap={{ scale: 0.9 }}
            >
              <FaPlus className="text-xs" />
            </motion.button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAdd}
          whileTap={{ scale: 0.95 }}
          className={`group/btn relative w-full py-4 font-medium tracking-widest uppercase text-sm overflow-hidden transition-all duration-300 flex items-center justify-center gap-3 ${
            existingItem
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] text-white"
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            <FaShoppingCart className="text-sm" />
            {existingItem ? "Update Cart" : `Add ${quantity} to Cart`}
          </span>
          {!existingItem && (
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
          )}
        </motion.button>

        {/* Success Message */}
        <AnimatePresence>
          {added && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-green-400 text-center mt-3 text-sm font-medium tracking-wide"
            >
              ✅ Added to cart!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}