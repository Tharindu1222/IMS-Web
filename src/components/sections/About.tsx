import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

function About() {
  return (
    <section id="about" className="w-full py-20 flex justify-center items-center bg-gray-900">
      <div className="lg:w-[80%] w-[90%] flex flex-col lg:flex-row justify-between items-center gap-12">
        
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[55%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-yellow-500 text-3xl font-semibold tracking-wider"
          >
            Welcome To
          </motion.h1>

          <motion.h1
            variants={slideUpVariants}
            className="text-white uppercase text-5xl font-extrabold leading-tight"
          >
            IMS Coatings & Engineering (Pvt) Ltd
          </motion.h1>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-yellow-500"></div>

          <p className="text-2xl italic text-gray-300 mt-6">
            We give the best solutions
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[45%] w-full flex flex-col justify-center items-start gap-6 bg-white/10 p-8 rounded-xl shadow-lg backdrop-blur-lg"
        >
          <p className="text-white text-lg text-justify leading-relaxed">
          IMS Coatings & Engineering (Pvt) Ltd. 
      is been Appointed as the official Dealer and Distributor for Sri Lanka 
      by Carboline USA and Carboline India who is the southeast asian market 
      manufacturer. The Officials of IMS Coatings & Engineering has served in 
      the Middle East since 2005 to 2017 in the field of Corrosion and 
      Corrosion Control by Coatings, Lining and Fire Proofing for Various 
      prestigious projects and expands sharing their abilities in the 
      Sri Lankan Market till the present time
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default About;
