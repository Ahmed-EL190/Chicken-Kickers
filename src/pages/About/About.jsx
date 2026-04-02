// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaInfoCircle, FaUtensils, FaUsers, FaClock, FaChevronRight } from "react-icons/fa";

// 🔥 Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <motion.main
      className="min-h-screen bg-[#050505] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-red-600 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">

        {/* 🔥 Hero */}
        <motion.section
          className="text-center mb-24"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {/* Elegant Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="h-px w-16 bg-linear-to-r from-red-600 to-transparent" />
            <div className="inline-flex items-center px-4 py-2 border border-red-600/30 text-red-500 tracking-[0.3em] text-xs uppercase">
              <FaInfoCircle className="mr-2" />
              About Us
            </div>
            <div className="h-px w-16 bg-linear-to-l from-red-600 to-transparent" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700">Chicken Kickers</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-light border-l-2 border-red-600/30 pl-6"
          >
            Founded in the heart of Mansoura, we serve premium fried chicken
            with authentic Egyptian flavor and modern taste
          </motion.p>
        </motion.section>

        {/* 🔥 Stats */}
        <motion.section
          className="grid gap-8 md:grid-cols-3 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { number: "500+", title: "Happy Customers", subtitle: "Served with love" },
            { number: "5", title: "Years Experience", subtitle: "Since 2020" },
            { number: "50+", title: "Daily Orders", subtitle: "Fresh & hot" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group bg-[#0a0a0a] border border-white/5 p-10 text-center hover:border-red-600/30 transition-all duration-500"
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700 mb-3">
                {stat.number}
              </div>
              <div className="text-lg font-semibold tracking-wide mb-1">{stat.title}</div>
              <div className="text-gray-500 text-sm font-light uppercase tracking-widest">{stat.subtitle}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* 🔥 Values */}
        <motion.section
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-16">
            <span className="text-red-600/80 tracking-[0.4em] text-xs uppercase block mb-4">
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Our <span className="text-red-600">Values</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaUtensils className="w-6 h-6" />,
                title: "Quality First",
                desc: "Fresh ingredients & perfect crispy chicken every time.",
              },
              {
                icon: <FaUsers className="w-6 h-6" />,
                title: "Community",
                desc: "Serving Mansoura with love and pride.",
              },
              {
                icon: <FaClock className="w-6 h-6" />,
                title: "Fast Service",
                desc: "Hot & fresh food delivered quickly.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group bg-[#0a0a0a] border border-white/5 p-10 hover:border-red-600/30 transition-all duration-500"
              >
                <div className="w-16 h-16 border border-red-600/30 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 🔥 Why Choose Us */}
        <motion.section
          className="relative border border-white/10 p-12 md:p-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-600 -translate-x-px -translate-y-px" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-600 translate-x-px translate-y-px" />
          
          <div className="text-center mb-12">
            <span className="text-red-600/80 tracking-[0.4em] text-xs uppercase block mb-4">
              The Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Why Choose <span className="text-red-600">Us?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Fresh crispy chicken daily",
              "Authentic Egyptian spices",
              "Affordable prices",
              "Fast delivery",
              "Trusted in Mansoura",
              "High quality service",
            ].map((item, i) => (
              <div key={i} className="flex items-center group">
                <div className="w-8 h-8 border border-red-600/30 flex items-center justify-center mr-4 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                  <span className="text-red-600 group-hover:text-white font-bold text-sm transition-colors">✓</span>
                </div>
                <span className="text-gray-300 font-light group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/menu"
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-red-600 text-white font-medium tracking-widest uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Menu
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>
        </motion.section>

      </div>
    </motion.main>
  );
}