import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaTiktok, FaUtensils, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 font-sans">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-red-500">Chicken Kickers</h3>
            <p className="leading-relaxed">
              Mansoura's premier destination for authentic fried chicken and Egyptian flavors.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://instagram.com/chicken.kickers" target="_blank" rel="noopener noreferrer" className="p-3 bg-red-500 rounded-lg text-white hover:bg-red-600 transition">
                <FaInstagram size={20} />
              </a>
              <a href="https://tiktok.com/@chicken.kickers" target="_blank" rel="noopener noreferrer" className="p-3 bg-red-500 rounded-lg text-white hover:bg-red-600 transition">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-red-500">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <p>
                  آخر المشاية بجوار مسجد الخير<br />
                  Mansoura, Egypt<br />
                  Postal Code: 15497
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-red-500" />
                <p>+20 123 456 7890</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-red-500" />
                <p>orders@chickenkickers.eg</p>
              </div>
              <div className="flex items-start gap-3">
                <FaClock className="text-red-500 mt-1" />
                <p>Every day: 11:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-red-500">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-red-400 transition">Home</Link>
              <Link to="/menu" className="hover:text-red-400 transition">Menu</Link>
              <Link to="/about" className="hover:text-red-400 transition">About Us</Link>
              <Link to="/contact" className="hover:text-red-400 transition">Contact</Link>
            </div>
          </div>

          {/* Restaurant Details */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-red-500">Restaurant Info</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FaUtensils className="text-red-500" />
                <div>
                  <p className="font-medium">Category</p>
                  <p className="text-sm text-gray-400">Fast Food (مطعم طعام سريع)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaDollarSign className="text-red-500" />
                <div>
                  <p className="font-medium">Price Range</p>
                  <p className="text-sm text-gray-400">$</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaUtensils className="text-red-500 mt-1" />
                <div>
                  <p className="font-medium">Services</p>
                  <p className="text-sm text-gray-400">Dine-in, Pickup (تناول الطعام داخل المطعم · استلام من المتجر)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Chicken Kickers. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ in Mansoura, Egypt</p>
        </div>
      </div>
    </footer>
  );
}