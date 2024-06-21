import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

function VolunteeringCard({ imgSrc, altText, hoverText, description }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"]
    });
  

    return (
        <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
            className="relative w-64 p-5 overflow-hidden duration-500 rounded-lg cursor-pointer group h-175 text-gray-50"
        >
            <div>
                <div className="w-full duration-500 group-hover:scale-105 h-60">
                    <img src={imgSrc} alt={altText} className="object-cover w-full h-full" />
                </div>
                <div className="absolute left-0 w-56 p-5 duration-500 -bottom-16 group-hover:-translate-y-12">
                    <div className="absolute left-0 w-64 duration-500 opacity-0 -z-10 h-28 group-hover:opacity-50 group-hover:bg-navBar"></div>
                    <span className="text-xl font-bold">{hoverText}</span>
                    <p className="w-56 duration-500 opacity-0 group-hover:opacity-100">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default VolunteeringCard;
