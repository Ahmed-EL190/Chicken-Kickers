// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from 'react'

export default function Error() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h1
          className="text-6xl font-bold text-red-500 mb-4"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Page not found
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
