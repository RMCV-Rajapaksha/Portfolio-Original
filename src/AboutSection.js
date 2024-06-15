import React from 'react';

const AboutMeSection = () => {
  return (
    <section className='flex flex-wrap items-center gap-4 pl-20 pr-20 my-24 justify-evenly md:mt-[45vh] lg:mt-56 md:mx-28' id="about">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">ABOUT ME</h1>
      <div className='flex flex-row flex-wrap justify-center gap-10 mx-4 mt-8 md:mx-16'>
        <p className='text-white'>
          I am a passionate third-year Computer Engineering undergraduate deeply fascinated by everything about computers💻. 
          My academic journey has been centered around software engineering, and I'm currently delving into the exciting field 
          of DevOps. Alongside honing my technical skills, I emphasize developing soft skills, understanding the importance of 
          effective communication, teamwork, and problem-solving.
          <br /><br />
          I am driven by a love for technology and its transformative potential for lives and businesses. Constantly seeking 
          growth, I actively engage in expanding my knowledge and staying updated with the latest advancements in the field. 
          Outside of academics and technology, I find joy in various hobbies and interests. When I'm not coding👨‍💻—especially 
          when there aren't any giant, screen-filling, software-crashing errors🙂‍↕—you can find me playing chess, listening to 
          music🎧, or watching a movie.
          <br /><br />
          I also have a keen interest in robotics and a fascination with space🪐. Always eager to learn new things and take on 
          new challenges, I'm driven by a desire to make a meaningful impact in the world of technology and beyond.
        </p>

        <ol className="items-center sm:flex">
          <TimelineItem
            title="Dharmadutha College Badulla"
            timePeriod="2006-2020"
            description="Completed OL's with 6A's and 3B's AL's with  2A's and B in the Physical Stream"
          />
          <TimelineItem
            title="University of Ruhuna"
            timePeriod="2021 - present"
            description="Currently following a BSc in Computer Engineering."
          />
          <TimelineItem
            title="University of Ruhuna"
            timePeriod="2021 - present"
            description="Currently following a BSc in Computer Engineering."
          />
        </ol>
      </div>
    </section>
  );
};

const TimelineItem = ({ title, timePeriod, description }) => {
  return (
    <li className="relative mb-6 sm:mb-0">
      <div className="flex items-center">
        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
          <svg className="w-2.5 h-2.5 text-textBas dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 1 0 0-2Z" />
          </svg>
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div className="mt-3 sm:pe-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{timePeriod}</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </li>
  );
};

export default AboutMeSection;
