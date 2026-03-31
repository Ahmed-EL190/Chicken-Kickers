
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CartSidebar from "../components/Cart/CartSidebar";

export default function MainLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <motion.main
        className="flex-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      
      <Footer />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
