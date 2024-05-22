import React from 'react';
import Image from 'next/image';
import graphImage from './../../public/assets/diagram.png';

import {useTranslations} from 'next-intl';

function Diagram() {
  const t = useTranslations('Infrastructure');
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="lg:text-center">
        <h2 className="text-base text-[#FFC857] font-semibold tracking-wide uppercase">{t('title')}</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        {t('description')}
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
        {t('details')}
        </p>
      </div>
      <div className="max-w-full md:max-w-2xl lg:max-w-4xl mx-auto">
        <Image
          src={graphImage}
          alt="Graphic"
          className="bg-transparent w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
}

export default Diagram;