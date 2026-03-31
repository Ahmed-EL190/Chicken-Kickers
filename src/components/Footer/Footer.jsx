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

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    hover: { x: 5, color: '#ef4444' },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.15, rotate: 10 },
    tap: { scale: 0.9 },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 font-sans"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-red-500">Chicken Kickers</h3>
            <p className="leading-relaxed">
              Mansoura's premier destination for authentic fried chicken and Egyptian flavors.
            </p>
            <div className="flex space-x-4 mt-2">
              {[
                { href: "https://instagram.com/chicken.kickers", icon: FaInstagram },
                { href: "https://tiktok.com/@chicken.kickers", icon: FaTiktok },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-red-500 rounded-lg text-white hover:bg-red-600 transition"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-xl font-semibold text-red-500">Contact Info</h4>
            <div className="space-y-2">
              {[
                { icon: FaMapMarkerAlt, text: "آخر المشاية بجوار مسجد الخير\nMansoura, Egypt\nPostal Code: 15497" },
                { icon: FaPhone, text: "+20 123 456 7890" },
                { icon: FaEnvelope, text: "orders@chickenkickers.eg" },
                { icon: FaClock, text: "Every day: 11:00 AM - 11:00 PM" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="text-red-500 mt-1" />
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-xl font-semibold text-red-500">Quick Links</h4>
            <motion.div
              className="flex flex-col gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { to: "/", label: "Home" },
                { to: "/menu", label: "Menu" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link, idx) => (
                <motion.div key={idx} variants={linkVariants}>
                  <Link to={link.to} className="text-gray-300">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Restaurant Details */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-xl font-semibold text-red-500">Restaurant Info</h4>
            <div className="space-y-2">
              {[
                { icon: FaUtensils, title: "Category", desc: "Fast Food (مطعم طعام سريع)" },
                { icon: FaDollarSign, title: "Price Range", desc: "$" },
                { icon: FaUtensils, title: "Services", desc: "Dine-in, Pickup (تناول الطعام داخل المطعم · استلام من المتجر)" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="text-red-500 mt-1" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Chicken Kickers. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ in Mansoura, Egypt</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}