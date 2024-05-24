// components/UseCasesSlider.js
import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { useTranslations } from 'next-intl';

const UseCasesSlider = () => {
    const t = useTranslations('UseCases');
    const useCases = [
        {
          title: t('items.0.title'),
          description: t('items.0.description'),
          icon:t('items.0.icon'),
        },
        {
          title: t('items.1.title'),
          description: t('items.1.description'),
          icon:t('items.1.icon'),
        },
        {
          title: t('items.2.title'),
          description: t('items.2.description'),
          icon:t('items.2.icon'),
        },
        {
          title: t('items.3.title'),
          description: t('items.3.description'),
          icon:t('items.3.icon'),
        },
        {
          title: t('items.4.title'),
          description: t('items.4.description'),
          icon:t('items.4.icon'),
        },
        {
          title: t('items.5.title'),
          description: t('items.5.description'),
          icon:t('items.5.icon'),
        },
        {
          title: t('items.6.title'),
          description: t('items.6.description'),
          icon:t('items.6.icon'),
        },
        {
          title: t('items.7.title'),
          description: t('items.7.description'),
          icon:t('items.7.icon'),
        },
        {
          title: t('items.8.title'),
          description: t('items.8.description'),
          icon:t('items.8.icon'),
        },
        {
          title: t('items.9.title'),
          description: t('items.9.description'),
          icon:t('items.9.icon'),
        },
        {
          title: t('items.10.title'),
          description: t('items.10.description'),
          icon:t('items.10.icon'),
        },
        {
          title: t('items.11.title'),
          description: t('items.11.description'),
          icon:t('items.11.icon'),
        },
        {
          title: t('items.12.title'),
          description: t('items.12.description'),
          icon:t('items.12.icon'),
        },
        {
          title: t('items.13.title'),
          description: t('items.13.description'),
          icon:t('items.13.icon'),
        },
        {
          title: t('items.14.title'),
          description: t('items.14.description'),
          icon:t('items.14.icon'),
        },
        {
          title: t('items.15.title'),
          description: t('items.15.description'),
          icon:t('items.15.icon'),
        },
        {
          title: t('items.16.title'),
          description: t('items.16.description'),
          icon:t('items.16.icon'),
        },
        {
          title: t('items.17.title'),
          description: t('items.17.description'),
          icon:t('items.17.icon'),
        },
        {
          title: t('items.18.title'),
          description: t('items.18.description'),
          icon:t('items.18.icon'),
        },
        {
          title: t('items.19.title'),
          description: t('items.19.description'),
          icon:t('items.19.icon'),
        },
      ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="text-center">
        <h2 className="text-base font-semibold text-primary tracking-wide uppercase">{t('title')}</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        {t('description')}
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
        {t('details')}
        </p>
      </div>
      <div className="mt-10">
        <Slider {...settings}>
          {useCases.map((useCase) => (
            <motion.div
              key={useCase.title}
              className="p-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-full flex flex-col justify-between p-6 bg-gray-800 rounded-lg shadow-lg">
                <div>
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-black">
                      <span className="text-xl">{useCase.icon}</span>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-white">{useCase.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-300">{useCase.description}</dd>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default UseCasesSlider;

