// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

/**
 * AnimatedSection - Reusable section wrapper with animation presets
 * 
 * @param {React.ReactNode} children - Content to display
 * @param {string} preset - Animation preset: 'fade', 'slideUp', 'slideLeft', 'scale'
 * @param {string} className - Additional CSS classes
 * @param {object} variants - Custom animation variants (overrides preset)
 * @param {boolean} viewportTrigger - Animate when entering viewport
 */
export default function AnimatedSection({
  children,
  preset = "slideUp",
  className = "",
  variants = null,
  viewportTrigger = true,
  delay = 0,
  ...props
}) {
  const presets = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const selectedVariants = variants || presets[preset];

  const props_config = viewportTrigger
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
      }
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <motion.section
      className={className}
      variants={selectedVariants}
      transition={{ duration: 0.6, delay }}
      {...props_config}
      {...props}
    >
      {children}
    </motion.section>
  );
}
