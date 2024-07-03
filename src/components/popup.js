import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProjectPopup = ({ project, onClose }) => {
  return (
    <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50'>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: 0.1, type: "spring" }}
        className='relative max-w-lg p-6 bg-black rounded-lg'
  
      >
        <button 
          onClick={onClose} 
          className='absolute top-0 right-0 mt-2 mr-2 text-white'
          aria-label='Close'
        >
          &times;
        </button>
        <h2 id='project-title' className='mb-4 text-2xl font-bold text-white'>{project.name}</h2>
        <img
          src={project.imageSrc}
          alt={project.name}
          className='object-cover w-full h-48 mb-4 rounded-md'
        />
        <p id='project-description' className='text-white'>{project.techs}</p>
        <div className='flex justify-end mt-4'>
          <a href={project.github} className='text-blue-600 hover:underline'>
            View on GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPopup;
