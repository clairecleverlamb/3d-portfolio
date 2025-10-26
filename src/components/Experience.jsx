import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, onClick, isActive, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-6 max-w-xl relative rounded-xl transition-all duration-300 ${
        isActive || isMobile 
          ? "bg-tertiary/50 border border-quaternary/50" 
          : "hover:bg-tertiary/30 border border-transparent"
      }`}
    >
      {(isActive || isMobile) && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-quaternary rounded-r-full my-6 sm:block hidden"></div>
      )}
      <h3
        className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 transition-colors duration-300 ${
          isActive || isMobile ? "text-quaternary" : "text-gray-400 hover:text-light"
        }`}
      >
        {experience.title}
      </h3>
      <p
        className={`text-md lg:text-lg xl:text-xl sm:font-medium pt-2 sm:pl-8 transition-colors duration-300 ${
          isActive || isMobile ? "text-light" : "text-gray-500"
        }`}
      >
        {experience.company_name} | {experience.date}
      </p>
    </div>
  );
};

const ExperienceDetails = ({ experience }) => {
  return (
    <div className="mt-5">
      <div className="bg-tertiary/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
        <ul className="list-none space-y-6">
          {experience.details.map((detail, index) => (
            <li
              key={`experience-detail-${index}`}
              className="text-gray-300 font-medium text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed flex items-start"
            >
              <div className="w-2 h-2 bg-quaternary rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span dangerouslySetInnerHTML={{ __html: detail }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative z-10 bg-primary py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionText} text-center`}>
            Experience
          </h2>
          <p className={`${styles.sectionSubText} text-center mt-4`}>My Professional Journey</p>
        </motion.div>

        <div className="relative mt-20 flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col lg:w-1/3">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                onClick={() => setSelectedJob(experience)}
                isActive={selectedJob === experience}
                isMobile={isMobile}
              />
            ))}
          </div>

          <div className="flex-1 lg:block hidden">
            <ExperienceDetails experience={selectedJob} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "portfolio");
