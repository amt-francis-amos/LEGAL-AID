import React from "react";
import { motion } from "framer-motion";
import { assets, servicesData } from "../assets/assets";

const ServicesPage = () => {
  return (
    <div className="relative py-20 px-6 bg-gray-100">
    
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${assets.serviceImg})` }}
      ></div>

    
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mt-10">
AREA OF EXPERTISE</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Our company takes pride in the services we provide to our clientele.
          </p>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 space-y-5 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center relative space-y-4"
            >
              <div className="bg-blue-600 p-5 rounded-full text-white text-3xl absolute -top-8">
                <service.icon />
              </div>
              <h3 className="text-xl font-semibold mt-10">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
