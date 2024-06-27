// ProjectCard.js

import React, { useState, useRef, useEffect } from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { motion, useScroll } from 'framer-motion';
import ProjectPopup from './Popup';

const ProjectCard = ({ project }) => {
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  // Function to toggle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Effect to handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className='border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[325px] hover:border-zinc-600 duration-100 ease-in-out relative justify-center items-center'
        onClick={togglePopup} // Show popup on click
      >
        <p className='font-medium uppercase text-md text-textBase'>
          {project.name.length > 25 ? `${project.name.slice(0, 25)}...` : project.name}
        </p>
        <img
          src={project.imageSrc}
          className='object-cover w-full h-full my-4 rounded-md'
          alt={project.name}
        />
        <div className='flex items-center justify-between flex-1'>
          <p className='text-lg text-gray-300'>
            {project.techs}
            <span className='block text-sm text-white rounded-xl bg-navBar'>
              {project.techs}
            </span>
          </p>
          <a href={project.github}>
            <motion.div
              whileTap={{ scale: 0.8 }}
              className='text-3xl cursor-pointer text-textBase'
            >
              <IoLogoGithub />
            </motion.div>
          </a>
        </div>
      </motion.div>
      {showPopup && <ProjectPopup project={project} />}
    </>
  );
};

export default ProjectCard;
