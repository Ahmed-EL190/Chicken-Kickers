import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../../context/CartContextValue";
import { FaTimes, FaPlus, FaMinus, FaShoppingBag, FaTrash } from "react-icons/fa";

export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems, updateQuantity, total, clearCart } = useContext(CartContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-96 bg-[#050505] shadow-2xl z-50 flex flex-col border-l border-red-600/20"
          >
            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-red-600 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-red-600/20 bg-[#0a0a0a]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-red-600/30 flex items-center justify-center">
                  <FaShoppingBag className="text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white tracking-wide">Your Cart</h2>
                  <p className="text-xs text-gray-500 tracking-[0.2em] uppercase">
                    {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}
                  </p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 bg-[#050505]">
              {cartItems.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 border border-red-600/20 flex items-center justify-center mx-auto mb-6">
                    <FaShoppingBag className="text-red-600/50 text-3xl" />
                  </div>
                  <p className="text-gray-400 text-lg font-light">Your cart is empty</p>
                  <p className="text-gray-600 text-sm mt-2 font-light tracking-wide">Start adding meals!</p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-[#0a0a0a] border border-white/5 hover:border-red-600/30 p-4 transition-all duration-300 flex items-center gap-4"
                    >
                      {/* Product Image */}
                      <div className="w-16 h-16 border border-red-600/20 flex items-center justify-center overflow-hidden rounded-lg">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-bold text-white tracking-wide group-hover:text-red-500 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-red-500 font-medium mt-1">
                          {item.price.toLocaleString()} EGP
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <motion.button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-red-600/30 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaMinus className="text-xs" />
                        </motion.button>
                        <span className="w-8 text-center font-bold text-white">{item.quantity}</span>
                        <motion.button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-red-600/30 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaPlus className="text-xs" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-red-600/20 p-6 bg-[#0a0a0a] space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-gray-400 uppercase text-xs tracking-widest">Subtotal</span>
                  <span className="text-xl font-bold text-white">{total.toLocaleString()} EGP</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black text-white">Total</span>
                  <span className="text-2xl font-black text-red-600">{total.toLocaleString()} EGP</span>
                </div>

                <div className="space-y-3 pt-2">
                  <motion.button
                    onClick={clearCart}
                    className="group w-full py-3 border border-white/10 text-gray-400 font-medium tracking-widest uppercase text-xs hover:border-red-600/50 hover:text-red-500 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaTrash className="text-xs" />
                    Clear Cart
                  </motion.button>
                  
                  <motion.button 
                    className="group relative w-full py-4 bg-red-600 text-white font-bold tracking-widest uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Checkout</span>
                    <div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}