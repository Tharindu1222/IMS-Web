import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { Markets } from "../../export";

const MarketsSection: React.FC = () => {
  return (
    <div id="markets" className="w-full bg-white py-10">
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
          Markets
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-[40px] font-bold text-center"
        >
          Markets We Serve
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="lg:w-full w-[90%] grid lg:grid-cols-2 grid-cols-1 justify-center items-start gap-8 mt-[30px]"
        >
          {Markets.map((market, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="flex flex-col justify-center items-center border-2 border-gray-200 shadow-lg rounded-lg hover:bg-yellow-500 p-6 hover:shadow-xl"
            >
              <img
                src={market.icon}
                alt={market.title}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h2 className="text-black text-2xl font-bold text-center hover:text-white">
                {market.title}
              </h2>
              <p className="text-gray-600 text-center hover:text-black">
                {market.about}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MarketsSection;
