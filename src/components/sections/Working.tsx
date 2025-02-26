import { motion } from 'framer-motion';
import React from 'react';
import { slideUpVariants, zoomInVariants } from './animation';
import { planning } from '../../export';

function Working() {
  return (
    <section id="working" className="w-full bg-gray-100 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto flex flex-col justify-center items-center gap-6 text-center"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-3xl font-semibold tracking-wide"
        >
          Step By Step
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className="text-gray-900 uppercase text-5xl font-extrabold leading-tight"
        >
          We Give The Best Solution
        </motion.h1>

        {/* Decorative Line */}
        <motion.div variants={slideUpVariants} className="w-24 h-1 bg-yellow-500"></motion.div>

        {/* Planning Steps Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full"
        >
          {planning.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="flex flex-col justify-center items-center gap-5 bg-white p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-20 h-20 flex justify-center items-center bg-yellow-500 hover:bg-gray-900 text-white p-4 rounded-full transition-all duration-300">
                <item.icon className="size-14" />
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold uppercase text-gray-800">{item.title}</h1>

              {/* Description */}
              <p className="text-lg text-gray-600 text-center">{item.about}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Working;
