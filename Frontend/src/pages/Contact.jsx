import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.aboutPic})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-5xl w-full flex mt-40 flex-col md:flex-row gap-8"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {/* Contact Information */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            {[ 
              { icon: <FaPhone />, label: "Phone", value: "+020 729 156 650" },
              { icon: <FaEnvelope />, label: "Email", value: "DeclanManning@workmail.com" },
              { icon: <FaMapMarkerAlt />, label: "Address", value: "Scottish Legal Aid Board Building, 11th Floor, Room 1114, P.O. Box 83106 - 80100, United Kingdom" },
              { icon: <FaClock />, label: "Working Hours", value: "Mon - Fri: 8am - 5pm | Sat - Sun: Closed" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <div className="text-blue-600 text-2xl">{item.icon}</div>
                <div>
                  <p className="text-gray-600">{item.label}:</p>
                  <p className="font-medium text-gray-800">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Need help with legal matters? Have a question? Drop us a line!
          </p>

          <form className="space-y-4">
            {["Your Name", "Your Email", "Your Phone"].map((label, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <label className="block text-gray-700 font-medium">{label}</label>
                <input
                  type={label.includes("Email") ? "email" : "text"}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={`Enter ${label.toLowerCase()}`}
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label className="block text-gray-700 font-medium">Write Message...</label>
              <textarea
                rows="4"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SEND A MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
