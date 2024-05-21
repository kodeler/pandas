import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const meteoritos = Array.from({ length: 100 }, () => ({
  x: Math.random() * 200 - 100,
  y: Math.random() * 200 - 100,
  rotate: Math.random() * 360,
  scale: Math.random() * 0.5 + 0.5,
  duration: Math.random() * 5 + 2,
}));

const Footer = () => {
  return (
    <footer className="relative py-4 bg-black" id="contactComponent">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between px-4">
        <div className="text-center md:text-left">
          <Link href="/privacy-policy">
            <span className="text-white hover:underline mr-4"> Privacy Policy</span>
          </Link>
          <Link href="/terms-and-conditions">
            <span className="text-white hover:underline mr-4 mx-4">Terms and Conditions</span>
          </Link>
        </div>
        <div className="flex flex-col items-center md:block mt-4 md:mt-0">
          <span className="text-white">🐼 We are Pandas that go beyond limits</span>
          <div className="text-center md:text-left mt-4">
            <p className="text-white">Contact:</p>
            <p className="text-white">Email: services@pandaslabs.com</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center px-4">
        <p className="text-white">
          © {new Date().getFullYear()} Pandas Labs. All rights reserved.
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {meteoritos.map((meteorito, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-white rounded-full"
            initial={{ x: -100, y: -100, rotate: 0, scale: 0 }}
            animate={{
              x: `${meteorito.x}vw`,
              y: `${meteorito.y}vh`,
              rotate: meteorito.rotate,
              scale: meteorito.scale,
            }}
            transition={{
              duration: meteorito.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;