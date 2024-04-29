import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pendulum = () => {
  const [balls, setBalls] = useState([]);
  const [initialBall, setInitialBall] = useState(null);

  const initializeBalls = () => {
    const ballsArray = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      position: { x: 0, y: 0 },
      velocity: { x: 0, y: 0 },
      radius: 20,
      mass: 1,
    }));

    setBalls(ballsArray);
    setInitialBall(ballsArray[4]);
  };

  const handleAnimation = (ball, index) => {
    const delayTime = index * 0.2;

    return {
      x: [-40, 40, -20, 20, -10, 10, 0],
      y: [0, -20, 0, -20, 0, -20, 0],
      rotate: [-10, 10, -5, 5, -2.5, 2.5, 0],
      transition: {
        duration: 4,
        delay: delayTime,
        yoyo: Infinity,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    };
  };

  React.useEffect(() => {
    initializeBalls();
  }, []);

  return (
    <div className="flex justify-center items-center ">
      {balls.map((ball, index) => (
        <motion.div
          key={ball.id}
          initial={{ x: ball.position.x, y: ball.position.y }}
          animate={handleAnimation(ball, index)}
          className="w-10 h-10 bg-gray-300 rounded-full mx-2"
        />
      ))}
    </div>
  );
};

export default Pendulum;