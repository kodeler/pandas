import React from 'react';

const Services = () => {
  const services = [
    {
      name: 'Data analytics without code in natural language',
      description: 'Perform data analysis and gain insights using natural language queries, without the need for coding.',
    },
    {
      name: '24/7 Uninterrupted Support',
      description: 'Our team is available around the clock to provide you with uninterrupted support.',
    },
    {
      name: 'Automatic visualization and report creation',
      description: 'Our platform automatically generates visualizations and comprehensive reports to help you better understand your data.',
    },
    {
      name: 'Anomaly detection and trend identification',
      description: 'Our advanced analytics techniques help identify anomalies and trends within your data.',
    },
    {
      name: 'Integration with popular data sources',
      description: 'Our platform seamlessly integrates with popular data sources such as CSV, Excel, and databases.',
    },
    {
      name: 'Data visualization',
      description: 'Create interactive and insightful visualizations to better understand your data.',
    },
    {
      name: 'Chatbot data analytics',
      description: 'Interact with our chatbot to perform data analysis using natural language queries.',
    },
    {
      name: 'Autonomous resource planning',
      description: 'Our intelligent agents can help you optimize resource allocation and planning.',
    },
    {
      name: 'Intelligent process automation',
      description: 'Automate repetitive tasks and processes using our intelligent automation capabilities.',
    },
    {
      name: 'Predictive financial analytics',
      description: 'Leverage our predictive analytics capabilities to gain insights into your financial performance.',
    },
    {
      name: 'Advanced forecasting and modeling',
      description: 'Our platform provides advanced forecasting and modeling tools to help you make informed decisions.',
    },
    {
      name: 'Cloud-based and scalable',
      description: 'Our cloud-based platform is highly scalable, allowing you to grow your data analytics capabilities as needed.',
    },
    {
      name: 'Secure and compliant',
      description: 'Our platform adheres to the highest security standards and compliance regulations.',
    },
  ];

  return (
    <div className="bg-black py-16" id="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#22C62E] font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Empowering Data-Driven Businesses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Discover our comprehensive suite of services designed to help you unlock the full potential of your data.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#22C62E] text-white">
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