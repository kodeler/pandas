import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-4 bg-black" id="contactComponent">
      {/* El footer tiene un relleno vertical (py-4) y un fondo negro (bg-black) */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between px-4">
        {/* Este div contiene los enlaces y las banderas */}
        <div className="text-center md:text-left">
          {/* Enlaces de Privacy Policy y Terms and Conditions */}
          <Link href="/privacy-policy">
            <span className="text-white hover:underline mr-4">Privacy Policy</span>
          </Link>
          <Link href="/terms-and-conditions">
            <span className="text-white hover:underline mr-4">Terms and Conditions</span>
          </Link>
        </div>
        <div className="text-center text-white  flex ">
          {/* Emoji de panda */}
          <span role="img" aria-label="panda">
            🐼
          </span>
          {/* Banderas de países */}
          <span role="img" aria-label="usa-flag" className="ml-2">
            🇺🇸
          </span>
          <span role="img" aria-label="mexico-flag" className="ml-2">
            🇲🇽
          </span>
          <span role="img" aria-label="colombia-flag" className="ml-2">
            🇨🇴
          </span>
          <span role="img" aria-label="brazil-flag" className="ml-2">
            🇧🇷
          </span>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          {/* Información de contacto */}
          <p className="text-white">Contact:</p>
          <p className="text-white">Email: services@pandaslabs.com</p>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center px-4">
        {/* Derechos de autor */}
        <p className="text-white">
          © {new Date().getFullYear()} Pandaslabs LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;