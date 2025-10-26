import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = ({ scrollContainer }) => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainer?.current) {
        const scrollTop = scrollContainer.current.scrollTop;
        setScrolled(scrollTop > 100);
        
        // Show all navigation items once user starts scrolling
        if (scrollTop > 30) {
          setVisibleItems(navLinks.map(nav => nav.id));
        } else {
          // Show items progressively based on scroll progress
          const scrollHeight = scrollContainer.current.scrollHeight;
          const clientHeight = scrollContainer.current.clientHeight;
          const scrollProgress = scrollTop / (scrollHeight - clientHeight);
          
          const newVisibleItems = [];
          const totalItems = navLinks.length;
          const itemsToShow = Math.max(1, Math.ceil(scrollProgress * totalItems));
          
          for (let i = 0; i < itemsToShow; i++) {
            if (navLinks[i]) {
              newVisibleItems.push(navLinks[i].id);
            }
          }
          
          setVisibleItems(newVisibleItems);
        }
      }
    };

    if (scrollContainer?.current) {
      scrollContainer.current.addEventListener("scroll", handleScroll);
      // Initial call to set up visible items
      handleScroll();
    }

    return () => {
      if (scrollContainer?.current) {
        scrollContainer.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainer]);

  useEffect(() => {
    if (!scrollContainer?.current) return;

    const sections = scrollContainer.current.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        root: scrollContainer.current,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [scrollContainer]);

  return (
    <nav
      className="w-full flex items-center bg-gradient-to-b from-black sm:bg-none p-8 sm:px-16 sm:py-10 fixed z-40 pointer-events-none"
    >
      <div className='w-full flex justify-between items-start mx-auto'>
        <Link
          to='/'
          className='flex items-start'
          onClick={() => {
            setActive("hero");
            if (scrollContainer?.current) {
              scrollContainer.current.scrollTo(0, 0);
            }
          }}
        >
          <motion.p 
            className='text-light text-[26px] lg:text-[36px] font-bold pointer-events-auto cursor-pointer flex bg-gradient-to-r from-quaternary to-accent bg-clip-text text-transparent'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            CC
          </motion.p>
        </Link>

        <ul className='list-none hidden sm:flex flex-col gap-5'>
          <AnimatePresence>
            {navLinks.map((nav, index) => {
              const isVisible = visibleItems.includes(nav.id);
              return (
                <motion.li
                  key={nav.id}
                  initial={{ opacity: 0, x: 50, scale: 0.8 }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    transition: { 
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  } : { 
                    opacity: 0, 
                    x: 50, 
                    scale: 0.8,
                    transition: { 
                      duration: 0.3,
                      ease: "easeIn"
                    }
                  }}
                  exit={{ opacity: 0, x: 50, scale: 0.8 }}
                  className={`relative flex items-center ${
                    active === nav.id ? "text-light" : "text-gray-400"
                  } hover:text-light text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer transition-colors duration-300`}
                  onClick={() => setActive(nav.id)}
                >
                  {active === nav.id && (
                    <motion.div 
                      className="fixed right-10 w-2 h-6 lg:h-8 bg-quaternary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain pointer-events-auto cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              <AnimatePresence>
                {navLinks.map((nav, index) => {
                  const isVisible = visibleItems.includes(nav.id);
                  return (
                    <motion.li
                      key={nav.id}
                      initial={{ opacity: 0, x: 30 }}
                      animate={isVisible ? { 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: index * 0.1,
                          duration: 0.4
                        }
                      } : { 
                        opacity: 0, 
                        x: 30,
                        transition: { duration: 0.2 }
                      }}
                      exit={{ opacity: 0, x: 30 }}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.id ? "text-quaternary" : "text-secondary"
                      }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.id);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
