import React from 'react';
import Link from 'next/link';

const Pricing = () => {
    const plans = [
        {
            name: 'Free',
            price: '0.00',
            features: [
                '1 User',
                '1 Data Source',
                '1 Data laboratory',
                'Free for 7 Days',
                'No Credit Card Required',
                '12000 Tokens',
                '1M Data Points',

            ],
        },
        {
            name: 'Basic',
            price: '17.99',
            features: [
                '1 User',
                '2 Data Source',
                '1 Data laboratory',
                'Data analytics without code in natural language',
                'Integration with popular data sources',
                'Data visualization',
                'Chatbot data analytics',
                '290K Tokens',
                '3M Data Points',

            ],
        },
        {
            name: 'Pro',
            price: '19.99',
            features: [
                '1 User',
                '10 Data Source',
                '5 Data laboratories',
                'Data analytics without code in natural language',
                'Integration with popular data sources',
                'Data visualization',
                'Chatbot data analytics',
                '24/7 Uninterrupted Support',
                'Automatic visualization and report creation',
                'Anomaly detection and trend identification',
                '1M Tokens',
                '9M Data Points',
            ],
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            features: [
                '3 User',
                '20 Data Source',
                '10 Data laboratories',
                'Data analytics without code in natural language',
                'Integration with popular data sources',
                'Data visualization',
                'Chatbot data analytics',
                '24/7 Uninterrupted Support',
                'Automatic visualization and report creation',
                'Anomaly detection and trend identification',
                'Autonomous resource planning',
                'Intelligent process automation',
                'Predictive financial analytics',
                'Advanced forecasting and modeling',
                '9M Tokens',
                '50M Data Points',
            ],
        },
    ];

    return (
        <div className="bg-black py-16" id="Prising">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-[#FFC857] font-semibold tracking-wide uppercase">Pricing</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        The Right Plan for Your Business
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                        Choose the plan that best fits your data analytics needs.
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
                                <p className="mt-4 text-4xl font-bold text-[#FFC857]">${plan.price}/month</p>
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
                                            Get Started
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