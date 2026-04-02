import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../../context/CartContextValue";
import {
  FaHome,
  FaUtensils,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaMapPin,
} from "react-icons/fa";

export default function Navbar({ onCartClick }) {
  const [open, setOpen] = useState(false);
  const { itemCount } = useContext(CartContext);

  const navItems = [
    { to: "/", label: "Home", icon: FaHome },
    { to: "/menu", label: "Menu", icon: FaUtensils },
    { to: "/about", label: "About", icon: FaInfoCircle },
    { to: "/contact", label: "Location", icon: FaMapMarkerAlt },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.nav
      className="bg-linear-to-r from-black via-gray-900 to-black shadow-2xl sticky top-0 z-50 border-b border-red-500/20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="w-10 h-10 bg-linear-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-red-500/25 transition-all duration-300"
              whileHover={{ rotate: 10, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUtensils className="text-white text-lg" />
            </motion.div>
            <div>
              <motion.h1
                className="text-xl font-black text-white group-hover:text-red-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                Chicken Kickers
              </motion.h1>
              <p className="text-xs text-gray-400 hidden md:block">
                Mansoura, Egypt
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.div key={item.to} variants={itemVariants}>
              <Link
                to={item.to}
                className="flex items-center space-x-2 text-gray-300 hover:text-red-400 font-medium transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <item.icon className="text-sm group-hover:text-red-400" />
                </motion.div>
                <motion.span whileHover={{ x: 3 }}>{item.label}</motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side: Cart and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Cart Button */}
          <motion.button
            id="cart-icon"
            onClick={onCartClick}
            className="relative flex items-center justify-center bg-linear-to-r from-red-500 to-red-600 text-white rounded-xl w-12 h-12 hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/25 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaShoppingCart className="text-lg" />
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.span
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-red-400 hover:bg-gray-800 transition-all duration-300"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                >
                  <FaTimes className="text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                >
                  <FaBars className="text-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-black border-t border-gray-700"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="px-4 py-4 space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.div key={item.to} variants={itemVariants}>
                  <Link
                    to={item.to}
                    className="flex items-center space-x-3 text-gray-300 hover:text-red-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
                    onClick={() => setOpen(false)}
                  >
                    <item.icon className="text-lg" />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
