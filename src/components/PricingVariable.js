import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const PricingVariable = () => { 
  const t = useTranslations();
  const [dataPoints, setDataPoints] = useState(0);
  const [numberOfTokens, setNumberOfTokens] = useState(0);
  const [dataPointsPrice, setDataPointsPrice] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateDataPointsPrice = () => {
    const baseFee = 0;
    const perDataPointFee = 0.00001;
    return baseFee + dataPoints * perDataPointFee;
  };

  const calculateTokenPrice = () => {
    const perTokenFee = 0.0001;
    return numberOfTokens * perTokenFee;
  };

  useEffect(() => {
    const dataPointsPriceCalculated = calculateDataPointsPrice().toFixed(2);
    const tokenPriceCalculated = calculateTokenPrice().toFixed(2);
    const total = parseFloat(dataPointsPriceCalculated) + parseFloat(tokenPriceCalculated);

    setDataPointsPrice(dataPointsPriceCalculated);
    setTokenPrice(tokenPriceCalculated);
    setTotalPrice(total.toFixed(2));
  }, [dataPoints, numberOfTokens]);

  const handleDataPointsChange = (event) => {
    setDataPoints(event.target.value);
  };

  const handleTokenChange = (event) => {
    setNumberOfTokens(event.target.value);
  };

  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#FFC857] font-semibold tracking-wide uppercase">{t('Wholesalers.title')}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            {t('Wholesalers.description')}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Data Points Processed Pricing */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white">{t('DataPoints.title')}</h3>
            <p className="mt-4 text-gray-400">{t('DataPoints.description')}</p>
            <div className="mt-6">
              <label htmlFor="dataPoints" className="block text-sm font-medium text-white">
                Data Points Processed
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="range"
                  name="dataPoints"
                  id="dataPoints"
                  className="form-range w-full accent-[#FFC857]"
                  min="0"
                  max="10000000"
                  step="1000"
                  value={dataPoints}
                  onChange={handleDataPointsChange}
                />
                <span className="text-gray-400 text-sm">{dataPoints} data points</span>
              </div>
            </div>
          </div>

          {/* Token Pricing */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white">{t('TokenPricing.title')}</h3>
            <p className="mt-4 text-gray-400">{t('TokenPricing.description')}</p>
            <div className="mt-6">
              <label htmlFor="tokens" className="block text-sm font-medium text-white">
                Number of Tokens
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="range"
                  name="tokens"
                  id="tokens"
                  className="form-range w-full accent-[#FFC857]"
                  min="0"
                  max="1000000"
                  step="1000"
                  value={numberOfTokens}
                  onChange={handleTokenChange}
                />
                <span className="text-gray-400 text-sm">{numberOfTokens} tokens</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {/* Estimated Prices */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">{t('EstimatedPrices.title')}</h3>
            <div className="flex flex-col items-start">
              <div className="flex items-center justify-between w-full mb-2">
                <p className="text-lg font-semibold text-white">Data Points Price:</p>
                <p className="text-lg font-bold text-[#FFC857]">${dataPointsPrice}</p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <p className="text-lg font-semibold text-white">Token Price:</p>
                <p className="text-lg font-bold text-[#FFC857]">${tokenPrice}</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-xl font-semibold text-white">{t('EstimatedPrices.description')}</p>
                <p className="text-3xl font-bold text-[#FFC857]">${totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingVariable;