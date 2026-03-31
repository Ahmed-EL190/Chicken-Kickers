// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Loading() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.3 },
    show: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <motion.div
          className="mb-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-4 h-4 rounded-full bg-red-600"
                variants={item}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: index * 0.15,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Loading
        </motion.h2>
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Please wait while we prepare your delicious meal...
        </motion.p>
      </div>
    </div>
  );
}
