import { useContext } from "react";
import { Link } from "react-router-dom";
import MealCard from "../../components/UI/MealCard";
import Cart from "../../components/Cart/Cart";
import { CartContext } from "../../context/CartContextValue";
import { FaUtensils } from "react-icons/fa";

const mealData = [
  // Chicken Pieces
  { id: 1, name: "Crispy Original Pieces", description: "3 pieces of golden original fried chicken", price: 95, image: "https://picsum.photos/400/300?random=101" },
  { id: 2, name: "Spicy Hot Pieces", description: "3 pieces of crispy spicy fried chicken", price: 105, image: "https://picsum.photos/400/300?random=102" },
  { id: 3, name: "Original Combo (5 pcs)", description: "5 pieces original + fries + coleslaw", price: 165, image: "https://picsum.photos/400/300?random=103" },
  { id: 4, name: "Spicy Combo (5 pcs)", description: "5 pieces spicy + fries + coleslaw", price: 180, image: "https://picsum.photos/400/300?random=104" },

  // Chicken Burgers
  { id: 5, name: "Classic Chicken Burger", description: "Tender chicken breast on soft bun", price: 75, image: "https://picsum.photos/400/300?random=105" },
  { id: 6, name: "Spicy Chicken Burger", description: "Hot & spicy chicken with special sauce", price: 85, image: "https://picsum.photos/400/300?random=106" },
  { id: 7, name: "Double Cheese Burger", description: "Chicken + double melted cheese", price: 95, image: "https://picsum.photos/400/300?random=107" },

  // Regular Burgers
  { id: 8, name: "Beef Burger", description: "Premium beef patty with fresh toppings", price: 85, image: "https://picsum.photos/400/300?random=108" },
  { id: 9, name: "Double Beef Burger", description: "Two beef patties with cheese & sauce", price: 115, image: "https://picsum.photos/400/300?random=109" },

  // Fries
  { id: 10, name: "Regular Fries", description: "Golden crispy French fries", price: 35, image: "https://picsum.photos/400/300?random=110" },
  { id: 11, name: "Large Fries", description: "Extra large crispy French fries", price: 50, image: "https://picsum.photos/400/300?random=111" },
  { id: 12, name: "Spicy Fries", description: "Fries seasoned with hot spices", price: 45, image: "https://picsum.photos/400/300?random=112" },

  // Drinks
  { id: 13, name: "Coca-Cola", description: "250ml cold refresh drink", price: 15, image: "https://picsum.photos/400/300?random=113" },
  { id: 14, name: "Pepsi", description: "250ml cold soft drink", price: 15, image: "https://picsum.photos/400/300?random=114" },
  { id: 15, name: "Fanta Orange", description: "250ml fruity fizzy drink", price: 15, image: "https://picsum.photos/400/300?random=115" }
];

export default function Menu() {
  const { addToCart } = useContext(CartContext);

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            <FaUtensils className="w-4 h-4 mr-2" />
            Fresh & Delicious
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Our <span className="text-red-600">Menu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our complete selection of crispy fried chicken, fresh burgers, and delicious sides.
            All made with love in Mansoura.
          </p>
        </section>

        {/* Menu Categories */}
        <div className="space-y-16">
          {/* Chicken Pieces */}
          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🍗 Chicken Pieces</h2>
              <p className="text-lg text-gray-600">Our signature crispy fried chicken in various portions</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {mealData.slice(0, 4).map((meal) => (
                <MealCard key={meal.id} meal={meal} onAdd={addToCart} />
              ))}
            </div>
          </section>

          {/* Chicken Burgers */}
          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🍔 Chicken Burgers</h2>
              <p className="text-lg text-gray-600">Juicy chicken burgers with special sauces</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {mealData.slice(4, 7).map((meal) => (
                <MealCard key={meal.id} meal={meal} onAdd={addToCart} />
              ))}
            </div>
          </section>

          {/* Regular Burgers */}
          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🍔 Regular Burgers</h2>
              <p className="text-lg text-gray-600">Premium beef burgers with fresh toppings</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {mealData.slice(7, 9).map((meal) => (
                <MealCard key={meal.id} meal={meal} onAdd={addToCart} />
              ))}
            </div>
          </section>

          {/* Sides & Drinks */}
          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🥤 Sides & Drinks</h2>
              <p className="text-lg text-gray-600">Complete your meal with our delicious sides</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {mealData.slice(9).map((meal) => (
                <MealCard key={meal.id} meal={meal} onAdd={addToCart} />
              ))}
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Place your order now and enjoy the best fried chicken in Mansoura delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                Continue Shopping
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Find Our Location
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Cart />
    </main>
  );
}