import React from 'react';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project4 from '../../assets/project4.jpg';
import project5 from '../../assets/project5.jpg';
import project6 from '../../assets/project6.jpg';
import project7 from '../../assets/project7.jpg';
import project8 from '../../assets/project8.jpg';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

function Portfolio() {
  return (
    <div id="projects" className="w-full">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          Portfolio
        </motion.h1>
        <a href="/createportfolio" className="text-blue-500 underline">
          Create New Project
        
        </a>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold text-center"
        >
          Our Projects
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-full m-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4"
      >
        <img src={project1} alt="Project 1" className="h-[250px] w-full object-cover" />
        <img src={project2} alt="Project 2" className="h-[250px] w-full object-cover" />
        <img src={project3} alt="Project 3" className="h-[250px] w-full object-cover" />
        <img src={project4} alt="Project 4" className="h-[250px] w-full object-cover" />
        <img src={project5} alt="Project 5" className="h-[250px] w-full object-cover" />
        <img src={project6} alt="Project 6" className="h-[250px] w-full object-cover" />
        <img src={project7} alt="Project 7" className="h-[250px] w-full object-cover" />
        <img src={project8} alt="Project 8" className="h-[250px] w-full object-cover" />
      </motion.div>
    </div>
  );
}

export default Portfolio;
