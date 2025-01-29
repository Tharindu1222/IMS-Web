import React, { FC } from 'react';
import brand1 from '../../assets/ims/Carboline logo.png';
import brand2 from '../../assets/ims/ims1.jpg';
import brand3 from '../../assets/ims/PVT LTD 1.jpg';
import brand5 from '../../assets/ims/client-1.png';
import brand6 from '../../assets/ims/client-2.png';
import brand7 from '../../assets/ims/client-3.png';
import brand8 from '../../assets/ims/client-4.png';
import brand9 from '../../assets/ims/client-5.png';
import brand10 from '../../assets/ims/client-6.png';
import brand11 from '../../assets/ims/one.jpeg';
import brand12 from '../../assets/ims/two.jpg';


// Define the component as a functional component with FC
const Partners: FC = () => {
  return (
    <div
      className="py-8 mt-24 hidden md:block dark:bg-white/100">
        <div
          className="grid grid-cols-11 gap-3 place-items-center"
        >
          {/* Render images with proper TypeScript support */}
          <img src={brand1} alt="brand 1" className="w-[80px]" />
          <img src={brand2} alt="brand 2" className="w-[80px] " /> 
          <img src={brand3} alt="brand 3" className="w-[80px] " />
          <img src={brand11} alt="brand 7" className="w-[80px] " /> 
          <img src={brand12} alt="brand 7" className="w-[80px] " />  
          <img src={brand9} alt="brand 4" className="w-[80px] " />
          <img src={brand5} alt="brand 5" className="w-[80px] " />
          <img src={brand6} alt="brand 6" className="w-[80px] " />
          <img src={brand7} alt="brand 7" className="w-[80px] " />
          <img src={brand8} alt="brand 7" className="w-[80px] " />
          <img src={brand10} alt="brand 7" className="w-[80px] " />

        </div>
      </div>
  );
};

export default Partners;
