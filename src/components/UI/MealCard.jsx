import { useState } from "react";

export default function MealCard({ meal, onAdd }) {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      onAdd(meal);
    }
    setQuantity(1);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <img src={meal.image} alt={meal.name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-800">{meal.name}</h3>
        <p className="mt-1 text-xs text-slate-500">{meal.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-red-600">{meal.price} EGP</span>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex-1 rounded-lg bg-gray-200 py-2 font-bold text-slate-700 hover:bg-gray-300"
          >
            −
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-12 border border-slate-300 rounded text-center font-bold"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="flex-1 rounded-lg bg-gray-200 py-2 font-bold text-slate-700 hover:bg-gray-300"
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
    </div>
  );
}
