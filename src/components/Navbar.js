"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineLogin, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
//import Link from 'next/link';
import {Link} from '@/navigation';
import { useMediaQuery } from 'react-responsive';
import LanguageSelector from './LanguageSelector';

import {useTranslations} from 'next-intl';

const Navbar = () => {
  const t = useTranslations('NavLinks');
  

  const [toggle, setToggle] = useState(true);
  const [menu, setMenu] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (typeof window === 'object') {
      window.addEventListener('scroll', () => {
        if (window.scrollY < 50) {
          setToggle(true);
        } else {
          setToggle(false);
        }
      });
    }
  }, [toggle]);

  return (
    <>
      <nav
        className={
          toggle
            ? 'fixed top-0 right-0 left-0 ease-linear duration-300 px-8 md:px-16 py-5 text-white flex justify-between items-center'
            : 'fixed top-4 left-4 right-4 bg-white text-black px-8 md:px-16 py-5 flex justify-between items-center rounded-lg shadow-lg'
        }
      >



        <div className="flex items-center mr-auto"> {/* Add this line to move the logo to the far left */}
          <Image className="" src={toggle ? '/assets/logo1.png' : '/assets/logo2.png'} alt="logo" width={220} height={120} />
        </div>
        <div> {/* Leave this container without a class to keep the Commerce and Producer buttons centered */}
          {isMobile ? (
            <button
              className={toggle ? 'block md:hidden text-[30px] z-[20]  text-white' : 'block md:hidden text-[30px] z-[20]  text-black'}
              onClick={() => setMenu(!menu)}
            >
              {menu ? <AiOutlineClose className="text-neutral-700" /> : <AiOutlineMenu />}
            </button>
          ) : (
            <ul className="md:flex space-x-7 hidden pr-8">
              <li>
                <button className="font-[500] hover:text-[#FFC857]  duration-75 ease-in" onClick={() => scrollToComponent('heroComponent')}>
                  Home
                </button>
              </li>
              <li>
                <button className="font-[500] hover:text-[#FFC857] duration-75 ease-in" onClick={() => scrollToComponent('Services')}>
                  {t('Services')}
                </button>
              </li>
              <li>
                <button className="font-[500] hover:text-[#FFC857]  duration-75 ease-in" onClick={() => scrollToComponent('howWeWorkComponent')}>
                {t('HowWeWork')}
                </button>
              </li>
              <li>
                <button className="font-[500] hover:text-[#FFC857]  duration-75 ease-in" onClick={() => scrollToComponent('contactComponent')}>
                {t('Contact')}
                </button>
              </li>
              <LanguageSelector/>
            </ul>
          )}
        </div>
        <ul className="md:flex space-x-5 hidden">
          <Link href="https://cloud.pandaslabs.com/sign-in" passHref>
            <button className={toggle ? 'rounded-full text-white items-center gap-2 px-7 py-2' : 'items-center gap-2 text-white bg-black rounded-full px-7 py-2'}>
            {t('Login')}
            </button>
          </Link>
          <Link href="https://cloud.pandaslabs.com/sign-up" passHref>
            <button className={toggle ? 'hidden md:flex bg-[#FFC857] rounded-full text-black items-center gap-2 px-7 py-2' : 'hidden md:flex items-center gap-2 bg-black text-white rounded-full px-7 py-2'}>
            {t('TryPandaslabs')}
            </button>
          </Link>
        </ul>
      </nav>
      {isMobile && (
        <div className={menu ? 'shadow-md py-6 space-y-4 z-[50] bg-gray-100 text-neutral-900 px-5 text-lg font-semibold fixed top-[150px] duration-500 ease-in w-full' : 'w-full duration-500 ease-in-out bg-gray-100 text-neutral-600 px-2 text-lg font-semibold absolute -top-[400px]'}>
          <div className="flex justify-center space-x-4"> {/* Add this line to center the buttons */}
            <Link href="https://cloud.pandaslabs.com/sign-in" passHref>
              <button className="flex items-center gap-2 bg-gradient-to-r bg-gradient-to-r from-[#FFFFFF] to-[#FFC857]  text-black rounded-full px-7 py-2">
              {t('Login')}
              </button>
            </Link>
            <Link href="https://cloud.pandaslabs.com/sign-up" passHref>
              <button className="flex items-center gap-2 bg-gradient-to-r bg-gradient-to-r from-[#FFFFFF] to-[#FFC857]  text-black rounded-full px-7 py-2">
              {t('TryPandaslabs')}
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

