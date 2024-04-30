import React from 'react';
import Image from 'next/image';
import graphImage from './../public/assets/diagram.png';

function Diagram() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r bg-gradient-to-r from-[#22C62E] to-[#D8D8D8] text-transparent bg-clip-text text-center mb-4">
      Seamlessly integrated with your existing data infrastructure
      </h2>
      <div className="max-w-full md:max-w-2xl lg:max-w-4xl">
        <Image
          src={graphImage}
          alt="Graphic"
          className="bg-transparent w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Diagram;