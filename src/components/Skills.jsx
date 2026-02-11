import { motion } from "framer-motion";
import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const skills = [
  {
    name: "Frontend Development",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-quaternary to-accent"
  },
  {
    name: "Backend Development",
    technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    color: "from-accent to-success"
  },
  {
    name: "3D & Animation",
    technologies: ["Three.js", "Blender", "GSAP", "WebGL", "React Three Fiber"],
    color: "from-success to-warning",
    href: "https://sketchfab.com/clairecleverlamb",
  },
  {
    name: "Content Creation",
    technologies: ["Video Editing", "Motion Graphics", "Adobe Creative Suite", "OBS Studio"],
    color: "from-warning to-quaternary"
  },
  {
    name: "AI & Machine Learning",
    technologies: ["TensorFlow", "OpenAI API", "Computer Vision", "NLP", "Deep Learning"],
    color: "from-quaternary to-accent"
  },
  {
    name: "DevOps & Tools",
    technologies: ["Docker", "AWS", "Git", "CI/CD", "Vercel", "Netlify"],
    color: "from-accent to-success"
  }
];

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardContent = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
           style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
      </div>
      {skill.href && (
        <span className="absolute top-4 right-4 z-10 text-gray-500 group-hover:text-quaternary transition-colors duration-300" aria-hidden="true">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      )}
      <div className="relative z-10">
        <h3 className="text-light text-xl font-bold mb-4 group-hover:text-quaternary transition-colors duration-300">
          {skill.name}
        </h3>
        <div className="space-y-2">
          {skill.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0.7, 
                x: isHovered ? 0 : -10 
              }}
              transition={{ 
                duration: 0.3, 
                delay: techIndex * 0.05 
              }}
              className="inline-block px-3 py-1 bg-quaternary/20 text-quaternary text-sm rounded-full mr-2 mb-2 hover:bg-quaternary/30 transition-colors duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {skill.href ? (
        <a
          href={skill.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative bg-tertiary/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-quaternary/50 transition-all duration-300 h-full"
          aria-label={`${skill.name} – open in new tab`}
        >
          {cardContent}
        </a>
      ) : (
        <div className="relative bg-tertiary/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-quaternary/50 transition-all duration-300 h-full">
          {cardContent}
        </div>
      )}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="relative z-10 bg-primary py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionText} text-center`}>Skills & Technologies</h2>
          <p className={`${styles.sectionSubText} text-center mt-4`}>What I Work With</p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional Expertise Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.6, 0.75)}
          className="mt-20"
        >
          <h3 className="text-light text-2xl sm:text-3xl font-bold text-center mb-3">
            Additional Expertise
          </h3>
          <p className="text-gray-400 text-center text-sm sm:text-base mb-10 max-w-xl mx-auto">
            Communities, tools, and practices I care about
          </p>
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              { label: "Community Building", detail: "Berkeley ISF", href: "https://www.berkeleyisf.org/", accent: "quaternary" },
              { label: "Strategic Planning", detail: "Agile Sprints", href: null, accent: "accent" },
              { label: "Graphic Design", detail: "Creative Suite", href: "https://clairechenszeying.myportfolio.com", accent: "success" },
              { label: "Open Source", detail: "React Spectrum", href: "https://github.com/adobe/react-spectrum", accent: "warning" },
            ].map((item, index) => {
              const accentColors = {
                quaternary: "border-l-quaternary bg-quaternary/5 hover:bg-quaternary/10",
                accent: "border-l-accent bg-accent/5 hover:bg-accent/10",
                success: "border-l-success bg-success/5 hover:bg-success/10",
                warning: "border-l-warning bg-warning/5 hover:bg-warning/10",
              };
              const row = (
                <>
                  <div className="flex-1 min-w-0">
                    <span className={`block font-semibold text-light ${item.href ? "group-hover:underline underline-offset-2" : ""}`}>
                      {item.label}
                    </span>
                    <span className="block text-gray-400 text-sm mt-0.5">{item.detail}</span>
                  </div>
                  {item.href && (
                    <span className="flex-shrink-0 text-gray-500 group-hover:text-quaternary transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  )}
                </>
              );
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`group flex items-center gap-4 rounded-r-xl border-l-4 py-4 px-5 transition-colors duration-300 ${accentColors[item.accent]}`}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 w-full text-left"
                    >
                      {row}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 w-full">
                      {row}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
