import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 bg-primary/20 pointer-events-none z-50 backdrop-blur-sm"
      animate={{
        x: mousePosition.x - 16, // Center the circle (width/2)
        y: mousePosition.y - 16,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5
      }}
      style={{
        boxShadow: '0 0 20px rgba(59, 235, 245, 0.5)'
      }}
    />
  );
};