import React from 'react';
import { TimelineItem } from './components/firstTimeline';

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
            title="Woked in E-Nenasala"
            timePeriod="2020 - 2021"
            description="Taught basic computer skills to the students."
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



export default AboutMeSection;
