import React from 'react';
import { AiOutlineDatabase, AiOutlineFileText, AiOutlineLineChart, AiOutlinePieChart } from 'react-icons/ai';

const HowWeWork = () => {
  return (
    <div className="bg-black py-8 md:py-16" id="howWeWorkComponent">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-base text-[#22C62E] font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-2xl md:text-3xl leading-8 font-extrabold tracking-tight text-white">
            Comprehensive Solutions to Unlock Your Data's Full Potential
          </p>
          <p className="mt-4 text-gray-400 md:text-xl">
            Explore our suite of services designed to help you harness the power of your data.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
          <div className="p-4 rounded-lg shadow-md bg-gray-900" data-aos="fade-right">
            <AiOutlineDatabase className="text-2xl md:text-4xl text-[#22C62E] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-center text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#22C62E]">Seamless integration with your data ecosystem</h3>
            <p className="text-white text-sm md:text-base">
              Our platform consolidates all your data sources, such as databases, spreadsheets, and APIs, into a unified and secure data warehouse, making it easy to access and analyze your data from a single location.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-gray-900" data-aos="fade-left">
            <AiOutlineFileText className="text-2xl md:text-4xl text-[#22C62E] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-center text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#22C62E]">Natural Language Query</h3>
            <p className="text-white text-sm md:text-base">
              Our platform allows you to ask questions about your data using natural language, making it easy for non-technical users to gain insights and make data-driven decisions without the need for complex queries or coding.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-gray-900" data-aos="fade-right">
            <AiOutlineLineChart className="text-2xl md:text-4xl text-[#22C62E] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-center text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#22C62E]">Advanced Analytics</h3>
            <p className="text-white text-sm md:text-base">
              Our platform leverages advanced analytics techniques, such as machine learning and artificial intelligence, to uncover patterns, trends, and insights that would be difficult to detect with traditional methods, empowering you to make more informed decisions.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-gray-900" data-aos="fade-left">
            <AiOutlinePieChart className="text-2xl md:text-4xl text-[#22C62E] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-center text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#22C62E]">Visualizations and Reports</h3>
            <p className="text-white text-sm md:text-base">
              Our platform automatically generates interactive visualizations and comprehensive reports to help you better understand your data and share insights with stakeholders, ensuring that you can make data-driven decisions with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;