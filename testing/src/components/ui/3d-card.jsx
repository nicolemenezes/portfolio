import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export const CardContainer = ({ children, className = '' }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const CardBody = ({ children, className = '' }) => {
  return (
    <div
      style={{
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export const CardItem = ({ children, translateZ = 50, className = '' }) => {
  return (
    <div
      style={{
        transform: `translateZ(${translateZ}px)`,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </div>
  );
};