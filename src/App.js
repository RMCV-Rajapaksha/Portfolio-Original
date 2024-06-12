import React, { useState } from 'react';
import './App.css';
import ParticlesComponent from './components/particles';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Spline from '@splinetool/react-spline';
import { IoMenu, IoLogoGithub } from 'react-icons/io5';
import May from './images/may.jpg';
import CV from './File/EE3253_L2_4733.pdf';
import { Experience, Projects, SocialLinks, Logo } from './data';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isActive, setIsActive] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e04904ae-8ac5-4ac8-a94f-3b6387a2e596");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <AnimatePresence initial={false}>
      <div className="App">
        <ParticlesComponent />
        <div className="relative flex flex-col items-center justify-center w-screen min-h-screen pb-20">
          {/* Navigation bar */}
          <nav className='fixed inset-x-0 z-50 flex items-center justify-center w-full px-6 top-2'>
          <div className='flex items-center w-full p-4 md:w-880 bg-navBar rounded-2xl'>
          <p className='text-lg font-medium text-slate-200'>Chamara Vishwajith</p>
          <div className='items-center flex-1 hidden gap-6 ml-6 md:flex'>
            <a href="#home" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100'>Home</a>
            <a href="#about" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100'>About</a>
            <a href="#skill" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100'>skills</a>
            <a href="#projects" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100'>Projects</a>
            <a href="#contact" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100'>Contact</a>
            <a href={CV} download='chamara_vishwajith' className='px-2 py-1 ml-auto text-base font-medium duration-100 ease-in-out border-2 cursor-pointer text-textBase hover:text-slate-100 border-textBase rounded-xl hover:border-gray-100'>
            Download
            </a>

          </div>
          <motion.div 
          whileTap={{scale:0.5}}
          className='block ml-auto cursor-pointer md:hidden'
           onClick={()=>setIsActive(!isActive)}>

            <IoMenu className='text-2xl text-textBase'/>
          </motion.div>
          {isActive && (
            <motion.div
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1.1}}
 exit={{opacity:0, scale:0.5}}
 transition={{delay:0.1 , type:"spring"}}
  className='fixed flex flex-col items-center gap-6 p-4 rounded-lg w-275 bg-navBar top-24 right-16 justify-evenly'>
    <a href="#home" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100' onClick={()=>setIsActive(false)}>Home</a>
    <a href="#about" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100'  onClick={()=>setIsActive(false)}>About</a>
    <a href="#skill" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100'  onClick={()=>setIsActive(false)}>Skills</a>
    <a href="#projects" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100'  onClick={()=>setIsActive(false)}>Projects</a>
    <a href="#contact" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100'  onClick={()=>setIsActive(false)}>Contact</a>
    <motion.a 
    whileTap={{scale:0.8}}
    href={CV} download='chamara_vishwajith' className='px-2 py-1 mx-auto text-base font-medium duration-100 ease-in-out border-2 cursor-pointer text-textBase hover:text-slate-100 border-textBase rounded-xl hover:border-gray-100' onClick={() => setIsActive(false)}>
  Download
</motion.a>
  </motion.div>
)}
        </div>
         
          </nav>
          <div className='relative ' id='home'>
      <Spline scene="https://prod.spline.design/j71eySYKUJBmN-Pu/scene.splinecode" />
        <div className='absolute flex items-center justify-center w-full bottom-10'>
          <div className='flex items-center justify-center p-4 bg-black shadow-md rounded-3xl'>
            <p className='text-white'>Press and drag to orbit</p>
          </div>
        </div>
      </div>
            {/* Hero */}
           

          {/* Main sections */}
          <main className='w-{80%} mt-5 '>
            {/* About section */}
            
<section class=" text-white ">
<div>
  <div class="flex h-screen items-center justify-center  p-5">
    <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
      <div>
        <h1 class="mb-2 text-3xl font-bold text-white"><span class="text-green-500">Hi,</span> I'm Full Stack Developer</h1>
        <p class="mb-6 text-white">"Hello! I'm R.M.C.V Rajapaksha, a computer engineering student at the University of Ruhuna. My passion for coding stems from the belief in its limitless possibilities. Whether it's solving complex problems or exploring new technologies, I find joy in every challenge."</p>
        <div class="flex justify-center space-x-5">
          <button class="flex w-full items-center justify-center gap-1 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700">
            Follow
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
          <button class="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold">
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <img src={May} alt="" class="md:size-96 size-72 rounded-full " />
      </div>
    </div>
  </div>
</div>

</section>

            {/* Skills section */}
            {/* Timeline section */}
            {/* Project section */}
            {/* Contact section */}
          </main>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
