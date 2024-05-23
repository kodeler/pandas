import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "../styles/header.css";

import {useTranslations} from 'next-intl';

//const words = ['Laboratory', 'Data', 'Model'];
const meteor = Array.from({ length: 200 }, () => ({
  x: Math.random() * 200 - 100,
  y: Math.random() * 200 - 100,
  rotate: Math.random() * 360,
  scale: Math.random() * 0.5 + 0.5,
  duration: Math.random() * 5 + 2,
}));

const Header = () => {
  const t = useTranslations('HeroSection');
  const words = [t('words.item1'), t('words.item2'), t('words.item3')];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentWordIndex];

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden" id="heroComponent">
      <div className="relative z-10 text-center">
        <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-bold gradient text-transparent bg-clip-text text-center">
          {t('title')}
        </h1>
        <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-bold mb-12 gradient text-transparent bg-clip-text text-center">
          {currentWord}
        </h1>
        <p className="text-xl text-gray-200 text-center">{t('subtitle')}</p>
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {meteor.map((meteorites, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-white rounded-full"
            initial={{ x: -100, y: -100, rotate: 0, scale: 0 }}
            animate={{
              x: `${meteorites.x}vw`,
              y: `${meteorites.y}vh`,
              rotate: meteorites.rotate,
              scale: meteorites.scale,
            }}
            transition={{
              duration: meteorites.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;