import { motion } from "framer-motion";
import { FaInfoCircle, FaUtensils, FaUsers, FaClock } from "react-icons/fa";

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
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">

        {/* 🔥 Hero */}
        <motion.section
          className="text-center mb-20"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-400 rounded-full mb-6">
            <FaInfoCircle className="mr-2" />
            About Us
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            About <span className="text-red-500">Chicken Kickers</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Founded in the heart of Mansoura, we serve premium fried chicken
            with authentic Egyptian flavor and modern taste 🔥
          </p>
        </motion.section>

        {/* 🔥 Stats */}
        <motion.section
          className="grid gap-8 md:grid-cols-3 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { number: "500+", title: "Happy Customers" },
            { number: "5", title: "Years Experience" },
            { number: "50+", title: "Daily Orders" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 hover:border-red-500 transition"
            >
              <div className="text-4xl font-bold text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold">{stat.title}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* 🔥 Values */}
        <motion.section
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Values
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaUtensils />,
                title: "Quality First",
                desc: "Fresh ingredients & perfect crispy chicken every time.",
              },
              {
                icon: <FaUsers />,
                title: "Community",
                desc: "Serving Mansoura with love and pride.",
              },
              {
                icon: <FaClock />,
                title: "Fast Service",
                desc: "Hot & fresh food delivered quickly.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-500 transition hover:-translate-y-2"
              >
                <div className="text-red-500 text-3xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 🔥 Why Choose Us */}
        <motion.section
          className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-4xl font-bold mb-8">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {[
              "Fresh crispy chicken daily",
              "Authentic Egyptian spices",
              "Affordable prices",
              "Fast delivery",
              "Trusted in Mansoura",
              "High quality service",
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                <span className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center mr-3 font-bold">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </motion.main>
  );
}