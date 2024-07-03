import React from 'react';

import SkillItem from './components/SkillCard';
import ToolComponent from './components/ToolComponent';
import { skills,  tools } from './data'; // Assuming tools is also exported from './data'

const SkillSection = () => (
  <section 
    className='flex flex-wrap items-center gap-4 pl-20 pr-20 my-24 md:mx-28 justify-evenly md:mt-40 lg:mt-28' 
    id='skills'
  >
    <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
      I'M FAMILIAR WITH...
    </h1>

    <div className="grid items-center justify-center grid-cols-1 gap-4 p-10 sm:pt-16 sm:grid-cols-4">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>

    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
      TOOLS THAT I CAN USE
    </h2>
    <div className='flex flex-row flex-wrap justify-center gap-10 mx-4 mt-8 md:mx-16'>
      {tools.map((tool, index) => (
        <ToolComponent key={index} tool={tool} /> // Assuming each tool is passed correctly
      ))}
    </div>
  </section>
);

export default SkillSection;