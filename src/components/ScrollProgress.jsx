import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollProgress = ({ scrollContainer }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainer?.current) {
        const scrollTop = scrollContainer.current.scrollTop;
        const scrollHeight = scrollContainer.current.scrollHeight;
        const clientHeight = scrollContainer.current.clientHeight;
        const progress = Math.min(scrollTop / (scrollHeight - clientHeight), 1);
        setScrollProgress(Math.max(progress, 0));
      }
    };

    if (scrollContainer?.current) {
      scrollContainer.current.addEventListener('scroll', handleScroll);
      // Initial calculation
      handleScroll();
    }

    return () => {
      if (scrollContainer?.current) {
        scrollContainer.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollContainer]);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="w-2 h-32 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-b from-quaternary to-accent rounded-full"
          style={{ height: `${scrollProgress * 100}%` }}
          initial={{ height: 0 }}
          animate={{ height: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <div className="text-xs text-gray-400 mt-2 text-center">
        {Math.round(scrollProgress * 100)}%
      </div>
    </div>
  );
};

export default ScrollProgress;
