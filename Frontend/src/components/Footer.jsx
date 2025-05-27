import React from "react";
import { MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 scroll-smooth">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-12">
        
        {/* About Us */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-2 relative pb-2 after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            ABOUT US
          </h3>
          <p className="leading-relaxed">
            At Scottish Legal Aid Board, we are not just legal advisors; we are strategic partners invested in your triumph...
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-2 relative pb-2 after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            SERVICES
          </h3>
          <ul className="space-y-3">
            <li>Litigation</li>
            <li>Immigration</li>
            <li>Conveyance</li>
            <li>More...</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-2 relative pb-2 after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            CONTACT DETAILS
          </h3>
          <div className="space-y-3">
            <p className="flex items-center space-x-3">
              <MapPin className="text-yellow-400 w-5 h-5" />
              <span>LONDON EC4V 6AB</span>
            </p>
            <p className="flex items-center space-x-3">
              <Mail className="text-yellow-400 w-5 h-5" />
              <span>DeclanManning@workmail.com</span>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2 relative pb-2 after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            QUICK LINKS
          </h3>
          <ul className="space-y-3">
            <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#team" className="hover:text-yellow-400 transition">Team</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-2 relative pb-2 after:block after:w-16 after:h-1 after:bg-yellow-500 after:mt-1">
            WORKING HOURS
          </h3>
          <p>Monday - Friday</p>
          <p>8:00 a.m - 5:00 p.m</p>
        </div>
      </div>

      <div className="mt-12 pt-6 text-center text-lg">
        © {new Date().getFullYear()} Scottish Legal Aid Board. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
