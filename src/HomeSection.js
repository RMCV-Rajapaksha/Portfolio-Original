import React from 'react';
import Spline from '@splinetool/react-spline';
const HomeSection = ({ CV }) => {
  return (
    <section id="home" className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      <div className="w-full h-64 lg:w-2/4 lg:h-[45vh]">
        <Spline scene="https://prod.spline.design/j71eySYKUJBmN-Pu/scene.splinecode" />
      </div>
      <div className="max-w-lg bg-navBar md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium text-white uppercase lg:text-4xl">Winding Mountain Road</h2>
          <p className="mt-4 text-white">
            I am a driven and passionate third-year Computer Engineering undergraduate, deeply immersed in the captivating worlds of software engineering and DevOps. With an insatiable curiosity and a relentless pursuit of new challenges, I am dedicated to unraveling the intricate mysteries of technology. My enthusiasm for innovation and problem-solving fuels my journey as I strive to make a significant impact in the ever-evolving tech landscape.
          </p>
          <div className="mt-8">
            <DownloadButton CV={CV} />
          </div>
        </div>
      </div>
    </section>
  );
};

const DownloadButton = ({ CV }) => (
  <button className="relative p-[3px]">
    <a href={CV} download='chamara_vishwajith'>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
      <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
        Download CV
      </div>
    </a>
  </button>
);

export default HomeSection;
