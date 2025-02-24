import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">
  
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.heroImg})`, 
        }}
      >
        <div className="absolute inset-0 bg-opacity-20"></div>
      </div>

  
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 md:px-12"
      >
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Your Legal Compass
          <br />
          In A Complex World
        </motion.h1>

       
        <div className="mt-6 space-y-4 text-lg">
          {[
            { icon: <FaPhoneAlt className="text-yellow-400" />, text: "+020 729 156 650" },
            { icon: <FaMapMarkerAlt className="text-yellow-400" />, text: "NSSF Building, 11th Floor, Room 1114, United Kingdom" },
            { icon: <FaEnvelope className="text-yellow-400" />, text: "DeclanManning@workmail.com" },
          ].map((item, index) => (
            <motion.p
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
              className="flex items-center justify-center space-x-2"
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
