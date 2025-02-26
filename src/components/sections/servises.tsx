import React from 'react';
import { slideUpVariants, zoomInVariants } from './animation';
import { allservices } from '../../export';
import { motion } from 'framer-motion';

function Services() {
  return (
    <section id="clients" className="w-full bg-gray-900 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] mx-auto flex flex-col justify-center items-center gap-8 text-center"
      >
        {/* Heading */}
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-3xl font-semibold tracking-wide"
        >
          Our Services
        </motion.h1>

        {/* Decorative Line */}
        <motion.div variants={slideUpVariants} className="w-24 h-1 bg-yellow-500"></motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full"
        >
          {allservices.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="flex gap-5 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Service Icon */}
              <div className="flex justify-center items-center bg-yellow-500 hover:bg-gray-100 text-white p-4 rounded-lg border-2 border-yellow-500 transition-all duration-300">
                <img
                  src={typeof item.icon === 'string' ? item.icon : ''}
                  alt="Service Icon"
                  className="w-16 h-16"
                />
              </div>

              {/* Service Content */}
              <div className="flex flex-col justify-center items-start gap-3">
                <h1 className="text-2xl font-bold text-white">{item.title}</h1>
                <p className="text-lg text-gray-300">{item.about}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Services;
