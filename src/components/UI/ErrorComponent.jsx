// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

export default function ErrorComponent({ error = "Something went wrong", code = "Error" }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mb-6 inline-block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-24 h-24 bg-red-600/20 rounded-full flex items-center justify-center mx-auto">
            <FaExclamationTriangle className="w-12 h-12 text-red-600" />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {code}
        </motion.h1>

        <motion.p
          className="text-xl text-gray-400 mb-8 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {error}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/">
            <motion.button
              className="flex items-center gap-2 mx-auto px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHome className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm">
            If the problem persists, please contact our support team.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
