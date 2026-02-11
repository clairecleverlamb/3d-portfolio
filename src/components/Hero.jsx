import { motion } from "framer-motion";
import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax relative min-h-screen">
      {/* Enhanced Background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-tertiary to-primary"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-quaternary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className='parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10'>
        <motion.div 
          className="flex-1 lg:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className='font-bold text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px] drop-shadow-2xl'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block text-shadow-lg">Claire</span>
            <span className="block bg-gradient-to-r from-quaternary via-accent to-quaternary bg-clip-text text-transparent drop-shadow-lg">
              Chen
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Position />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className='font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left drop-shadow-xl'>
            I build at the intersection of design and engineering
          </div>
        </motion.div>
      </div>

      {/* Enhanced Parallax Background Images with better visibility */}
      <img className="parallax__stars opacity-60" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets opacity-50" src="./parallax/2Planets.svg" alt="" />
      <img className="parallax__mountain1 opacity-40" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2 opacity-30" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater opacity-25" src="./parallax/5Crater.svg" alt="" />
      <img className="parallax__sun opacity-35" src="./parallax/6Sun.svg" alt="" />

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;
