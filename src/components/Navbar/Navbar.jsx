import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContextValue";
import { FaHome, FaUtensils, FaInfoCircle, FaMapMarkerAlt, FaShoppingCart, FaBars, FaTimes, FaMapPin } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useContext(CartContext);

  const navItems = [
    { to: "/", label: "Home", icon: FaHome },
    { to: "/menu", label: "Menu", icon: FaUtensils },
    { to: "/about", label: "About", icon: FaInfoCircle },
    { to: "/contact", label: "Location", icon: FaMapMarkerAlt }
  ];

  return (
    <nav className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl sticky top-0 z-50 border-b border-red-500/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-linear-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
            <FaUtensils className="text-white text-lg" />
          </div>
          <div>
            <h1 className="text-xl font-black text-white group-hover:text-red-400 transition-colors">
              Chicken Kickers
            </h1>
            <p className="text-xs text-gray-400 hidden md:block">Mansoura, Egypt</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center space-x-2 text-gray-300 hover:text-red-400 font-medium transition-all duration-300 hover:scale-105 group"
            >
              <item.icon className="text-sm group-hover:text-red-400" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Right Side: Cart and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Cart Button */}
          <Link
            to="/menu"
            className="relative flex items-center justify-center bg-linear-to-r from-red-500 to-red-600 text-white rounded-xl w-12 h-12 hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/25 hover:scale-110 group"
          >
            <FaShoppingCart className="text-lg" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-red-400 hover:bg-gray-800 transition-all duration-300"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-gray-800 border-t border-gray-700 transition-all duration-300 ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center space-x-3 text-gray-300 hover:text-red-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-700 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              <item.icon className="text-lg" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
