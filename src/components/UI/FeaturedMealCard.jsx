export default function FeaturedMealCard({ meal }) {
  return (
    <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={meal.image}
          alt={meal.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          {meal.price} EGP
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
          {meal.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {meal.description}
        </p>

        {/* CTA Button */}
        <button className="w-full bg-linear-to-r from-red-500 to-red-600 text-white font-bold py-3 px-6 rounded-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Order Now
        </button>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}