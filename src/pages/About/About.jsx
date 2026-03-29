
import { FaInfoCircle, FaUtensils, FaUsers, FaClock } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            <FaInfoCircle className="w-4 h-4 mr-2" />
            About Us
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            About <span className="text-red-600">Chicken Kickers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded in the heart of Mansoura, Chicken Kickers serves premium fried chicken with authentic Egyptian soul.
            We bring fast, friendly service and a menu inspired by family recipes that have been perfected over generations.
          </p>
        </section>

        {/* Stats Section */}
        <section className="grid gap-8 md:grid-cols-3 mb-20">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Happy Customers</div>
            <div className="text-gray-600">Satisfied families in Mansoura</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-red-600 mb-2">5</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Years Experience</div>
            <div className="text-gray-600">Serving the community since 2019</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Daily Orders</div>
            <div className="text-gray-600">Fresh chicken made daily</div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <FaUtensils className="text-2xl text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We use only the freshest chicken and ingredients sourced locally. Every piece is cooked to perfection with our secret spice blend.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <FaUsers className="text-2xl text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Proudly serving students, families, and visitors from across Dakahlia. We're part of the Mansoura community and love giving back.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <FaClock className="text-2xl text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick preparation and reliable delivery service. We know you're hungry and we don't keep you waiting.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Chicken Kickers?</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="text-left">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center mr-4 font-bold">✓</span>
                  <span>Golden crispy fried chicken made fresh daily</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center mr-4 font-bold">✓</span>
                  <span>Authentic Egyptian flavors & spice blends</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center mr-4 font-bold">✓</span>
                  <span>Affordable prices for students & families</span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center mr-4 font-bold">✓</span>
                  <span>Fast friendly service in the heart of Mansoura</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center mr-4 font-bold">✓</span>
                  <span>Local & trusted by the community</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center mr-4 font-bold">✓</span>
                  <span>Delivery available throughout Mansoura</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
