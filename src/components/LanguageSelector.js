import React, { useState } from 'react';
import {Link, usePathname} from '@/navigation';
import { FaGlobeAmericas } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import {useTranslations} from 'next-intl';

const LanguageSelector = () => {

  const t = useTranslations('NavLinks');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'pt', label: 'portuguese' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <FaGlobeAmericas className="mr-2" />
        {t('Language')}
        {isOpen ? <IoIosArrowUp className="ml-2" /> : <IoIosArrowDown className="ml-2" />}
      </button>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-dropdown"
        >
          {languages.map(({ code, label }) => (
            <Link key={code} href={pathname} locale={code} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;