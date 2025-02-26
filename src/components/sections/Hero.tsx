import backgroundImage from '../../assets/ims/ims3.jpg';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  return (
    <div
      id="hero"
      className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="relative z-10 max-w-4xl text-white px-6"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-2xl md:text-3xl font-semibold text-yellow-400"
        >
          WE GIVE THE BEST SOLUTIONS
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className="text-4xl md:text-6xl font-extrabold uppercase leading-tight mt-4"
        >
          IMS COATINGS & ENGINEERING (PVT) LTD
        </motion.h1>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-yellow-500 mx-auto my-4"></div>

        <p className="text-lg md:text-xl">
          Official Distributor for Carboline Paints & related Products in Sri Lanka
        </p>

        {/* Button Group */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
        >
          <ScrollLink
            to="about" // Matches Header's About section
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <motion.button
              variants={zoomInVariants}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-lg text-lg font-bold shadow-lg transition-all duration-300"
            >
              READ MORE
            </motion.button>
          </ScrollLink>

          <ScrollLink
            to="contact" // Matches Header's Contact section
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <motion.button
              variants={zoomInVariants}
              className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-white px-8 py-3 rounded-lg text-lg font-bold transition-all duration-300"
            >
              Reach Us
            </motion.button>
          </ScrollLink>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
