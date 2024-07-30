import React from 'react';
import { motion } from 'framer-motion';
import './FancyLoader.css';

const circleVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: [1, 1.5, 1],
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  }),
};

const FancyLoader: React.FC = () => {
  return (
    <div className="loader-container">
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        className="loader-svg"
        initial="hidden"
        animate="visible"
      >
        {[...Array(5)].map((_, row) =>
          [...Array(5)].map((_, col) => (
            <motion.circle
              key={`${row}-${col}`}
              cx={20 + col * 15}
              cy={20 + row * 15}
              r="3"
              fill="#FF6600"
              custom={row * 5 + col}
              variants={circleVariants}
            />
          ))
        )}
      </motion.svg>
      <p className="loader-text">Procesando datos</p>
      <caption>No refresque la ventana</caption>
    </div>
  );
};

export default FancyLoader;
