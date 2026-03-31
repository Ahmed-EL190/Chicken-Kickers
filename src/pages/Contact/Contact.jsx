import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaTiktok,
  FaUtensils,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <motion.main
      className="min-h-screen bg-black text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        {/* 🔥 HERO */}
        <motion.section className="text-center mb-20" variants={itemVariants}>
          <div className="inline-flex items-center px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm mb-6">
            <FaMapMarkerAlt className="mr-2" />
            Find Us
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Visit <span className="text-red-600">Chicken Kickers</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Located in the heart of Mansoura – come enjoy the best fried chicken
            🔥
          </p>
        </motion.section>

        {/* 🔥 GRID */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* 🔥 LEFT INFO */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {[
              {
                icon: <FaUtensils />,
                title: "Category",
                text: "Fast Food Restaurant",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Address",
                text: "آخر المشاية بجوار مسجد الخير - Mansoura",
              },
              {
                icon: <FaPhone />,
                title: "Phone",
                text: "+20 123 456 7890",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                text: "orders@chickenkickers.eg",
              },
              {
                icon: <FaClock />,
                title: "Opening Hours",
                text: "Daily 11AM - 11PM",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-red-500 transition"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-red-500 text-xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-400">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 🔥 GOOGLE MAP REAL */}
          <motion.div variants={itemVariants}>
            <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=آخر+المشاية+بجوار+مسجد+الخير+المنصورة&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="mt-4 text-center">
              <a
                href="https://maps.google.com/?q=آخر+المشاية+بجوار+مسجد+الخير+المنصورة"
                target="_blank"
                className="px-6 py-3 bg-red-600 rounded-xl hover:bg-red-700 transition"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>

        {/* 🔥 CONTACT FORM */}
        <motion.section
          className="mt-20 bg-gray-900 p-10 rounded-3xl border border-gray-800"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>

          <form className="max-w-2xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-xl bg-black border border-gray-700 focus:border-red-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-black border border-gray-700 focus:border-red-500 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-3 rounded-xl bg-black border border-gray-700 focus:border-red-500 outline-none"
            />

            <button className="w-full py-3 bg-red-600 rounded-xl hover:bg-red-700 transition font-bold">
              Send Message
            </button>
          </form>
        </motion.section>

        {/* 🔥 SOCIAL */}
        <motion.section className="text-center mt-16" variants={itemVariants}>
          <h3 className="text-xl mb-6">Follow Us</h3>

          <div className="flex justify-center gap-6">
            {[
              {
                icon: FaInstagram,
                link: "https://instagram.com/chicken.kickers",
              },
              { icon: FaTiktok, link: "https://tiktok.com/@chicken.kickers" },
            ].map(({ icon: Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="p-4 bg-gray-900 rounded-xl border border-gray-800 cursor-pointer hover:border-red-500"
              >
                <Icon size={24} className="text-red-500" />
              </motion.a>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}
