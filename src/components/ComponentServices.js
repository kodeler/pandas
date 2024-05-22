import React from 'react';
import { AiOutlineDatabase, AiOutlineFileText, AiOutlineLineChart, AiOutlinePieChart } from 'react-icons/ai';
import { useTranslations } from 'next-intl';

const HowWeWork = () => {
  const t = useTranslations('Services2');

  return (
    <div className="bg-black py-8 md:py-16" id="howWeWorkComponent">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-base text-[#FFC857] font-semibold tracking-wide uppercase">{t('title')}</h2>
          <p className="mt-2 text-2xl md:text-3xl leading-8 font-extrabold tracking-tight text-white">
            {t('description')}
          </p>
          <p className="mt-4 text-gray-400 md:text-xl">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
          <div className="p-4 rounded-lg shadow-md bg-gray-900" data-aos="fade-right">
            <AiOutlineDatabase className="text-2xl md:text-4xl text-[#FFC857] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-center text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#FFC857]">
              {t('items.0.title')}
            </h3>
            <p className="text-white text-sm md:text-base">{t('items.0.description')}</p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-gray-900" data-aos="fade-left">
            <AiOutlineFileText className="text-2xl md:text-4xl text-[#FFC857] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-center text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#FFC857]">
              {t('items.1.title')}
            </h3>
            <p className="text-white text-sm md:text-base">{t('items.1.description')}</p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-gray-900" data-aos="fade-right">
            <AiOutlineLineChart className="text-2xl md:text-4xl text-[#FFC857] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-center text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#FFC857]">
              {t('items.2.title')}
            </h3>
            <p className="text-white text-sm md:text-base">{t('items.2.description')}</p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-gray-900" data-aos="fade-left">
            <AiOutlinePieChart className="text-2xl md:text-4xl text-[#FFC857] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-center text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#FFC857]">
              {t('items.3.title')}
            </h3>
            <p className="text-white text-sm md:text-base">{t('items.3.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;