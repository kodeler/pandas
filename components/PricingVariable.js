import React, { useState, useEffect } from 'react';

const PricingVariable = () => {
  const [numberOfRequests, setNumberOfRequests] = useState(0);
  const [dataVolume, setDataVolume] = useState(0);
  const [price, setPrice] = useState(0);

  const calculatePrice = (option) => {
    if (option === 'demand') {
      const baseFee = 199;
      const perRequestFee = 0.05;
      return baseFee + numberOfRequests * perRequestFee;
    } else {
      const baseFee = 0;
      const perGBFee = 0.1;
      return baseFee + dataVolume * perGBFee;
    }
  };

  const getPricingOption = () => {
    return numberOfRequests > 0 ? 'demand' : 'volume';
  };

  const handleDemandChange = (event) => {
    setNumberOfRequests(event.target.value);
  };

  const handleVolumeChange = (event) => {
    setDataVolume(event.target.value);
  };

  useEffect(() => {
    if (numberOfRequests === 0 && dataVolume === 0) {
      setPrice(0);
    } else if (numberOfRequests > 0) {
      setPrice(calculatePrice('demand').toFixed(2));
    } else {
      setPrice(calculatePrice('volume').toFixed(2));
    }
  }, [numberOfRequests, dataVolume]);


  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#22C62E] font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Data Analytics for Wholesalers
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Choose the pricing option that best fits your data analytics needs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* On-Demand Pricing */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white">On-Demand Pricing</h3>
            <p className="mt-4 text-gray-400">
              Pay as you go for each request made to our platform.
            </p>
            <div className="mt-6">
              <label htmlFor="demand" className="block text-sm font-medium text-white">
                Number of Requests
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="range"
                  name="demand"
                  id="demand"
                  className="form-range w-full accent-[#22C62E]"
                  min="0"
                  max="1000000"
                  step="1000"
                  value={numberOfRequests}
                  onChange={handleDemandChange}
                />
                <span className="text-gray-400 text-sm">{numberOfRequests} requests</span>
              </div>
            </div>
          </div>

          {/* Volume-Based Pricing */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white">Volume-Based Pricing</h3>
            <p className="mt-4 text-gray-400">
              Pay a flat fee based on the volume of data processed.
            </p>
            <div className="mt-6">
              <label htmlFor="volume" className="block text-sm font-medium text-white">
                Volume (in GB)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="range"
                  name="volume"
                  id="volume"
                  className="form-range w-full accent-[#22C62E]"
                  min="0"
                  max="10000"
                  step="10"
                  value={dataVolume}
                  onChange={handleVolumeChange}
                />
                <span className="text-gray-400 text-sm">{dataVolume} GB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {/* Estimated Price */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">Estimated Price</h3>
            <div className="flex items-center justify-between">
              <p className="text-4xl font-bold text-[#22C62E]">${price}</p>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-400">Pricing Option:</p>
                <p className="text-lg font-semibold text-white">
                  {getPricingOption() === 'demand' ? 'On-Demand' : 'Volume-Based'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingVariable;