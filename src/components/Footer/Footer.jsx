import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaTiktok, FaUtensils, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="bg-[#0a0a0a] text-gray-400 border-t border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Decorative Line */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-red-600/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <motion.div
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-3xl font-black text-white tracking-tight">
              Chicken <span className="text-red-600">Kickers</span>
            </h3>
            <p className="leading-relaxed font-light text-sm tracking-wide">
              Mansoura's premier destination for authentic fried chicken and Egyptian flavors.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { href: "https://instagram.com/chicken.kickers", icon: FaInstagram },
                { href: "https://tiktok.com/@chicken.kickers", icon: FaTiktok },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-gray-400 hover:border-red-600 hover:text-red-600 transition-all duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-xs font-semibold text-red-600 tracking-[0.3em] uppercase">
              Contact Info
            </h4>
            <div className="space-y-4">
              {[
                { icon: FaMapMarkerAlt, text: "آخر المشاية بجوار مسجد الخير\nMansoura, Egypt\nPostal Code: 15497" },
                { icon: FaPhone, text: "+20 123 456 7890" },
                { icon: FaEnvelope, text: "orders@chickenkickers.eg" },
                { icon: FaClock, text: "Every day: 11:00 AM - 11:00 PM" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 border border-red-600/20 flex items-center justify-center flex-shrink-0 group-hover:border-red-600/50 transition-colors">
                    <item.icon className="text-red-600 text-sm" />
                  </div>
                  <p className="text-sm font-light leading-relaxed whitespace-pre-line group-hover:text-white transition-colors">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-xs font-semibold text-red-600 tracking-[0.3em] uppercase">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/menu", label: "Menu" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link, idx) => (
                <motion.div key={idx}>
                  <Link 
                    to={link.to} 
                    className="text-sm font-light tracking-wide text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-red-600 transition-all duration-300" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Restaurant Details */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-xs font-semibold text-red-600 tracking-[0.3em] uppercase">
              Restaurant Info
            </h4>
            <div className="space-y-4">
              {[
                { icon: FaUtensils, title: "Category", desc: "Fast Food (مطعم طعام سريع)" },
                { icon: FaDollarSign, title: "Price Range", desc: "$" },
                { icon: FaUtensils, title: "Services", desc: "Dine-in, Pickup (تناول الطعام داخل المطعم · استلام من المتجر)" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 border border-red-600/20 flex items-center justify-center flex-shrink-0 group-hover:border-red-600/50 transition-colors">
                    <item.icon className="text-red-600 text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white tracking-widest uppercase mb-1">{item.title}</p>
                    <p className="text-sm font-light text-gray-500 group-hover:text-gray-400 transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-widest uppercase text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Chicken Kickers. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-2">
            Made with <span className="text-red-600">♥</span> in Mansoura, Egypt
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}