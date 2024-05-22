import React from 'react';

const LLMModels = () => {
  const models = [
    {
      name: 'GPT-3',
      description: 'Developed by OpenAI, one of the most powerful and versatile language models available.',
      type: 'Paid',
      fineTuning: true,
    },
    {
      name: 'BLOOM',
      description: 'An open-source language model developed by the AI startup Anthropic.',
      type: 'Open Source',
      fineTuning: true,
    },
    {
      name: 'PaLM',
      description: 'A multimodal language model developed by Google that can process images and text.',
      type: 'Paid',
      fineTuning: false,
    },
    {
      name: 'OPT',
      description: 'An open-source language model developed by Meta (Facebook) for text generation tasks.',
      type: 'Open Source',
      fineTuning: true,
    },
    {
      name: 'GPT-NeoX',
      description: 'An open-source language model developed by EleutherAI, a non-profit research organization.',
      type: 'Open Source',
      fineTuning: true,
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white mb-8">LLM Models</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">{model.name}</h3>
                <p className="mt-2 text-gray-400">{model.description}</p>
              </div>
              <div className="mt-4">
                <span
                  className={`inline-flex px-2 py-1 leading-4 font-semibold rounded-full text-xs ${
                    model.type === 'Paid' ? 'bg-blue-800 text-blue-300' : 'bg-green-800 text-green-300'
                  }`}
                >
                  {model.type}
                </span>
                {model.fineTuning && (
                  <span className="inline-flex px-2 py-1 leading-4 font-semibold rounded-full text-xs bg-purple-800 text-purple-300 ml-2">
                    Fine Tuning
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LLMModels;