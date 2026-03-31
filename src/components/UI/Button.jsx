// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  isLoading = false,
  disabled = false,
  onClick,
  className: customClassName,
  ...props
}) {
  const baseStyle =
    "font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2";

  const variants_map = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-red-500/50",
    secondary:
      "bg-gray-700 text-white hover:bg-gray-600 shadow-lg hover:shadow-gray-700/50",
    outline:
      "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-500/50",
    ghost:
      "text-white hover:bg-white/10",
  };

  const sizes_map = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
  const className = `${baseStyle} ${variants_map[variant]} ${sizes_map[size]} ${widthClass} ${disabledClass} ${customClassName || ""}`;

  return (
    <motion.button
      className={className}
      whileHover={!disabled && !isLoading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
