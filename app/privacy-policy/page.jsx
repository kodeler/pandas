import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
const PrivacyPolicy = () => {
  return (
    <div className="text-white container mx-auto py-10">
      <div className="mb-5 flex items-center">
        {/* Botón para volver a la página de inicio */}
        <Link href="/">
          <button className="text-[#22C62E] hover:text-gray-300 flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Home
          </button>
        </Link>
      </div>
      <h1 className="text-3xl  font-bold mb-5">Privacy Policy</h1>
      <p className=" mb-5">
        At pandaslabs, we value the privacy and security of our users data. We take data privacy very seriously and adhere to applicable privacy laws and regulations. This privacy policy describes how we collect, use, and protect your personal information when you use our services.
      </p>
      <p className=" mb-5">
        By using our services, you agree to the terms of this privacy policy. If you do not agree with this policy, please do not use our services.
      </p>
      <h2 className="text-2xl font-bold mb-3">Personal information collection</h2>
      <p className=" mb-5">
        We collect personal information that you voluntarily provide to us when using our services, such as your name, email address, billing information, and other relevant information for using our services.
      </p>
      <h2 className="text-2xl font-bold mb-3">Use of personal information</h2>
      <p className=" mb-5">
        We use the personal information we collect to provide you with our services, improve our services, personalize your experience, communicate with you, and fulfill our legal and other obligations.
      </p>
      <h2 className="text-2xl font-bold mb-3">Protection of personal information</h2>
      <p className=" mb-5">
        We take reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no security system is foolproof, and we cannot guarantee the absolute security of your personal information.
      </p>
      <h2 className="text-2xl font-bold mb-3">Changes to this policy</h2>
      <p className=" mb-5">
        We may update this privacy policy from time to time to reflect changes in our information practices or in the law. If we make significant changes, we will notify you by posting a notice on our website or by email.
      </p>
    </div>
  );
};

export default PrivacyPolicy;