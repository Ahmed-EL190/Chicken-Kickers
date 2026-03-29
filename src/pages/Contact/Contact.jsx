import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaTiktok, FaDollarSign, FaUtensils } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            <FaMapMarkerAlt className="w-4 h-4 mr-2" />
            Find Us
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Visit <span className="text-red-600">Chicken Kickers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Mansoura, we're easy to find and ready to serve you the best fried chicken in town.
          </p>
        </section>

        {/* Contact Information Grid */}
        <section className="grid gap-8 lg:grid-cols-2 mb-20">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaUtensils className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Category</h3>
                  <p className="text-gray-600">Fast Food Restaurant (مطعم طعام سريع)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 mb-1">آخر المشاية بجوار مسجد الخير</p>
                  <p className="text-gray-600 mb-1">Mansoura, Egypt</p>
                  <p className="text-gray-500 text-sm">Postal Code: 15497</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+20 123 456 7890</p>
                  <p className="text-gray-500 text-sm">Call for orders & inquiries</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">orders@chickenkickers.eg</p>
                  <p className="text-gray-500 text-sm">For bulk orders & partnerships</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p><span className="font-medium">Monday - Friday:</span> 11:00 AM - 11:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 11:00 AM - 12:00 AM</p>
                    <p><span className="font-medium">Sunday:</span> 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
            <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <FaMapMarkerAlt className="text-4xl text-red-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Interactive Map</p>
                <p className="text-gray-500 text-sm">آخر المشاية بجوار مسجد الخير</p>
                <p className="text-gray-500 text-sm">Mansoura, Egypt</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://maps.google.com/?q=آخر+المشاية+بجوار+مسجد+الخير+Mansoura+Egypt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors duration-300"
              >
                <FaMapMarkerAlt className="mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Have questions? We'd love to hear from you!</p>
          </div>

          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us more..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Social Media */}
        <section className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/chicken.kickers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://tiktok.com/@chicken.kickers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
