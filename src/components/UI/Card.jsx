// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Card({
  children,
  className: customClassName,
  variant = "default",
  hoverable = true,
  animated = true,
  ...props
}) {
  const baseStyle = "rounded-2xl border bg-black text-white p-6";

  const variants_map = {
    default: "border-gray-700/50 hover:border-red-600/50",
    elevated: "border-gray-700/50 shadow-lg shadow-black/50 hover:shadow-red-500/30",
    outline: "border-2 border-red-600",
  };

  const className = `${baseStyle} ${variants_map[variant]} ${customClassName || ""}`;

  const hoverAnimation = hoverable
    ? { y: -8, scale: 1.02 }
    : {};

  const tapAnimation = hoverable
    ? { scale: 0.98 }
    : {};

  if (!animated) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
