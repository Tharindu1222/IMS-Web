import React from 'react'
import { slideUpVariants, zoomInVariants } from './animation'
import { allservices, clients } from '../../export'
import { motion } from 'framer-motion'

function Services() {
  return (
      
<div id='clients' className='w-full'>
            <motion.div
            initial='hidden'
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
              <motion.h1
              variants={slideUpVariants}
              className='text-yellow-500 text-2xl'
              >
                Our Services
              </motion.h1>
              <motion.div
              variants={slideUpVariants}
              className='w-[120px] h-[6px] bg-yellow-500'>
              </motion.div>
      
      
      
              <motion.div
              initial='hidden'
              whileInView="visible"
              variants={zoomInVariants}
              className='w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]'>
                {allservices.map((item,index)=>(
                  <motion.div
                  variants={zoomInVariants}
                  className='flex justify-center items-start gap-5 p-8'
                   key={index}>
                    <img
                     src={typeof item.icon === 'string' ? item.icon : ''}
                    alt="icon"
                    className="w-[80px] border-2 border-yellow-500 bg-white hover:bg-yellow-500 rounded-lg p-2"
/>
                    <div className="flex flex-col justify-center items-start gap-3">
                    <h1 className="text-xl font-bold text-white">{item.title}</h1>
                    <p className="text-[18px] text-white">{item.about}</p></div>
                   </motion.div>
                ))}
      
              </motion.div>
            </motion.div>
      
          </div>
            
  )
}

export default Services