import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Aims = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${assets.aboutPic})` }}
    >
     
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="absolute top-0 right-10 bg-blue-900 text-white p-10 shadow-lg max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-3">ABOUT US</h2>
        <p className="text-white leading-relaxed">
          Scottish Legal Aid Board Building is a progressive, reputable medium-sized firm dedicated to providing exceptional legal services to individuals, businesses, and organizations. With a team of highly skilled and experienced lawyers, we bring together a dynamic team with multifaceted skill sets, creating an unrivaled force capable of tackling the most complex legal challenges with finesse and precision.
        </p>
      </motion.div>

    
      <div className="container mx-auto px-6 md:px-12 mt-80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              img: assets.telImg,
              title: "Vision",
              text: "Our vision is to be recognized as a leading law firm that consistently delivers exceptional legal services, fosters meaningful client relationships, and positively impacts the lives of individuals, businesses, and communities we serve.",
            },
            {
              img: assets.arrowImg,
              title: "Mission",
              text: "Our mission is to provide exceptional legal services with integrity, professionalism, and a deep commitment to our clients' best interests. Through our mission, we aim to positively impact the lives of our clients, the legal profession, and the communities we serve.",
            },
            {
              img: assets.handImg,
              title: "Commitment",
              text: "At Scottish Legal Aid Board, we strive to be trusted partners, guiding our clients through legal matters and empowering them to achieve their goals with confidence.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 rounded-full shadow-md mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aims;
