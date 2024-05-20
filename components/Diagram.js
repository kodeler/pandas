import React from 'react';
import Image from 'next/image';
import graphImage from './../public/assets/diagram.png';

function Diagram() {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="lg:text-center">
        <h2 className="text-base text-[#FFC857] font-semibold tracking-wide uppercase">INFRASTRUCTURE</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        Seamlessly integrating data, systems, and teams within your existing infrastructure.
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
          Leverage our expertise to connect the dots between your data sources, systems, and teams. Our solutions are designed to work in harmony with your existing infrastructure, ensuring a smooth transition and minimal disruption to your operations.
        </p>
      </div>
      <div className="max-w-full md:max-w-2xl lg:max-w-4xl mx-auto">
        <Image
          src={graphImage}
          alt="Graphic"
          className="bg-transparent w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
}

export default Diagram;