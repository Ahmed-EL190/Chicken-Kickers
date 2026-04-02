import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
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
  FaChevronRight,
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

export default function Home() {
  return (
    <motion.article
      className="min-h-screen bg-[#050505]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Luxury Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden ">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-black via-[#0a0a0a] to-[#1a0505]" />
        
        {/* Decorative Line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-red-600 to-transparent" />
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#ff0000_0%,transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-10">
              {/* Elegant Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3"
              >
                <div className="h-px w-16 bg-linear-to-r from-red-600 to-transparent" />
                <span className="text-red-500/80 tracking-[0.4em] text-xs uppercase font-light">
                  Est. 2020 • Mansoura
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-4">
                  Chicken
                  <span className="block text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700">
                    Kickers
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-red-500/90 font-light tracking-[0.2em] uppercase mt-6">
                  Full Blast Fried Chicken
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 text-lg max-w-lg leading-relaxed font-light border-l-2 border-red-600/30 pl-6"
              >
                Experience the perfect blend of crispy perfection and authentic
                Egyptian spices. Handcrafted with love in Mansoura for the
                ultimate fried chicken experience.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Link
                  to="/menu"
                  className="group relative px-10 py-5 bg-red-600 text-white font-medium tracking-widest uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Order Now
                    <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/contact"
                  className="px-10 py-5 border border-white/20 text-white font-medium tracking-widest uppercase text-sm hover:border-red-600 hover:text-red-500 transition-all duration-300 backdrop-blur-sm"
                >
                  Find Us
                </Link>
              </motion.div>

              {/* Info Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="pt-10 border-t border-white/10 flex flex-wrap gap-10"
              >
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 border border-red-600/30 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-red-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</div>
                    <div className="text-white">Mansoura, Egypt</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 border border-red-600/30 flex items-center justify-center">
                    <FaClock className="text-red-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Hours</div>
                    <div className="text-white">Daily 11AM - 11PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 border border-red-600/30 flex items-center justify-center">
                    <FaUsers className="text-red-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Customers</div>
                    <div className="text-white">500+ Happy</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <div className="absolute inset-0 border border-red-600/20 translate-x-4 translate-y-4" />
                <img
                  src="https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/648989523_962318009461027_3329691687516125818_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHnOT30yynaST6KYmTC_KTMNrVqztbBfWQ2tWrO1sF9ZJ02HXqIIq8yPUWCVh3tPc4XIiTtclXrRNzbJSO7hOss&_nc_ohc=12RQEN9xIgIQ7kNvwFlLpX9&_nc_oc=AdpxqLfgj-ByT17L-6ozPZG6RJud1LVxmbs0bC9qMKEUitJsVLX288skn6VqJP69v6w&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=CM1TutYZcuVDY9Ugfs3P2Q&_nc_ss=7a3a8&oh=00_AfybzURwQqsYIiFt7Qsi_GiUDdJdjMPKRKhlQX0gVllLFg&oe=69D13887"
                  alt="Delicious fried chicken"
                  className="w-full h-full object-cover grayscale-20 contrast-125"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay" />
              </div>

              {/* Floating Rating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-[#0a0a0a] border border-red-600/30 p-8 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-red-600/50 flex items-center justify-center">
                    <FaStar className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">4.9/5</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Customer Rating</div>
                  </div>
                </div>
              </motion.div>

              {/* Award Badge */}
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-3 shadow-lg">
                <div className="flex items-center gap-2 text-sm font-medium tracking-wider uppercase">
                  <FaAward />
                  #1 in Mansoura
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Meals Section */}
      <section className="py-24 bg-[#080808] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-red-600/50 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-red-600/80 tracking-[0.4em] text-xs uppercase block mb-4"
            >
              Culinary Excellence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              Our Signature <span className="text-red-600">Dishes</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 max-w-2xl mx-auto font-light"
            >
              Discover our most popular fried chicken creations that keep customers coming back
            </motion.p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMeals.map((meal, index) => (
              <motion.div
                key={meal.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeaturedMealCard meal={meal} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7f1d1d_0%,transparent_50%)] opacity-20" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="border border-white/10 p-8 md:p-16 relative">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-600 -translate-x-px -translate-y-px" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-600 translate-x-px translate-y-px" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-red-600/80 tracking-[0.4em] text-xs uppercase block mb-4">
                  Limited Time
                </span>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Weekend Special <span className="text-red-600">Combo</span>
                </h3>
                <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
                  Get 15% off on all family combos this weekend! Perfect for gatherings and game nights.
                </p>
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 text-white font-medium tracking-widest uppercase text-sm hover:bg-red-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                >
                  Order Now <FaChevronRight />
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 border border-red-600/20 translate-x-6 translate-y-6" />
                <div className="relative overflow-hidden">
                  <img
                    src="https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/484354977_683532817339549_2785435405229920155_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFvYGufwSTnBISuikkMSivjN5uWW8p4dNs3m5Zbynh027MX-_yuVXA4FEo__wNwubfRASRkLyZKHfXjUjNnbOg3&_nc_ohc=X2cj7u2uxxcQ7kNvwHHHfCj&_nc_oc=Adqg0tKlphUI6wOuNSR3C6ETEb90YeIhUF8UbzleiBe7enaTslA7YS2G32FffvbAnqw&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=fJ0JNRwjnAt3WOvL-sAmhA&_nc_ss=7a3a8&oh=00_AfwBcfQhSoQ0ZuAh07fYtu3w66sYL8z7suWiPthjEvMc-g&oe=69D149EF"
                    alt="Special combo"
                    className="w-full h-96 object-cover grayscale-20"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Favorites Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-red-600/80 tracking-[0.4em] text-xs uppercase block mb-4">
              Fan Favorites
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Customer <span className="text-red-600">Favorites</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light">
              What our regulars can't get enough of
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {customerFavorites.map((meal, index) => (
              <motion.div
                key={meal.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeaturedMealCard meal={meal} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#050505] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#7f1d1d_0%,transparent_50%)] opacity-20" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="text-red-600/80 tracking-[0.4em] text-xs uppercase block mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              What Our <span className="text-red-600">Customers</span> Say
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0a0a0a] border border-white/5 p-8 hover:border-red-600/30 transition-all duration-500 group"
              >
                <div className="flex text-red-600 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-gray-400 italic mb-8 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div>
                    <h4 className="font-bold text-white tracking-wide">{testimonial.name}</h4>
                    <div className="text-xs text-red-600/80 uppercase tracking-widest mt-1">Verified Customer</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-red-600/80 tracking-[0.4em] text-xs uppercase block mb-4">
              Our Promise
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Why Choose <span className="text-red-600">Chicken Kickers?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light">
              What makes us the best choice for fried chicken in Mansoura
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaUtensils className="w-6 h-6" />,
                title: "Fresh Local Ingredients",
                description: "We use only the freshest chicken and ingredients sourced locally in Mansoura.",
              },
              {
                icon: <FaClock className="w-6 h-6" />,
                title: "Secret Egyptian Spice Mix",
                description: "Our unique blend of spices gives our chicken that authentic Egyptian flavor.",
              },
              {
                icon: <FaUsers className="w-6 h-6" />,
                title: "Fast Delivery in Mansoura",
                description: "Quick and reliable delivery service right to your doorstep.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#0a0a0a] border border-white/5 p-10 hover:border-red-600/30 transition-all duration-500"
              >
                <div className="w-16 h-16 border border-red-600/30 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-red-900/20 via-transparent to-red-900/20" />
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Experience the <span className="text-red-600">Best?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 font-light max-w-2xl mx-auto">
            Join thousands of satisfied customers in Mansoura who choose Chicken Kickers for their fried chicken cravings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/menu"
              className="group relative px-12 py-5 bg-red-600 text-white font-medium tracking-widest uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]"
            >
              <span className="relative z-10">Order Online Now</span>
              <div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/contact"
              className="px-12 py-5 border border-white/20 text-white font-medium tracking-widest uppercase text-sm hover:border-red-600 hover:text-red-500 transition-all duration-300 backdrop-blur-sm"
            >
              Visit Our Location
            </Link>
          </div>

          <div className="mt-16 flex justify-center gap-8">
            <a
              href="https://instagram.com/chicken.kickers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-gray-400 hover:border-red-600 hover:text-red-600 transition-all duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://tiktok.com/@chicken.kickers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-gray-400 hover:border-red-600 hover:text-red-600 transition-all duration-300"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </section>
    </motion.article>
  );
}