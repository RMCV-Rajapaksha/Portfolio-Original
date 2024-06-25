import React from 'react';
import Spline from '@splinetool/react-spline';
import Chamara from './images/ChamaraVishwajith.png';

const HomeSection = ({ CV }) => {
  return (
    <section id="home" className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      <div className="w-full h-64 lg:w-2/4 lg:h-[45vh]">
  {/* <Spline scene="https://prod.spline.design/j71eySYKUJBmN-Pu/scene.splinecode" /> */}
  <img className="object-cover w-full h-full mt-12 md:mt-16" src={Chamara} alt="Chamara Image" />
</div>


      <div className="max-w-lg md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col items-start justify-start p-12 md:px-16">
          <h2 className="text-2xl font-medium text-white lg:text-4xl">
            <span className="typewriter">Hey there, I'm</span>
          </h2>
          <h1 className="text-6xl font-bold text-white">
            Chamara<span className="text-purple-500">.</span>
          </h1>
          <p className="mt-4 text-left text-white">
            I’m a curious and passionate third-year Computer Engineering student, constantly diving into the fascinating world of software engineering and DevOps. Whether it’s debugging code, optimizing algorithms, or orchestrating deployments, I’m always up for the challenge. Let’s connect and explore the tech universe together.
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
