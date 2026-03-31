import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaUtensils,
  FaAward,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import FeaturedMealCard from "../../components/UI/FeaturedMealCard";
import { featuredMeals, customerFavorites } from "../../data/meals";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    rating: 5,
    text: "Best fried chicken in Mansoura! The spice blend is incredible and the service is always excellent.",
    image: "https://picsum.photos/100/100?random=user1",
  },
  {
    id: 2,
    name: "Fatima Mahmoud",
    rating: 5,
    text: "Family favorite! We order every weekend. The nuggets are perfect for the kids.",
    image: "https://picsum.photos/100/100?random=user2",
  },
  {
    id: 3,
    name: "Mohamed Ali",
    rating: 5,
    text: "Authentic Egyptian flavors with a modern twist. Highly recommend the shawarma wrap!",
    image: "https://picsum.photos/100/100?random=user3",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

export default function Home() {
  return (
    <motion.article
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 md:py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />

        <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
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
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                  Chicken<span className="text-red-600"> Kickers</span>
                </h1>
                <p className="text-xl md:text-2xl text-red-600 font-semibold mt-2">
                  Full Blast Fried Chicken
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                Experience the perfect blend of crispy perfection and authentic
                Egyptian spices. Handcrafted with love in Mansoura for the
                ultimate fried chicken experience.
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
                <div className="flex items-center text-gray-300">
                  <FaMapMarkerAlt className="w-5 h-5 mr-2 text-red-600" />
                  <span>Mansoura, Egypt</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaClock className="w-5 h-5 mr-2 text-red-600" />
                  <span>Daily 11AM - 11PM</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaUsers className="w-5 h-5 mr-2 text-red-600" />
                  <span>500+ Happy Customers</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/648989523_962318009461027_3329691687516125818_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHnOT30yynaST6KYmTC_KTMNrVqztbBfWQ2tWrO1sF9ZJ02HXqIIq8yPUWCVh3tPc4XIiTtclXrRNzbJSO7hOss&_nc_ohc=12RQEN9xIgIQ7kNvwFlLpX9&_nc_oc=AdpxqLfgj-ByT17L-6ozPZG6RJud1LVxmbs0bC9qMKEUitJsVLX288skn6VqJP69v6w&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=CM1TutYZcuVDY9Ugfs3P2Q&_nc_ss=7a3a8&oh=00_AfybzURwQqsYIiFt7Qsi_GiUDdJdjMPKRKhlQX0gVllLFg&oe=69D13887"
                  alt="Delicious fried chicken"
                  className="w-full h-96 md:h-[500px] object-cover object-center"
                />
                {/* Gradient overlay to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                animate={floatingAnimation}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <FaStar className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Meals Section */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our most popular fried chicken creations that keep
              customers coming back
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
      <section className="py-20 bg-gradient-to-r from-black to-gray-800">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Weekend Special Combo
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Get 15% off on all family combos this weekend! Perfect for
                  gatherings and game nights.
                </p>
                <Link
                  to="/menu"
                  className="inline-block px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300"
                >
                  Order Now
                </Link>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/484354977_683532817339549_2785435405229920155_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFvYGufwSTnBISuikkMSivjN5uWW8p4dNs3m5Zbynh027MX-_yuVXA4FEo__wNwubfRASRkLyZKHfXjUjNnbOg3&_nc_ohc=X2cj7u2uxxcQ7kNvwHHHfCj&_nc_oc=Adqg0tKlphUI6wOuNSR3C6ETEb90YeIhUF8UbzleiBe7enaTslA7YS2G32FffvbAnqw&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=fJ0JNRwjnAt3WOvL-sAmhA&_nc_ss=7a3a8&oh=00_AfwBcfQhSoQ0ZuAh07fYtu3w66sYL8z7suWiPthjEvMc-g&oe=69D149EF"
                  alt="Special combo"
                  className="w-full h-96 md:h-[450px] object-cover object-center rounded-2xl shadow-lg"
                />
                {/* Gradient overlay optional for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Favorites Section */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Customer Favorites
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <div className="flex text-red-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black text-white">
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
                description:
                  "We use only the freshest chicken and ingredients sourced locally in Mansoura.",
              },
              {
                icon: <FaClock className="w-8 h-8" />,
                title: "Secret Egyptian Spice Mix",
                description:
                  "Our unique blend of spices gives our chicken that authentic Egyptian flavor.",
              },
              {
                icon: <FaUsers className="w-8 h-8" />,
                title: "Fast Delivery in Mansoura",
                description:
                  "Quick and reliable delivery service right to your doorstep.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="text-red-400 mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Best?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers in Mansoura who choose Chicken
            Kickers for their fried chicken cravings.
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
            <a
              href="https://instagram.com/chicken.kickers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-300 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://tiktok.com/@chicken.kickers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-300 transition-colors"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </section>
    </motion.article>
  );
}
