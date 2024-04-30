import React from 'react';
import Link from 'next/link';

const Footer = () => {
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
        <div className="text-center">
          <span role="img" aria-label="panda">
            🐼
          </span>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-white">Contact:</p>
          <p className="text-white">Email: services@pandaslabs.com</p>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center px-4">
        <p className="text-white">
          © {new Date().getFullYear()} Pandaslabs LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;