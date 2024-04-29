import { useState } from 'react';
import { FaRegLightbulb, FaQuestionCircle, FaPeopleCarry, FaRobot, FaMoneyBillAlt, FaChartLine, FaCloudUploadAlt, FaUserShield } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { MdDataUsage } from 'react-icons/md';
import { RiCustomerService2Line } from 'react-icons/ri';
import { TiMessages } from 'react-icons/ti';
import { IoIosAnalytics } from 'react-icons/io';

const DescriptionService = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const newInformation = [
    {
      title: 'Data analytics without code in natural language',
      description: 'Analyze your data using natural language without the need to write code. Ask questions about your data and get answers and visualizations in real-time.',
      icon: <FaRegLightbulb />,
    },
    {
      title: '24/7 Uninterrupted Support',
      description: 'Enjoy round-the-clock support and technical assistance, 24 hours a day, 7 days a week, without interruptions. Our team of experts will be available to address any inquiries or issues you may have.',
      icon: <RiCustomerService2Line />,
    },
    {
      title: 'Automatic visualization and report creation',
      description: 'Generate visualizations and reports of your data automatically. Our intelligent system will analyze your data and create charts, tables, and detailed reports without the need for manual intervention.',
      icon: <AiOutlineInfoCircle />,
    },
    {
      title: 'Anomaly detection and trend identification',
      description: 'Automatically identify anomalies and trends in your data. Our system will utilize advanced machine learning techniques to detect patterns, outliers, and trends that could go unnoticed.',
      icon: <BsChatDots />,
    },
    {
      title: 'Integration with popular data sources such as CSV, Excel and Databases',
      description: 'Integrate your data from various popular sources, such as CSV files, Excel, and databases. Our system will easily connect to your data sources and unify them into a single analytics platform.',
      icon: <FaQuestionCircle />,
    },
    {
      title: 'Data visualization',
      description: 'Visualize your data in a clear and easy-to-understand manner. Create custom charts, tables, and dashboards that help you better understand your data and make informed decisions.',
      icon: <TiMessages />,
    },
    {
      title: 'Chatbot data analytics',
      description: 'Analyze your data through an intelligent chatbot. Ask questions in natural language and get answers, visualizations, and analysis in real-time, without the need for prior technical knowledge.',
      icon: <TiMessages />,
    },
    {
      title: 'Autonomous resource planning',
      description: 'Optimize your resource allocation and inventory management with our autonomous ERP system. Our AI-driven algorithms will analyze your data and recommend optimal strategies for supply chain management, inventory control, and resource utilization.',
      icon: <FaPeopleCarry />,
    },
    {
      title: 'Intelligent process automation',
      description: 'Streamline your business processes with intelligent automation. Our system will learn from your data and automatically optimize workflows, eliminating manual tasks and increasing efficiency across various departments.',
      icon: <FaRobot />,
    },
    {
      title: 'Predictive financial analytics',
      description: 'Gain insights into your financial performance with predictive analytics. Our system will analyze your financial data, identify trends, and provide forecasts to help you make informed decisions about budgeting, investment, and growth strategies.',
      icon: <FaMoneyBillAlt />,
    },
    {
      title: 'Advanced forecasting and modeling',
      description: 'Leverage advanced forecasting and modeling techniques to anticipate future trends and plan accordingly. Our system will analyze historical data, market trends, and other relevant factors to provide accurate projections and simulations.',
      icon: <FaChartLine />,
    },
    {
      title: 'Cloud-based and scalable',
      description: 'Our ERP system is cloud-based and highly scalable, allowing you to access your data and analytics from anywhere and scale your resources as your business grows.',
      icon: <FaCloudUploadAlt />,
    },
    {
      title: 'Secure and compliant',
      description: 'We prioritize data security and compliance with industry standards. Our system is designed with robust security measures, and we adhere to relevant regulations to ensure the confidentiality and integrity of your data.',
      icon: <FaUserShield />,
    },
  ];

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-8" id="DescriptionService">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r bg-gradient-to-r from-[#22C62E] to-[#D8D8D8] text-transparent bg-clip-text text-center mb-4">
        Features
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {newInformation.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg w-full "
            data-aos="fade-up"
          >
            <div
              className={`flex justify-between items-center cursor-pointer ${
                expandedIndex === index ? 'bg-gray-100' : ''
              }`}
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center">
                {item.icon}
                <h3 className="text-lg font-semibold ml-2">{item.title}</h3>
              </div>
              <span className="text-gray-600"> {expandedIndex === index ? '-' : '+'} </span>
            </div>
            {expandedIndex === index && (
              <div className="mt-4">
                <p className="text-gray-800">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionService;
