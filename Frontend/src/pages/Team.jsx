import React, { useState, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import { assets, teamMembers } from "../assets/assets";

const TeamPage = () => {
  const [showImages, setShowImages] = useState(false);
  const teamRef = useRef(null);

  const handleToggle = () => {
    setShowImages(true);
    setTimeout(() => {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="relative py-20 px-6 bg-gray-100">
      <div className="text-center mt-20 mb-12">
        <h2 className="text-3xl font-bold text-gray-800">OUR STRENGTH AND OUR KEY</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>
        <h3 className="text-2xl text-gray-700 mt-6">Meet Our Advocates</h3>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          At Scottish Legal Aid Board, we are not just legal advisors, we are strategic partners
          invested in your triumph. With a team of highly skilled and experienced lawyers, we bring
          together a dynamic team with multifaceted skill sets, creating an unrivaled force capable
          of tackling the most complex legal challenges with finesse and precision.
        </p>

        {!showImages && (
          <button
            onClick={handleToggle}
            className="w-9 h-9 text-center p-2 bg-blue-500 mt-6 text-white rounded-full text-3xl animate-bounce"
          >
            <FaArrowDown size={20} />
          </button>
        )}
      </div>

      {showImages && (
        <div ref={teamRef} className="flex flex-col md:flex-row justify-center items-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-[250px] h-[350px] object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              />
             
              <Link to={`/team/${index}`} className="text-xl font-semibold mt-4 cursor-pointer text-white py-3 px-8 bg-blue-500 duration-500 hover:bg-gray-900">
                {member.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamPage;
