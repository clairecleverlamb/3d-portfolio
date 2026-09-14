import { useEffect, useRef } from "react";
import { About, Contact, Experience, Hero, Navbar, Portfolio, Skills } from "./components";
import ScrollProgress from "./components/ScrollProgress";

const Home = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id || !wrapperRef.current) return;
    const el = wrapperRef.current.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative z-0 bg-primary">
      <Navbar scrollContainer={wrapperRef} />
      <ScrollProgress scrollContainer={wrapperRef} />
      <div className="wrapper" ref={wrapperRef}>
        <div id="hero" className="z-10">
          <Hero scrollContainer={wrapperRef} />
        </div>
        <div id="about" className="relative z-30 bg-primary">
          <About />
        </div>
        <div id="portfolio" className="relative z-30 bg-primary">
          <Portfolio />
        </div>
        <div id="experience" className="relative z-30 bg-primary">
          <Experience />
        </div>
        <div id="skills" className="relative z-30 bg-primary">
          <Skills />
        </div>
        <div id="contact" className="relative z-30 bg-primary">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
