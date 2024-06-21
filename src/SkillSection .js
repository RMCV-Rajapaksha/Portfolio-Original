import React from 'react';
import { FaReact, FaServer, FaCogs, FaDatabase } from 'react-icons/fa';
import SkillItem from './components/skillCard';
import ToolComponent from './components/ToolComponent';

const SkillSection = ({ skills, tools }) => (
  <section 
    className='flex flex-wrap items-center gap-4 pl-20 pr-20 my-24 md:mx-28 justify-evenly md:mt-40 lg:mt-28' 
    id='skills'
  >
    <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
      I'M FAMILIAR WITH...
    </h1>

      <div className="grid grid-cols-1 gap-4 p-10 pt-24 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <SkillItem  key={index} skill={skill} />
        ))}
      </div>
  
    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
      TOOLS THAT I CAN USE
    </h2>
    <div className='flex flex-row flex-wrap justify-center gap-10 mx-4 mt-8 md:mx-16'> {tools.map((tool, index) => (
        <ToolComponent key={index} tool={tool} />
      ))}
    </div>
  </section>
);

export default SkillSection;
