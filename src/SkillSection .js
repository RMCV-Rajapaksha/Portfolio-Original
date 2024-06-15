import React from 'react';
import { FaReact, FaServer, FaCogs, FaDatabase } from 'react-icons/fa';

const SkillSection = ({ skills, tools }) => (
  <section 
    className='flex flex-wrap items-center gap-4 pl-20 pr-20 my-24 md:mx-28 justify-evenly md:mt-48 lg:mt-44' 
    id='skills'
  >
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
      I'M FAMILIAR WITH...
    </h1>
    <div className="">
      <div className="grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 pt-28">
        {skills.map((skill, index) => (
          <div key={index} className="block p-4 border border-gray-800 rounded-xl">
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
          </div>
        ))}
      </div>
    </div>
    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
      TOOLS THAT I CAN USE
    </h2>
    <div className='flex flex-row flex-wrap justify-center gap-10 mx-4 mt-8 md:mx-16'>
      {tools.map((tool, index) => (
        <div 
          key={index} 
          className='w-12 h-12 mx-auto overflow-hidden transition-transform border rounded-lg shadow-lg border-zinc-800 hover:border-zinc-600 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110'
        >
          <img src={tool.imageSrc} alt={tool.name} />
        </div>
      ))}
    </div>
  </section>
);

export default SkillSection;
