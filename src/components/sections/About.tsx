import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants,zoomInVariants } from './animation'

function About() {
  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>

      <motion.div
      initial='hidden'
      whileInView="visible"
      variants={slideUpVariants}
      className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
      
      <motion.h1
      variants={slideUpVariants} className='text-yellow-500 text-2xl'
      >Welcome To 
      </motion.h1>

      <motion.h1
      variants={slideUpVariants} 
      className='text-white uppercase text-[40px] font-bold'
      >IMS Coatings & Engineering (Pvt) Ltd  
      </motion.h1>
      
      <div className='w-[120px] h-[6px] bg-yellow-500'></div>
      <p className='text-3xl italic text-gray-50 mt-[60px]'
      >We give the best solutions</p>
      </motion.div>

      <motion.div
      initial='hidden'
      whileInView="visible"
      variants={slideUpVariants}
      className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
      ><p className='text-white text-2xl text-justify'>IMS Coatings & Engineering (Pvt) Ltd. 
      is been Appointed as the official Dealer and Distributor for Sri Lanka 
      by Carboline USA and Carboline India who is the southeast asian market 
      manufacturer. The Officials of IMS Coatings & Engineering has served in 
      the Middle East since 2005 to 2017 in the field of Corrosion and 
      Corrosion Control by Coatings, Lining and Fire Proofing for Various 
      prestigious projects and expands sharing their abilities in the 
      Sri Lankan Market till the present time</p>
      <motion.button
      variants={zoomInVariants}
        className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold text-black'> 
       READ MORE 
      </motion.button>
      </motion.div>

    </div>
  )
}

export default About