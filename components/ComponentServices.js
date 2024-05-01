import React from 'react';
import { AiOutlineDatabase, AiOutlineFileText, AiOutlineLineChart, AiOutlinePieChart } from 'react-icons/ai';

const HowWeWork = () => {
  return (
    <div className="bg-black py-16" id="howWeWorkComponent">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#22C62E] to-[#D8D8D8] text-transparent bg-clip-text text-center" data-aos="fade-up">
          How We Work?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 pr-4 md:pr-9 pl-4 md:pl-5 py-8 md:py-10 rounded-lg shadow-md bg-gray-900" data-aos="fade-right">
            <AiOutlineDatabase className="text-3xl md:text-4xl text-[#22C62E] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-center text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#22C62E]">Seamlessly integrated with your existing data infrastructure</h3>
            <p className="text-white text-sm md:text-base">
              Our platform consolidates all your data sources, such as databases, spreadsheets, and APIs, into a unified and secure data warehouse, making it easy to access and analyze your data from a single location.
            </p>
          </div>
          <div className="p-4 pr-4 md:pr-9 pl-4 md:pl-5 py-8 md:py-10 rounded-lg shadow-md bg-gray-900" data-aos="fade-left">
            <AiOutlineFileText className="text-3xl md:text-4xl text-[#22C62E] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-center text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#22C62E]">Natural Language Query</h3>
            <p className="text-white text-sm md:text-base">
              Our platform allows you to ask questions about your data using natural language, making it easy for non-technical users to gain insights and make data-driven decisions without the need for complex queries or coding.
            </p>
          </div>
          <div className="p-4 pr-4 md:pr-9 pl-4 md:pl-5 py-8 md:py-10 rounded-lg shadow-md bg-gray-900" data-aos="fade-right">
            <AiOutlineLineChart className="text-3xl md:text-4xl text-[#22C62E] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-center text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#22C62E]">Advanced Analytics</h3>
            <p className="text-white text-sm md:text-base">
              Our platform leverages advanced analytics techniques, such as machine learning and artificial intelligence, to uncover patterns, trends, and insights that would be difficult to detect with traditional methods, empowering you to make more informed decisions.
            </p>
          </div>
          <div className="p-4 pr-4 md:pr-9 pl-4 md:pl-5 py-8 md:py-10 rounded-lg shadow-md bg-gray-900" data-aos="fade-left">
            <AiOutlinePieChart className="text-3xl md:text-4xl text-[#22C62E] mb-2 md:mb-4 mx-auto" />
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