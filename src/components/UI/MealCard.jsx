import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function MealCard({ meal, onAdd }) {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      onAdd(meal);
    }
    setQuantity(1);
  };

  return (
    <motion.div 
      className="overflow-hidden rounded-2xl border border-red-500/20 bg-black shadow-sm transition hover:-translate-y-2 hover:shadow-red-500/10"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={meal.image} alt={meal.name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{meal.name}</h3>
        <p className="mt-1 text-xs text-gray-400">{meal.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-red-500">{meal.price} EGP</span>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex-1 rounded-lg bg-gray-800 py-2 font-bold text-white hover:bg-gray-700"
          >
            −
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-12 border border-red-500/20 rounded text-center font-bold bg-black text-white"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="flex-1 rounded-lg bg-gray-800 py-2 font-bold text-white hover:bg-gray-700"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAdd}
          className="mt-3 w-full rounded-lg bg-red-600 px-4 py-2 font-bold text-white transition hover:bg-red-500"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
