/**
 * COMPONENT EXAMPLES & USAGE GUIDE
 * Full animated React components with black/white/red color scheme
 */

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Button from "./components/UI/Button";
import Card from "./components/UI/Card";
import AnimatedSection from "./components/UI/AnimatedSection";

// ============================================================================
// BUTTON COMPONENT EXAMPLES
// ============================================================================

export function ButtonExamples() {
  return (
    <div className="p-8 space-y-6">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button variant="primary" size="lg" onClick={() => alert("Clicked!")}>
          Order Now
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button variant="secondary" size="md">
          Select Option
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button variant="outline" size="lg">
          Find Us
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button variant="ghost">Learn More</Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button variant="primary" fullWidth>
          Complete Order
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button variant="primary" isLoading>
          Processing...
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button variant="primary" disabled>
          Not Available
        </Button>
      </motion.div>
    </div>
  );
}

// ============================================================================
// CARD COMPONENT EXAMPLES
// ============================================================================

export function CardExamples() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <motion.div variants={cardVariants}>
        <Card variant="default">
          <h3 className="text-xl font-bold text-white mb-2">Default Card</h3>
          <p className="text-gray-300">This is a simple default card.</p>
        </Card>
      </motion.div>

      <motion.div variants={cardVariants}>
        <Card variant="elevated">
          <h3 className="text-xl font-bold text-white mb-2">Elevated Card</h3>
          <p className="text-gray-300">This card has elevation and shadow.</p>
        </Card>
      </motion.div>

      <motion.div variants={cardVariants}>
        <Card variant="outline">
          <h3 className="text-xl font-bold text-white mb-2">Outline Card</h3>
          <p className="text-gray-300">This card has a red outline.</p>
        </Card>
      </motion.div>

      <motion.div variants={cardVariants}>
        <Card hoverable={false}>
          <h3 className="text-xl font-bold text-white mb-2">Static Card</h3>
          <p className="text-gray-300">This card doesn't respond to hover.</p>
        </Card>
      </motion.div>

      <motion.div variants={cardVariants}>
        <Card animated={false}>
          <h3 className="text-xl font-bold text-white mb-2">Static Animation</h3>
          <p className="text-gray-300">This card won't animate on entrance.</p>
        </Card>
      </motion.div>

      <motion.div variants={cardVariants}>
        <Card variant="elevated">
          <img
            src="https://picsum.photos/300/200?random=meal"
            alt="Meal"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold text-white mb-2">Crispy Chicken</h3>
          <p className="text-sm text-gray-400 mb-4">
            Our signature fried chicken with Egyptian spices
          </p>
          <p className="text-lg font-bold text-red-600">150 EGP</p>
        </Card>
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// ANIMATED SECTION EXAMPLES
// ============================================================================

export function AnimatedSectionExamples() {
  const presets = [
    { preset: "fade", title: "Fade Animation", bg: "bg-gray-900" },
    { preset: "slideUp", title: "Slide Up Animation", bg: "bg-black" },
    { preset: "slideLeft", title: "Slide Left Animation", bg: "bg-gray-900" },
    { preset: "scale", title: "Scale Animation", bg: "bg-black" },
    { preset: "slideUp", title: "Delayed Animation", bg: "bg-gray-900", delay: 0.3 },
    { preset: "slideUp", title: "Always Animate", bg: "bg-black", viewportTrigger: false },
  ];

  return (
    <div className="bg-black">
      {presets.map((sec, idx) => (
        <AnimatedSection
          key={idx}
          preset={sec.preset}
          className={`py-20 ${sec.bg}`}
          delay={sec.delay}
          viewportTrigger={sec.viewportTrigger}
        >
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold">{sec.title}</h2>
            <p>This section animates with {sec.preset} preset</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

// ============================================================================
// FRAMER MOTION CUSTOM ANIMATIONS
// ============================================================================

export function CustomAnimationExamples() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-8 bg-black">
      {/* Staggered Items */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4 mb-16"
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <motion.div
            key={item}
            variants={itemVariants}
            className="p-4 bg-gray-800 rounded-lg text-white"
          >
            Item {item}
          </motion.div>
        ))}
      </motion.div>

      {/* Hover Animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {["Scale", "Rotate", "Lift"].map((type, idx) => (
          <motion.div
            key={type}
            className="p-6 bg-gray-800 rounded-lg text-center text-white cursor-pointer"
            whileHover={
              idx === 0
                ? { scale: 1.1 }
                : idx === 1
                ? { rotate: 10 }
                : { y: -20 }
            }
            whileTap={{ scale: 0.95 }}
          >
            {type} on Hover
          </motion.div>
        ))}
      </div>

      {/* Infinite Animations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-16"
      />

      {/* Scroll-triggered Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="p-8 bg-gray-800 rounded-lg text-white text-center"
      >
        This animates when scrolled into view
      </motion.div>
    </div>
  );
}

// ============================================================================
// EXPORT ALL EXAMPLES
// ============================================================================

export default {
  ButtonExamples,
  CardExamples,
  AnimatedSectionExamples,
  CustomAnimationExamples,
};