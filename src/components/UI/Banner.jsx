// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Banner({ title, description, image, buttonText, buttonLink }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl bg-linear-to-r from-orange-500 via-orange-600 to-red-500 p-8 md:p-12 text-white shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24" />
      </div>

      <div className="relative z-10 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-orange-100 md:text-lg leading-relaxed mb-6">
            {description}
          </p>
          <a
            href={buttonLink}
            className="group relative inline-block px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">{buttonText}</span>
            <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="h-64 w-full rounded-2xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-2xl font-bold shadow-lg">
              SAVE 15%
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-sm" />
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-sm" />
    </motion.div>
  );
}