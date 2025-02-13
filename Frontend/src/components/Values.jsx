import React from "react";
import { FaUserTie, FaBalanceScale, FaShieldAlt, FaGavel, FaHandsHelping, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const values = [
  {
    icon: <FaUserTie className="text-4xl text-blue-600" />,
    title: "Client-Centered Service",
    description:
      "Our primary focus is on our clients. We provide personalized legal advice and representation that is responsive to their unique needs.",
  },
  {
    icon: <FaBalanceScale className="text-4xl text-green-600" />,
    title: "Legal Excellence",
    description:
      "We uphold the highest standards of legal excellence, combining deep legal knowledge, experience, and meticulous attention to detail.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-red-600" />,
    title: "Ethics and Integrity",
    description:
      "Integrity and ethics form the foundation of our practice. We act with professionalism, honesty, and transparency in all interactions.",
  },
  {
    icon: <FaGavel className="text-4xl text-purple-600" />,
    title: "Advocacy and Justice",
    description:
      "As legal advocates, we passionately fight for justice and our clients' rights through negotiation and litigation.",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-orange-600" />,
    title: "Community Engagement",
    description:
      "We contribute to our communities through pro bono work, charitable initiatives, and efforts to improve access to justice.",
  },
  {
    icon: <FaUsers className="text-4xl text-indigo-600" />,
    title: "Professional Collaboration",
    description:
      "We foster teamwork and diversity, leveraging our collective expertise to provide comprehensive legal services.",
  },
];

const Values = () => {
  return (
    <div className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-5 text-gray-800">Our Values</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      <div className="flex overflow-x-auto space-x-6 mt-20 scrollbar-hide">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="min-w-[300px] md:min-w-[350px] bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
          >
            {value.icon}
            <h3 className="text-xl font-semibold mt-4">{value.title}</h3>
            <p className="text-gray-600 mt-2">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Values;
