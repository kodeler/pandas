import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const TermsAndConditions = () => {
  return (
    <div className="text-white container mx-auto py-10">
      <div className="mb-5 flex items-center">
        {/* Botón para volver a la página de inicio */}
        <Link href="/">
          <button className="text-[#FFC857] hover:text-gray-300 flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Home
          </button>
        </Link>
      </div>
      <h1 className="text-3xl  font-bold mb-5">Terms and Conditions</h1>
      <p className=" mb-5">
        By using Pandaslabs services, you agree to the terms and conditions described below. If you do not agree with these terms, please do not use our services.
      </p>
      <h2 className="text-2xl font-bold mb-3">Use of the services</h2>
      <p className=" mb-5">
        You agree to use our services only for legitimate purposes and in accordance with this privacy policy and any other policies or directives we may occasionally publish. You may not use our services for any unlawful or unauthorized purpose.
      </p>
      <h2 className="text-2xl font-bold mb-3">Intellectual property</h2>
      <p className=" mb-5">
        All rights to intellectual property related to our services, including but not limited to copyrights, trademarks, and trade secrets, are the property of pandaslabs or its licensors. You may not use our services in any way that infringes our intellectual property rights or the intellectual property rights of third parties.
      </p>
      <h2 className="text-2xl font-bold mb-3">Limitation of liability</h2>
      <p className=" mb-5">
        To the maximum extent permitted by law, pandaslabs will not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, revenue, data, or time incurred, arising from the use or inability to use our services.
      </p>
      <h2 className="text-2xl font-bold mb-3">Indemnification</h2>
      <p className=" mb-5">
        You agree to indemnify and hold harmless pandaslabs and its officers, directors, employees, agents, licensors, and service providers from any claim, demand, loss, liability, damage, and cost, including reasonable attorneys fees, arising from your use of our services or your breach of these terms and conditions.
      </p>
      <h2 className="text-2xl font-bold mb-3">Changes to these terms</h2>
      <p className=" mb-5">
        We may update these terms and conditions from time to time to reflect changes in our practices or in the law. If we make significant changes, we will notify you by posting a notice on our website or by email. By continuing to use our services after the changes have been posted, you agree to be bound by the updated terms and conditions.
      </p>
    </div>
  );
};

export default TermsAndConditions;