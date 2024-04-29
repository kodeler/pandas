import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./home.css";

const words = ['Revolution', 'Disruption','Innovation'];

const SineWave = () => {
  const paths = [
    { d: 'M 0 50 Q 50 100 100 50 T 200 50', stroke: '#fff', delay: 0 },
    { d: 'M 0 30 Q 50 80 100 30 T 200 30', stroke: '#fff', delay: 0.5 },
    { d: 'M 0 70 Q 50 20 100 70 T 200 70', stroke: '#fff', delay: 1 },
    { d: 'M 0 40 Q 50 90 100 40 T 200 40', stroke: '#fff', delay: 1.5 },
  ];

  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1.5,
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 200 100">
      {paths.map((path, index) => (
        <motion.path
          key={index}
          d={path.d}
          stroke={path.stroke}
          strokeWidth="0.1"
          fill="none"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          custom={{ delay: path.delay }}
          transition={{
            delay: path.delay,
          }}
        />
      ))}
    </svg>
  );
};

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentWordIndex];

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden" id="heroComponent">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <SineWave />
      </div>
      <div className="relative z-10 text-center">
        <h1
          className="text-6xl sm:text-8xl md:text-9xl lg:text-12xl font-bold mb-12 gradient text-transparent bg-clip-text text-center"
          
        >
          [ai] {currentWord}
        </h1>
        <p className="text-xl text-gray-200 text-center">
        The smart solution for fast accurate insights
        </p>
      </div>
    </div>
  );
};

export default Header;