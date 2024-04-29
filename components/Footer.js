import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const pendulumVariants = {
  hidden: { x: 0, opacity: 0 },
  visible: {
    x: [-50, 50, 0],
    opacity: 1,
    transition: {
      duration: 2,
      yoyo: Infinity,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

const Footer = () => {
  const balls = [
    { id: 1, delay: 0 },
    { id: 2, delay: 0.2 },
    { id: 3, delay: 0.4 },
    { id: 4, delay: 0.6 },
    { id: 5, delay: 0.8 },
  ];

  return (
    <footer className="py-4 bg-black" id="contactComponent">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between px-4">
        <div className="text-center md:text-left">
          <Link href="/privacy-policy">
            <span className="text-white hover:underline mr-4">Privacy Policy</span>
          </Link>
          <Link href="/terms-and-conditions">
            <span className="text-white hover:underline mr-4">Terms and Conditions</span>
          </Link>
        </div>
        <div className="flex justify-center mt-4 relative">
          {balls.map((ball) => (
            <motion.div
              key={ball.id}
              variants={pendulumVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: ball.delay }}
              className="w-6 h-6 bg-gray-300 rounded-full mx-2"
            />
          ))}
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-white">Contact:</p>
          <p className="text-white">Email: services@pandaslabs.com</p>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center px-4">
        <p className="text-white">
          © {new Date().getFullYear()} pandaslabs Services LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;