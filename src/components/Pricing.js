import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Pricing = () => {
    const t = useTranslations('Pricing');
    const plans = [
        {
            name: t('plans.0.name'),
            price: t('plans.0.price'),
            features: [
                t('plans.0.details.0'),
                t('plans.0.details.1'),
                t('plans.0.details.3'),
                t('plans.0.details.4'),
                t('plans.0.details.5'),
                t('plans.0.details.6'),

            ],
        },
        {
            name: t('plans.1.name'),
            price: t('plans.1.price'),
            features: [
                t('plans.1.details.0'),
                t('plans.1.details.1'),
                t('plans.1.details.2'),
                t('plans.1.details.3'),
                t('plans.1.details.4'),
                t('plans.1.details.5'),
                t('plans.1.details.6'),
                t('plans.1.details.7'),
                t('plans.1.details.8'),

            ],
        },
        {
            name: t('plans.2.name'),
            price: t('plans.2.price'),
            features: [
                t('plans.2.details.0'),
                t('plans.2.details.1'),
                t('plans.2.details.2'),
                t('plans.2.details.3'),
                t('plans.2.details.4'),
                t('plans.2.details.5'),
                t('plans.2.details.6'),
                t('plans.2.details.7'),
                t('plans.2.details.8'),
                t('plans.2.details.9'),
                t('plans.2.details.10'),
                t('plans.2.details.11'),
                
            ],
        },
        {
            name: t('plans.3.name'),
            price: t('plans.3.price'),
            features: [
                t('plans.3.details.0'),
                t('plans.3.details.1'),
                t('plans.3.details.2'),
                t('plans.3.details.3'),
                t('plans.3.details.4'),
                t('plans.3.details.5'),
                t('plans.3.details.6'),
                t('plans.3.details.7'),
                t('plans.3.details.8'),
                t('plans.3.details.9'),
                t('plans.3.details.10'),
                t('plans.3.details.11'),
                t('plans.3.details.12'),
            ],
        },
    ];

    return (
        <div className="bg-black py-16" id="Prising">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`bg-gray-800 rounded-lg shadow-md p-8 ${
                                    plan.name === 'Pro' ? 'border-4 border-[#FFC857]' : ''
                                }`}
                            >
                                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                                <p className="mt-4 text-4xl font-bold text-[#FFC857]">{plan.price}</p>
                                <ul className="mt-8 space-y-4">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg
                                                className="flex-shrink-0 h-6 w-6 text-[#FFC857]"
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
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="ml-3 text-gray-400">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <Link href="https://cloud.pandaslabs.com/sign-in" passHref>
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FFC857] hover:bg-green"
                                        >
                                             {t('getstarter')}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;