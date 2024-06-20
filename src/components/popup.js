// ProjectPopup.js

import React from 'react';

const ProjectPopup = ({ project }) => {
  return (
    <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50'>
      <div className='max-w-lg p-6 bg-black rounded-lg'>
        <h2 className='mb-4 text-2xl font-bold text-white'>{project.name}</h2>
        <img
          src={project.imageSrc}
          alt={project.name}
          className='object-cover w-full h-48 mb-4 rounded-md'
        />
        <p className='text-white'>{project.techs}</p>
        <div className='flex justify-end mt-4'>
          <a href={project.github} className='text-blue-600 hover:underline'>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
