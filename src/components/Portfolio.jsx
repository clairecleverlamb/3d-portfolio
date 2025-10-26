import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full flex flex-col lg:flex-row ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center group`}
    >
      <div className='relative w-full lg:w-3/5 overflow-hidden rounded-2xl'>
        <div className="absolute inset-0 bg-gradient-to-r from-quaternary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <img
          src={image}
          alt='project_image'
          className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105'
        />
      </div>

      <div className={`w-full lg:w-2/5 flex flex-col justify-center ${isEven ? "text-left lg:text-left" : "text-left lg:text-right"}`}>
        <h3 className='text-light font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 group-hover:text-quaternary transition-colors duration-300'>
          {name}
        </h3>
        <p className='text-gray-300 text-lg lg:text-xl leading-relaxed mb-8'>
          {description}
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-quaternary text-primary font-semibold rounded-lg hover:bg-quaternary/90 transition-all duration-300">
            View Project
          </button>
          <button className="px-6 py-3 border-2 border-quaternary text-quaternary font-semibold rounded-lg hover:bg-quaternary hover:text-primary transition-all duration-300">
            View Code
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='relative z-10 bg-primary py-20 px-4 sm:px-8 lg:px-16'>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionText} text-center`}>Portfolio</h2>
          <p className={`${styles.sectionSubText} text-center mt-4`}>My Recent Work</p>
        </motion.div>

        <div className='mt-20 flex flex-col gap-16'>
          {portfolio.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
