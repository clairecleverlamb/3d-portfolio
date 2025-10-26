import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Portfolio, Skills } from "./components";
import ScrollProgress from "./components/ScrollProgress";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar scrollContainer={wrapperRef} />
        <ScrollProgress scrollContainer={wrapperRef} />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="about" className='relative z-30 bg-primary'>
            <About />
          </div>
          <div id="portfolio" className='relative z-30 bg-primary'>
            <Portfolio />
          </div>
          <div id="experience" className='relative z-30 bg-primary'>
            <Experience />
          </div>
          <div id="skills" className='relative z-30 bg-primary'>
            <Skills />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
