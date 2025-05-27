import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* About Us */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold relative pb-2 after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            ABOUT US
          </h3>
          <p className="text-sm leading-relaxed max-w-md">
            At Scottish Legal Aid Board, we are not just legal advisors; we are strategic partners invested in your triumph. We go beyond traditional legal counsel, immersing ourselves in your world to gain a deep understanding of your unique goals and aspirations.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold relative pb-2 after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            SERVICES
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Litigation</li>
            <li>Immigration</li>
            <li>Conveyance</li>
            <li>More...</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold relative pb-2 after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            CONTACT DETAILS
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>LONDON EC4V 6AB</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-yellow-400" />
              <span>DeclanManning@workmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+44 1234 567890</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold relative pb-2 after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/team" className="hover:text-yellow-400 transition">Team</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold relative pb-2 after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            WORKING HOURS
          </h3>
          <p className="text-sm">Monday - Friday</p>
          <p className="text-sm">8:00 a.m - 5:00 p.m</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm">
        © {new Date().getFullYear()} Scottish Legal Aid Board. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
