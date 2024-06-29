"use client";
import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
const SkillItem = ({ skill }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  return (
    <motion.div ref={ref}
    style={{
      scale: scrollYProgress,
      opacity: scrollYProgress,
    }}
    className="block p-4 border border-gray-800 rounded-xl">
      <span className="inline-block p-3 rounded-lg">
        <div className="inline-flex items-center justify-center text-white align-middle select-none">
          {React.createElement(skill.icon, { size: 32 })}
        </div>
      </span>
      <h2 className="mt-2 text-base font-semibold text-white sm:text-lg">
        {skill.title}
      </h2>
      <p className="block text-sm text-gray-300 sm:mt-1 sm:text-base">
        {skill.description}
      </p>
    </motion.div>
  );
};

export default SkillItem;
