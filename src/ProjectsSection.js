import { motion } from 'framer-motion';
import { IoLogoGithub } from 'react-icons/io'; // Make sure to import the IoLogoGithub icon

const ProjectsSection = ({ Projects }) => {
  return (
    <section className='flex flex-wrap items-center gap-4 pl-20 pr-20 md:my-24 mx-36 justify-evenly' id='projects'>
      {Projects && Projects.map((n) => (
        <motion.div
          key={n.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[325px] hover:border-zinc-600 duration-100 ease-in-out'
        >
          <p className='font-medium uppercase text-md text-textBase'>
            {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
          </p>
          <img src={n.imageSrc} className='object-cover w-full h-full my-4 rounded-md' alt={n.name}></img>
          <div className='flex items-center justify-between flex-1'>
            <p className='text-lg text-gray-300'>
              {n.techs}
              <span className='block text-sm text-gray-500'>
                {n.techs}
              </span>
            </p>
            <a href={n.github}>
              <motion.div
                whileTap={{ scale: 0.8 }}
                className='text-3xl cursor-pointer text-textBase'
              >
                <IoLogoGithub />
              </motion.div>
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ProjectsSection;

