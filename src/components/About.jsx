import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { AstroCorgiCanvas } from ".";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const whatIDoPages = [
  {
    title: "Web Development",
    icon: "quaternary",
    desc: "Building modern, responsive web applications using React, Node.js, and cutting-edge technologies.",
    path: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Content Creation",
    icon: "accent",
    desc: "Creating educational programming content that helps others learn and grow in their careers.",
    path: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    title: "AI Innovation",
    icon: "success",
    desc: "Developing innovative AI applications and exploring the intersection of technology and creativity.",
    path: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Test Automation",
    icon: "warning",
    desc: "Designing and maintaining automated testing systems that improve reliability and team confidence.",
    path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Mentorship & Coaching",
    icon: "quaternary",
    desc: "Mentoring youth in game design and life skills through hands-on projects and supportive guidance.",
    path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Music & Learning Tools",
    icon: "accent",
    desc: "Building software projects that help people learn music and instruments through interactive experiences.",
    path: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
  },
];

const iconColors = {
  quaternary: "bg-quaternary/20 text-quaternary group-hover:bg-quaternary/30 border-quaternary/50",
  accent: "bg-accent/20 text-accent group-hover:bg-accent/30 border-accent/50",
  success: "bg-success/20 text-success group-hover:bg-success/30 border-success/50",
  warning: "bg-warning/20 text-warning group-hover:bg-warning/30 border-warning/50",
};

const About = () => {
  const [spread, setSpread] = useState(0);
  const totalSpreads = Math.ceil(whatIDoPages.length / 2);
  const leftPage = whatIDoPages[spread * 2];
  const rightPage = whatIDoPages[spread * 2 + 1];

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
                  Hi, I'm Claire 👋 a software engineer who values growth, curiosity, and community as much as clever code! 
                  Outside of work, I'm a basketball player, a competitive swimmer at heart forever, a dog lover, and a coffee 
                  enthusiast who finds joy in being outdoors or in the nature, & connecting with others :)
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  My work focuses on building scalable, thoughtful software and educational tools that make complex ideas 
                  easier to understand. Shaped by my experiences in computer science and digital art, as well as real-world engineering environments, 
                  I care about clarity in code, in aesthetics, and in how technology shows up in people's lives!
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
            {/* 3D Astro Corgi – running animation, same style as hero spaceman */}
            <div className="flex justify-center" aria-hidden="true">
              <AstroCorgiCanvas />
            </div>
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
          className="mt-16"
        >
          <h3 className="text-light text-xl font-semibold text-center mb-8">
            What I Do
          </h3>
          {/* Book-style carousel: two pages per spread, flip with prev/next */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-stretch gap-0 rounded-2xl overflow-hidden border border-gray-700/80 bg-tertiary/30 shadow-2xl" style={{ perspective: "1200px" }}>
              {/* Prev */}
              <button
                type="button"
                onClick={() => setSpread((s) => (s > 0 ? s - 1 : totalSpreads - 1))}
                className="flex-shrink-0 w-12 flex items-center justify-center bg-gray-800/60 hover:bg-quaternary/20 text-gray-400 hover:text-quaternary transition-colors"
                aria-label="Previous page"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>

              {/* Left page + spine + right page */}
              <div className="flex-1 flex min-h-[280px]">
                <div className="flex-1 flex border-r border-gray-700/60 bg-gray-800/20 min-w-0">
                  <AnimatePresence mode="wait" initial={false}>
                    {leftPage && (
                      <motion.div
                        key={`left-${spread}`}
                        initial={{ opacity: 1, rotateY: 0 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, x: -24 }}
                        transition={{ type: "tween", duration: 0.25 }}
                        className="flex-1 p-6 flex flex-col min-w-0"
                      >
                        <div className={`inline-flex w-12 h-12 items-center justify-center rounded-xl border mb-4 ${iconColors[leftPage.icon] || iconColors.quaternary} transition-colors`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={leftPage.path} /></svg>
                        </div>
                        <h4 className="text-light font-semibold text-lg mb-2">{leftPage.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed flex-1">{leftPage.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="w-2 flex-shrink-0 bg-gradient-to-b from-gray-700/80 to-gray-800/80" aria-hidden="true" />
                <div className="flex-1 flex bg-gray-800/20 min-w-0">
                  <AnimatePresence mode="wait" initial={false}>
                    {rightPage && (
                      <motion.div
                        key={`right-${spread}`}
                        initial={{ opacity: 1, rotateY: 0 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, x: 24 }}
                        transition={{ type: "tween", duration: 0.25 }}
                        className="flex-1 p-6 flex flex-col min-w-0"
                      >
                        <div className={`inline-flex w-12 h-12 items-center justify-center rounded-xl border mb-4 ${iconColors[rightPage.icon] || iconColors.accent} transition-colors`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={rightPage.path} /></svg>
                        </div>
                        <h4 className="text-light font-semibold text-lg mb-2">{rightPage.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed flex-1">{rightPage.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Next */}
              <button
                type="button"
                onClick={() => setSpread((s) => (s < totalSpreads - 1 ? s + 1 : 0))}
                className="flex-shrink-0 w-12 flex items-center justify-center bg-gray-800/60 hover:bg-quaternary/20 text-gray-400 hover:text-quaternary transition-colors"
                aria-label="Next page"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: totalSpreads }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSpread(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === spread ? "bg-quaternary" : "bg-gray-600 hover:bg-gray-500"}`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
