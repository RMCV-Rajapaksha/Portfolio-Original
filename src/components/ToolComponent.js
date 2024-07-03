"use client";
import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const ToolComponent = ({ tool }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"]
    });
  return (
    <motion.div 
    ref={ref}
    initial={{ y: 10, opacity: 0 ,scale:1}}
           
    whileHover={{ scale: 1.1 }}
    style={{
      scale: scrollYProgress,
      opacity: scrollYProgress,
    }}
      className='w-12 h-12 mx-auto overflow-hidden transition-transform border rounded-lg shadow-lg border-zinc-800 hover:border-zinc-600 md:w-16 md:h-16 lg:w-20 lg:h-20 '
    >
      <img src={tool.imageSrc} alt={tool.name} />
    </motion.div>
  );
};

export default ToolComponent;
