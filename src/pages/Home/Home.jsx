

import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaClock, FaPhone, FaInstagram, FaTiktok, FaUtensils, FaAward, FaUsers } from "react-icons/fa";
import FeaturedMealCard from "../../components/UI/FeaturedMealCard";
import { featuredMeals, customerFavorites } from "../../data/meals";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    rating: 5,
    text: "Best fried chicken in Mansoura! The spice blend is incredible and the service is always excellent.",
    image: "https://picsum.photos/100/100?random=user1"
  },
  {
    id: 2,
    name: "Fatima Mahmoud",
    rating: 5,
    text: "Family favorite! We order every weekend. The nuggets are perfect for the kids.",
    image: "https://picsum.photos/100/100?random=user2"
  },
  {
    id: 3,
    name: "Mohamed Ali",
    rating: 5,
    text: "Authentic Egyptian flavors with a modern twist. Highly recommend the shawarma wrap!",
    image: "https://picsum.photos/100/100?random=user3"
  }
];

export default function Home() {
  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-50 via-white to-red-50 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                <FaAward className="w-4 h-4 mr-2" />
                #1 Fried Chicken in Mansoura
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                  Chicken
                  <span className="text-red-600"> Kickers</span>
                </h1>
                <p className="text-xl md:text-2xl text-red-600 font-semibold mt-2">
                  Full Blast Fried Chicken
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Experience the perfect blend of crispy perfection and authentic Egyptian spices.
                Handcrafted with love in Mansoura for the ultimate fried chicken experience.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/menu"
                  className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 text-center"
                >
                  Order Now
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-red-600 text-red-600 font-semibold text-lg rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 text-center"
                >
                  Find Us
                </Link>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="w-5 h-5 mr-2 text-red-600" />
                  <span>Mansoura, Egypt</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock className="w-5 h-5 mr-2 text-red-600" />
                  <span>Daily 11AM - 11PM</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaUsers className="w-5 h-5 mr-2 text-red-600" />
                  <span>500+ Happy Customers</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/600/500?random=friedchicken"
                  alt="Delicious fried chicken"
                  className="w-full h-96 md:h-125 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <FaStar className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Meals Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular fried chicken creations that keep customers coming back
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMeals.map((meal) => (
              <FeaturedMealCard key={meal.id} meal={meal} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Weekend Special Combo
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Get 15% off on all family combos this weekend! Perfect for gatherings and game nights.
                </p>
                <Link
                  to="/menu"
                  className="inline-block px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300"
                >
                  Order Now
                </Link>
              </div>
              <div>
                <img
                  src="https://picsum.photos/500/400?random=combo"
                  alt="Special combo"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Favorites Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Favorites
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What our regulars can't get enough of
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {customerFavorites.map((meal) => (
              <FeaturedMealCard key={meal.id} meal={meal} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-red-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Chicken Kickers?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              What makes us the best choice for fried chicken in Mansoura
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaUtensils className="w-8 h-8" />,
                title: "Fresh Local Ingredients",
                description: "We use only the freshest chicken and ingredients sourced locally in Mansoura."
              },
              {
                icon: <FaClock className="w-8 h-8" />,
                title: "Secret Egyptian Spice Mix",
                description: "Our unique blend of spices gives our chicken that authentic Egyptian flavor."
              },
              {
                icon: <FaPhone className="w-8 h-8" />,
                title: "Fast Delivery in Mansoura",
                description: "Quick and reliable delivery service right to your doorstep."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300">
                <div className="text-red-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-600 text-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Best?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers in Mansoura who choose Chicken Kickers for their fried chicken cravings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              Order Online Now
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Visit Our Location
            </Link>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://instagram.com/chicken.kickers" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://tiktok.com/@chicken.kickers" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300 transition-colors">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
