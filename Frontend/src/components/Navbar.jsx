import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <Link to="/" className="text-xl font-bold text-blue-900">
          Scottish Legal Aid Board
        </Link>

       
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-gray-700 transition duration-300 ${
                location.pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
            >
              {item.name}
             
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 ${
                  location.pathname === item.path ? "scale-x-100" : "hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        
        <Link
          to="/contact"
          className="hidden md:block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition"
        >
          Get A Quotation
        </Link>

       
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-gray-700 transition duration-300 ${
                location.pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-10 py-3 text-center hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Get A Quotation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
