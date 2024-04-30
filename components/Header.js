import React, { useState, useEffect } from 'react';
import "./home.css";

const words = ['Stores', 'Ecommerce', 'Retailers', 'Wholesalers', 'Distributors', 'Manufacturers'];

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentWordIndex];

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden" id="heroComponent">
      <div className="relative z-10 text-center">
        <h1
          className="text-6xl sm:text-8xl md:text-9xl lg:text-12xl font-bold gradient text-transparent bg-clip-text text-center"
          
        >
          Data Analytics for
        </h1>
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-12xl font-bold mb-12 gradient text-transparent bg-clip-text text-center"
          
        >
          {currentWord}
        </h1>

        <p className="text-xl text-gray-200 text-center">
        Intelligent Autonomous Agents: Empowering Data-Driven Businesses
        </p>
      </div>
    </div>
  );
};

export default Header;