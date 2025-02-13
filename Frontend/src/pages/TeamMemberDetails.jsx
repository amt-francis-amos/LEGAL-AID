import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { teamMembers } from "../assets/assets"; 

const TeamMemberDetails = () => {
  const { id } = useParams();
  const member = teamMembers[id];

  if (!member) {
    return <div className="text-center text-red-500 text-xl">Member not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-8 mt-40 mb-30">
   
      <img
        src={member.image}
        alt={member.name}
        className="w-[300px] h-[70vh] object-cover rounded-lg shadow-md"
      />


      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800">{member.name}</h2>
        <p className="text-gray-700">{member.details.name}</p>
        <p className="text-sm text-gray-600 italic">{member.details.qualifications}</p>
        <p className="text-gray-700 mt-2">{member.details.expertise}</p>
        <h3 className="font-semibold mt-2">Areas of Practice:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {member.details.areasOfPractice.map((area, idx) => (
            <li key={idx}>{area}</li>
          ))}
        </ul>


        <div className="flex space-x-4 mt-4">
          <a
            href="#"
            className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        
        <Link to="/team" className="mt-6 inline-block text-blue-600 hover:underline">
          ← Back to Team
        </Link>
      </div>
    </div>
  );
};

export default TeamMemberDetails;
