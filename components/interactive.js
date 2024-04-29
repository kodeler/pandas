import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const InteractiveChart = () => {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = parseFloat(event.target.value);
    setInput(inputValue);
    setOutput(inputValue * inputValue);
  };

  const data = [
    { x: 0, y: 0 },
    { x: input, y: output },
    { x: 10, y: 100 },
  ];

  return (
    <div>
      <h1>Diagrama interactivo: y = x^2</h1>
      <input type="number" value={input} onChange={handleInputChange} />
      <AreaChart width={600} height={400} data={data}>
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="y" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default InteractiveChart;