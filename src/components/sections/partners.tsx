import React, { FC } from 'react';
import brand1 from '../../assets/ims/Carboline logo.png';
import brand2 from '../../assets/ims/ims1.jpg';
import brand3 from '../../assets/ims/PVT LTD 1.jpg';

// Define the component as a functional component with FC
const Partners: FC = () => {
  return (
    <div
      className="py-8 mt-24 hidden md:block dark:bg-white/100"
    >
      <div className="container">
        <div
          className="grid grid-cols-5 gap-3 place-items-center"
        >
          {/* Render images with proper TypeScript support */}
          <img src={brand1} alt="brand 1" className="w-[80px]" />
          <img src={brand2} alt="brand 2" className="w-[80px] " /> 
          <img src={brand3} alt="brand 2" className="w-[80px] " />  
        </div>
      </div>
    </div>
  );
};

export default Partners;
