"use client";
import { IoLogoGithub } from 'react-icons/io';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const ProjectCard = ({ project }) => {
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
      className='border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[325px] hover:border-zinc-600 duration-100 ease-in-out'
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
          <span className='block text-sm text-gray-500'>
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
  );
};

export default ProjectCard;
