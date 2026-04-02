// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from 'react'

export default function Login() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-2xl font-bold text-center py-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Login Page
      </motion.h1>
    </motion.div>
  )
}
