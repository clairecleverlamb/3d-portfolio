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
                  Passionate Developer & Graphic Designer
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Hi, I'm Claire 👋 a software engineer who values growth, curiosity, and community as much as clean code! 
                  Outside of work, I'm a basketball player, a competitive swimmer at heart, a dog lover, and a coffee 
                  enthusiast who finds joy in being outdoors and connecting with others!
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  My work focuses on building scalable, thoughtful software and educational tools that make complex ideas 
                  easier to understand. Shaped by my experiences in computer science and real-world engineering environments, 
                  I care about clarity in code, in communication, and in how technology shows up in people's lives.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-quaternary/20 text-quaternary rounded-full text-sm font-medium">
                    Full-Stack Development
                  </span>
                  <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    Digital Art/Marketing Creation
                  </span>
                  <span className="px-4 py-2 bg-success/20 text-success rounded-full text-sm font-medium">
                    Web Applications
                  </span>
                  <span className="px-4 py-2 bg-warning/20 text-warning rounded-full text-sm font-medium">
                    Tools and Games
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
                <div className="text-quaternary text-3xl font-bold mb-2">5+</div>
                <div className="text-gray-300 text-sm">Fortune 500 Companies</div>
              </div>
              <div className="bg-tertiary/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-quaternary/50 transition-all duration-300">
                <div className="text-accent text-3xl font-bold mb-2">100+</div>
                <div className="text-gray-300 text-sm">Design Projects</div>
              </div>
              <div className="bg-tertiary/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-quaternary/50 transition-all duration-300">
                <div className="text-success text-3xl font-bold mb-2">5+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-tertiary/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-quaternary/50 transition-all duration-300">
                <div className="text-warning text-3xl font-bold mb-2">50+</div>
                <div className="text-gray-300 text-sm">Software Projects Completed</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                Creating educational programming content that helps others learn and grow in their careers.
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

            <div className="bg-gradient-to-br from-tertiary/50 to-warning/10 rounded-2xl p-8 border border-gray-800 hover:border-warning/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-warning/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-warning/30 transition-all duration-300">
                <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-light text-xl font-bold mb-4">Test Automation</h4>
              <p className="text-gray-300 leading-relaxed">
                Designing and maintaining automated testing systems that improve reliability, catch issues early, and make engineering teams more confident shipping software.
              </p>
            </div>

            <div className="bg-gradient-to-br from-tertiary/50 to-quaternary/10 rounded-2xl p-8 border border-gray-800 hover:border-quaternary/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-quaternary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-quaternary/30 transition-all duration-300">
                <svg className="w-8 h-8 text-quaternary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-light text-xl font-bold mb-4">Mentorship & Coaching</h4>
              <p className="text-gray-300 leading-relaxed">
                Mentoring youth in game design and life skills, helping them build confidence, think creatively, and grow through hands-on projects and supportive guidance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-tertiary/50 to-accent/10 rounded-2xl p-8 border border-gray-800 hover:border-accent/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-all duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h4 className="text-light text-xl font-bold mb-4">Music & Learning Tools</h4>
              <p className="text-gray-300 leading-relaxed">
                Building software projects that help people learn music and instruments through interactive, accessible, and engaging experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
