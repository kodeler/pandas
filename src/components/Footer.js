import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

const meteorites = Array.from({ length: 100 }, () => ({
  x: Math.random() * 200 - 100,
  y: Math.random() * 200 - 100,
  rotate: Math.random() * 360,
  scale: Math.random() * 0.5 + 0.5,
  duration: Math.random() * 5 + 2,
}));

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="relative py-4 bg-black" id="contactComponent">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between px-4">
        <div className="text-center md:text-left">
          <Link href="/privacy-policy">
            <span className="text-white hover:underline mr-4">{t('privacyPolicy')}</span>
          </Link>
          <Link href="/terms-and-conditions">
            <span className="text-white hover:underline mr-4 mx-4">{t('termsAndConditions')}</span>
          </Link>
        </div>
        <div className="flex flex-col items-center md:block mt-4 md:mt-0">
          <span className="text-white">{t('pandasLabs')}</span>
          <div className="text-center md:text-left mt-4">
            <p className="text-white">{t('contactlabel')}</p>
            <p className="text-white">{t('contact.email')}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center">
        <p className="text-white">
        ©{new Date().getFullYear()} {t('copyright')}
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {meteorites.map((meteorite, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-white rounded-full"
            initial={{ x: -100, y: -100, rotate: 0, scale: 0 }}
            animate={{
              x: `${meteorite.x}vw`,
              y: `${meteorite.y}vh`,
              rotate: meteorite.rotate,
              scale: meteorite.scale,
            }}
            transition={{
              duration: meteorite.duration,
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