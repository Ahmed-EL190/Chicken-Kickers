import { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../../context/CartContextValue";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";

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
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-96 bg-black shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-red-500/20">
              <h2 className="text-2xl font-bold text-white">🛒 Your Cart</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-red-900 transition-colors"
              >
                <FaTimes className="text-red-400" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-red-400 text-lg">Your cart is empty</p>
                  <p className="text-gray-400 text-sm mt-2">Start adding meals!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center bg-gray-800 rounded-xl p-4 shadow-sm border border-red-500/20"
                    >
                      <div className="w-16 h-16 bg-red-900 rounded-lg flex items-center justify-center text-red-400 text-sm font-semibold mr-4">
                        Image
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{item.name}</h3>
                        <p className="text-red-400 text-sm">{item.price.toLocaleString()} EGP</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-red-900 hover:bg-red-800 flex items-center justify-center transition-colors"
                        >
                          <FaMinus className="text-red-400 text-xs" />
                        </button>
                        <span className="w-8 text-center font-semibold text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-red-900 hover:bg-red-800 flex items-center justify-center transition-colors"
                        >
                          <FaPlus className="text-red-400 text-xs" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-red-500/20 p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total:</span>
                  <span className="text-2xl font-bold text-red-500">{total.toLocaleString()} EGP</span>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={clearCart}
                    className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    Clear Cart
                  </button>
                  <button className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}