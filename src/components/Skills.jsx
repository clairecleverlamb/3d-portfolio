import { motion } from "framer-motion";
import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const skills = [
  {
    name: "Frontend Development",
    icon: "🎨",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-quaternary to-accent"
  },
  {
    name: "Backend Development",
    icon: "⚙️",
    technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    color: "from-accent to-success"
  },
  {
    name: "3D & Animation",
    icon: "🚀",
    technologies: ["Three.js", "Blender", "GSAP", "WebGL", "React Three Fiber"],
    color: "from-success to-warning"
  },
  {
    name: "Content Creation",
    icon: "📹",
    technologies: ["Video Editing", "Motion Graphics", "Adobe Creative Suite", "OBS Studio"],
    color: "from-warning to-quaternary"
  },
  {
    name: "AI & Machine Learning",
    icon: "🤖",
    technologies: ["TensorFlow", "OpenAI API", "Computer Vision", "NLP", "Deep Learning"],
    color: "from-quaternary to-accent"
  },
  {
    name: "DevOps & Tools",
    icon: "🔧",
    technologies: ["Docker", "AWS", "Git", "CI/CD", "Vercel", "Netlify"],
    color: "from-accent to-success"
  }
];

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-tertiary/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-quaternary/50 transition-all duration-300 h-full">
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
             style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
        </div>
        
        <div className="relative z-10">
          <div className="text-4xl mb-4">{skill.icon}</div>
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
      </div>
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

        {/* Additional Skills Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.6, 0.75)}
          className="mt-20"
        >
          <h3 className="text-light text-3xl font-bold text-center mb-12">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Community Building", "Strategic Planning", "Graphic Design", "Open Source"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-tertiary/20 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800 hover:border-quaternary/50 transition-all duration-300"
              >
                <div className="text-quaternary text-sm font-semibold">{skill}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
