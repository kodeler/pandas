import React from 'react';
import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('Services');
  const services = [
    {
      name: t('items.0.title'),
      description: t('items.0.description'),
    },
    {
      name: t('items.1.title'),
      description: t('items.1.description'),},
    {
      name: t('items.2.title'),
      description: t('items.2.description'),},
    {
      name: t('items.3.title'),
      description: t('items.3.description'),},
    {
      name: t('items.4.title'),
      description: t('items.4.description'),},
    {
      name: t('items.5.title'),
      description: t('items.5.description'),},
    {
      name: t('items.6.title'),
      description: t('items.6.description'),},
    {
      name: t('items.7.title'),
      description: t('items.7.description'),},
    {
      name: t('items.8.title'),
      description: t('items.8.description'),},
    {
      name: t('items.9.title'),
      description: t('items.9.description'),},
    {
      name: t('items.10.title'),
      description: t('items.10.description'),},
    {
      name: t('items.11.title'),
      description: t('items.11.description'),},
    {
      name: t('items.12.title'),
      description: t('items.12.description'),},
  ];

  return (
    <div className="bg-black py-16" id="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#FFC857] font-semibold tracking-wide uppercase">{t('title')}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          {t('subtitle')}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
          {t('description')} 
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#FFC857] text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{service.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;