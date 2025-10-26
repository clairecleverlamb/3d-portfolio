import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <div className="relative z-10 bg-primary py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionText}>About Me</h2>
          <p className={styles.sectionSubText}>Introduction</p>
        </motion.div>

        <div className="mt-20 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            variants={fadeIn("right", "spring", 0.1, 1)}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-quaternary to-accent opacity-20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-tertiary/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
                <h3 className="text-light text-2xl font-bold mb-6">
                  Passionate Developer & Content Creator
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm Claire Chen, a passionate software developer and YouTube content creator 
                  with over 500,000 subscribers. I specialize in creating engaging educational 
                  content and building innovative web applications that solve real-world problems.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  With a Computer Science background from ODU and experience working with 
                  Fortune 500 companies, I bring both technical expertise and creative vision 
                  to every project. My videos have garnered over 30 million views, helping 
                  developers worldwide learn and grow.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-quaternary/20 text-quaternary rounded-full text-sm font-medium">
                    Full-Stack Development
                  </span>
                  <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    Content Creation
                  </span>
                  <span className="px-4 py-2 bg-success/20 text-success rounded-full text-sm font-medium">
                    AI Applications
                  </span>
                  <span className="px-4 py-2 bg-warning/20 text-warning rounded-full text-sm font-medium">
                    Educational Design
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.2, 1)}
            className="flex-1"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-tertiary/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-quaternary/50 transition-all duration-300">
                <div className="text-quaternary text-3xl font-bold mb-2">500K+</div>
                <div className="text-gray-300 text-sm">YouTube Subscribers</div>
              </div>
              <div className="bg-tertiary/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-quaternary/50 transition-all duration-300">
                <div className="text-accent text-3xl font-bold mb-2">30M+</div>
                <div className="text-gray-300 text-sm">Total Views</div>
              </div>
              <div className="bg-tertiary/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-quaternary/50 transition-all duration-300">
                <div className="text-success text-3xl font-bold mb-2">5+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-tertiary/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-quaternary/50 transition-all duration-300">
                <div className="text-warning text-3xl font-bold mb-2">50+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)}
          className="mt-20"
        >
          <h3 className="text-light text-3xl font-bold text-center mb-12">
            What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tertiary/50 to-quaternary/10 rounded-2xl p-8 border border-gray-800 hover:border-quaternary/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-quaternary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-quaternary/30 transition-all duration-300">
                <svg className="w-8 h-8 text-quaternary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-light text-xl font-bold mb-4">Web Development</h4>
              <p className="text-gray-300 leading-relaxed">
                Building modern, responsive web applications using React, Node.js, and cutting-edge technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-tertiary/50 to-accent/10 rounded-2xl p-8 border border-gray-800 hover:border-accent/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-all duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-light text-xl font-bold mb-4">Content Creation</h4>
              <p className="text-gray-300 leading-relaxed">
                Creating educational programming content that helps developers learn and grow in their careers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-tertiary/50 to-success/10 rounded-2xl p-8 border border-gray-800 hover:border-success/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-success/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-success/30 transition-all duration-300">
                <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-light text-xl font-bold mb-4">AI Innovation</h4>
              <p className="text-gray-300 leading-relaxed">
                Developing innovative AI applications and exploring the intersection of technology and creativity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
