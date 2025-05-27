import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-12">
        
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-2 relative pb-2 after:content-[''] after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            ABOUT US
          </h3>
          <p className="text-white leading-relaxed">
            At Scottish Legal Aid Board, we are not just legal advisors; we are strategic partners invested in your triumph. We go beyond traditional legal counsel, immersing ourselves in your world to gain a deep understanding of your unique goals and aspirations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 relative pb-2 after:content-[''] after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            SERVICES
          </h3>
          <ul className="text-white space-y-3">
            <li>Litigation</li>
            <li>Immigration</li>
            <li>Conveyance</li>
            <li>More...</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 relative pb-2 after:content-[''] after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            CONTACT DETAILS
          </h3>
          <div className="text-white space-y-3">
            {/* <p className="flex items-center space-x-3">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+020 729 156 650</span>
            </p> */}
            <p className="flex items-center space-x-3">
             
              {/* <span>NSSF Building, 11th Floor, Room 1114</span> */}
              <span>LONDON EC4V 6AB</span> 
            </p>
           
            <p className="flex items-center space-x-3">
             
              <span>DeclanManning@workmail.com</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 relative pb-2 after:content-[''] after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            QUICK LINKS
          </h3>
          <ul className="text-white space-y-3">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/team" className="hover:text-yellow-400 transition">Team</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 relative pb-2 after:content-[''] after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            WORKING HOURS
          </h3>
          <p className="text-white">Monday - Friday</p>
          <p className="text-white">8:00 a.m - 5:00 p.m</p>
        </div>
      </div>

      <div className="mt-12  pt-6 text-center text-white text-lg">
        © {new Date().getFullYear()} Scottish Legal Aid Board. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
