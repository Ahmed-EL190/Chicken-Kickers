import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaTiktok,
  FaUtensils,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaUtensils className="w-6 h-6" />,
      title: "Category",
      text: "Fast Food Restaurant",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Address",
      text: "آخر المشاية بجوار مسجد الخير - Mansoura",
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      text: "+20 123 456 7890",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      text: "orders@chickenkickers.eg",
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Opening Hours",
      text: "Daily 11AM - 11PM",
    },
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      link: "https://instagram.com/chicken.kickers",
      label: "Instagram",
    },
    {
      icon: FaTiktok,
      link: "https://tiktok.com/@chicken.kickers",
      label: "TikTok",
    },
  ];

  return (
    <motion.main
      className="min-h-screen bg-[#050505]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 🔥 LUXURY HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-black via-[#0a0a0a] to-[#1a0505]" />
        
        {/* Decorative Line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-red-600 to-transparent" />
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#ff0000_0%,transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto">
            {/* Elegant Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="h-px w-16 bg-linear-to-r from-red-600 to-transparent" />
              <span className="text-red-500/80 tracking-[0.4em] text-xs uppercase font-light">
                Get in Touch
              </span>
              <div className="h-px w-16 bg-linear-to-l from-red-600 to-transparent" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-6"
            >
              Visit{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700">
                Chicken Kickers
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-light border-l-2 border-red-600/30 pl-6"
            >
              Located in the heart of Mansoura – come enjoy the best fried chicken 🔥
            </motion.p>

            {/* Rating Badge */}
            <motion.div
              variants={itemVariants}
              className="mt-10 inline-flex items-center gap-4 bg-[#0a0a0a] border border-red-600/30 px-8 py-4"
            >
              <div className="w-12 h-12 border border-red-600/50 flex items-center justify-center">
                <FaStar className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">
                  Customer Rating
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔥 CONTACT INFO GRID */}
      <section className="py-24 bg-[#080808] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-red-600/50 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-red-600/80 tracking-[0.4em] text-xs uppercase block mb-4"
            >
              Contact Information
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              Find <span className="text-red-600">Us</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-[#0a0a0a] border border-white/5 p-8 hover:border-red-600/30 transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 border border-red-600/30 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white text-lg font-light tracking-wide">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Map */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 border border-red-600/20 translate-x-4 translate-y-4" />
              <div className="relative overflow-hidden border border-white/10">
                <iframe
                  title="Chicken Kickers Location Map"
                  src="https://www.google.com/maps?q=آخر+المشاية+بجوار+مسجد+الخير+المنصورة&output=embed"
                  width="100%"
                  height="500"
                  style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale-20"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay pointer-events-none" />
              </div>

              <div className="mt-6 text-center">
                <a
                  href="https://maps.google.com/?q=آخر+المشاية+بجوار+مسجد+الخير+المنصورة"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 bg-red-600 text-white font-medium tracking-widest uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Open in Google Maps
                    <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔥 CONTACT FORM SECTION */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7f1d1d_0%,transparent_50%)] opacity-20" />
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative">
          <div className="border border-white/10 p-8 md:p-16 relative">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-600 -translate-x-px -translate-y-px" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-600 translate-x-px translate-y-px" />
            
            <div className="text-center mb-12">
              <span className="text-red-600/80 tracking-[0.4em] text-xs uppercase block mb-4">
                Send a Message
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Get in <span className="text-red-600">Touch</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto font-light">
                Have a question or feedback? We'd love to hear from you.
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#0a0a0a] border border-white/10 p-5 text-white placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-all duration-300 font-light tracking-wide"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-[#0a0a0a] border border-white/10 p-5 text-white placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-all duration-300 font-light tracking-wide"
                  />
                </div>
              </div>
              
              <div className="relative">
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full bg-[#0a0a0a] border border-white/10 p-5 text-white placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-all duration-300 font-light tracking-wide resize-none"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="group relative px-12 py-5 bg-red-600 text-white font-medium tracking-widest uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 🔥 SOCIAL MEDIA SECTION */}
      <section className="py-24 bg-[#080808] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-red-600/50 to-transparent" />
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-red-600/80 tracking-[0.4em] text-xs uppercase block mb-4"
          >
            Stay Connected
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Follow <span className="text-red-600">Us</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto font-light mb-12"
          >
            Follow us on social media for the latest updates, offers, and behind-the-scenes content
          </motion.p>

          <div className="flex justify-center gap-8">
            {socialLinks.map(({ icon: Icon, link, label }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group w-20 h-20 bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-gray-400 hover:border-red-600 hover:text-red-600 transition-all duration-300"
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 QUICK CTA SECTION */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-red-900/20 via-transparent to-red-900/20" />
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to <span className="text-red-600">Order?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 font-light max-w-2xl mx-auto">
            Experience the best fried chicken in Mansoura. Order now and taste the difference!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/menu"
              className="group relative px-12 py-5 bg-red-600 text-white font-medium tracking-widest uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Order Now
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a
              href="tel:+201234567890"
              className="px-12 py-5 border border-white/20 text-white font-medium tracking-widest uppercase text-sm hover:border-red-600 hover:text-red-500 transition-all duration-300 backdrop-blur-sm"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  );
}