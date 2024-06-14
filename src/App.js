import React, { useState } from 'react';
import './App.css';
import ParticlesComponent from './components/particles';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Spline from '@splinetool/react-spline';
import { IoMenu, IoLogoGithub } from 'react-icons/io5';
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
                <a href="#skills" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100'>Skills</a>
                <a href="#projects" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100'>Projects</a>
                <a href="#contact" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100'>Contact</a>
                <a href={CV} download='chamara_vishwajith' className='px-2 py-1 ml-auto text-base font-medium duration-100 ease-in-out border-2 cursor-pointer text-textBase hover:text-slate-100 border-textBase rounded-xl hover:border-gray-100'>
                  Download
                </a>
              </div>
              <motion.div 
                whileTap={{ scale: 0.5 }}
                className='block ml-auto cursor-pointer md:hidden'
                onClick={() => setIsActive(!isActive)}
              >
                <IoMenu className='text-2xl text-textBase' />
              </motion.div>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ delay: 0.1, type: "spring" }}
                  className='fixed flex flex-col items-center gap-6 p-4 rounded-lg w-275 bg-navBar top-24 right-16 justify-evenly'
                >
                  <a href="#home" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100' onClick={() => setIsActive(false)}>Home</a>
                  <a href="#about" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100' onClick={() => setIsActive(false)}>About</a>
                  <a href="#skills" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100' onClick={() => setIsActive(false)}>Skills</a>
                  <a href="#projects" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100' onClick={() => setIsActive(false)}>Projects</a>
                  <a href="#contact" className='text-base font-medium duration-100 ease-out cursor-pointer text-textBase hover:text-slate-100' onClick={() => setIsActive(false)}>Contact</a>
                  <motion.a 
                    whileTap={{ scale: 0.8 }}
                    href={CV} download='chamara_vishwajith' className='px-2 py-1 mx-auto text-base font-medium duration-100 ease-in-out border-2 cursor-pointer text-textBase hover:text-slate-100 border-textBase rounded-xl hover:border-gray-100' onClick={() => setIsActive(false)}
                  >
                    Download
                  </motion.a>
                </motion.div>
              )}
            </div>
          </nav>

          {/* Hero */}
          <main className='w-full mt-5'>
            {/* About section */}
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
                  <button className="p-[3px] relative"><a  href={CV} download='chamara_vishwajith' >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
Download CV
  </div>
                  </a>
  
</button>
                  </div>
                </div>
              </div>
            </section>

            {/* About section */}
            <section className='flex flex-wrap items-center gap-4 pl-20 pr-20 my-24 justify-evenly md:mt-[45vh] lg:mt-56' id='skill'>
<h1 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">ABOUT ME</h1>
<div className='flex flex-row flex-wrap justify-center gap-10 mx-4 mt-8 md:mx-16'>
  <p className='text-white'>I am a passionate third-year Computer Engineering undergraduate deeply fascinated by everything about computers💻. My academic journey has been centered around software engineering, and I'm currently delving into the exciting field of DevOps. Alongside honing my technical skills, I emphasize developing soft skills, understanding the importance of effective communication, teamwork, and problem-solving.

I am driven by a love for technology and its transformative potential for lives and businesses. Constantly seeking growth, I actively engage in expanding my knowledge and staying updated with the latest advancements in the field. Outside of academics and technology, I find joy in various hobbies and interests. When I'm not coding👨‍💻—especially when there aren't any giant, screen-filling, software-crashing errors🙂‍↕—you can find me playing chess, listening to music🎧, or watching a movie.

I also have a keen interest in robotics and a fascination with space🪐. Always eager to learn new things and take on new challenges, I'm driven by a desire to make a meaningful impact in the world of technology and beyond</p>

<ol class="items-center sm:flex">
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-textBas dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Dharmadutha College Badulla</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2006-2020</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Completed OL's with 6A's and 3B's AL's with  2A's and B in the Physical Stream</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-textBas dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">University of Ruhuna</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - present
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Currently following a BSc in Computer Engineering.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-textBas dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">University of Ruhuna</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - present
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Currently following a BSc in Computer Engineering.</p>
        </div>
    </li>
</ol>






 
</div>

</section>
            

            {/* Skills section */}
         
             
<section className='flex flex-wrap items-center gap-4 pl-20 pr-20 my-24 justify-evenly md:mt-48 lg:mt-56' id='skill'>
<h1 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">I'M FAMILIAR WITH...</h1>
<div class="">

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4  p-10 pt-28">

        <div class="block rounded-xl border border-gray-800 p-4">
            <span class="inline-block rounded-lg p-3">
               <div class="inline-flex align-middle justify-center items-center select-none text-white">
                   <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="32" width="32">
                     <path d="M8.50141 14.75C8.3114 14.75 8.12141 14.68 7.97141 14.53L5.97141 12.53C5.68141 12.24 5.68141 11.7599 5.97141 11.4699L7.97141 9.46994C8.26141 9.17994 8.7414 9.17994 9.0314 9.46994C9.3214 9.75994 9.3214 10.24 9.0314 10.53L7.5614 12L9.0314 13.4699C9.3214 13.7599 9.3214 14.24 9.0314 14.53C8.8814 14.68 8.69141 14.75 8.50141 14.75Z" fill="currentColor"></path>
                     <path d="M16.5014 14.75C16.3114 14.75 16.1214 14.68 15.9714 14.53C15.6814 14.24 15.6814 13.7599 15.9714 13.4699L17.4414 12L15.9714 10.53C15.6814 10.24 15.6814 9.75994 15.9714 9.46994C16.2614 9.17994 16.7414 9.17994 17.0314 9.46994L19.0314 11.4699C19.3214 11.7599 19.3214 12.24 19.0314 12.53L17.0314 14.53C16.8814 14.68 16.6914 14.75 16.5014 14.75Z" fill="currentColor"></path>
                     <path d="M12.5 22.75C6.57 22.75 1.75 17.93 1.75 12C1.75 6.07 6.57 1.25 12.5 1.25C18.43 1.25 23.25 6.07 23.25 12C23.25 17.93 18.43 22.75 12.5 22.75ZM12.5 2.75C7.4 2.75 3.25 6.9 3.25 12C3.25 17.1 7.4 21.25 12.5 21.25C17.6 21.25 21.75 17.1 21.75 12C21.75 6.9 17.6 2.75 12.5 2.75Z" fill="currentColor"></path>
                     <path d="M11.5021 15.0801C11.4021 15.0801 11.3021 15.0601 11.2121 15.0201C10.8321 14.8601 10.6521 14.4201 10.8221 14.0301L12.8221 9.36004C12.9821 8.98004 13.4221 8.80002 13.8021 8.97002C14.1821 9.13002 14.3621 9.57008 14.1921 9.96008L12.1921 14.6301C12.0721 14.9101 11.7921 15.0801 11.5021 15.0801Z" fill="currentColor"></path>
                   </svg>
               </div>
            </span>

            <h2 class="mt-2 font-semibold text-base sm:text-lg text-white">
                Frontend Development
            </h2>
            <p class="sm:mt-1 block text-sm sm:text-base text-gray-300"> Prototype ideas
                online, without depending on your local environment.
            </p>
        </div>

        <div class="block rounded-xl border border-gray-800 p-4">
            <span class="inline-block rounded-lg p-3">
                <div class="inline-flex align-middle justify-center items-center select-none text-white">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="32" width="32">
                      <path d="M7.55556 4.22222C7.55556 2.99492 8.55048 2 9.77778 2C11.0051 2 12 2.99492 12 4.22222V5.44444C12 5.99673 12.4477 6.44444 13 6.44444H16.5556C17.1078 6.44444 17.5556 6.89216 17.5556 7.44444V11C17.5556 11.5523 18.0033 12 18.5556 12H19.7778C21.0051 12 22 12.9949 22 14.2222C22 15.4496 21.0051 16.4444 19.7778 16.4444H18.5556C18.0033 16.4444 17.5556 16.8922 17.5556 17.4444V21C17.5556 21.5523 17.1078 22 16.5556 22H13C12.4477 22 12 21.5523 12 21V19.7778C12 18.5504 11.0051 17.5556 9.77778 17.5556C8.55048 17.5556 7.55556 18.5504 7.55556 19.7778V21C7.55556 21.5523 7.10784 22 6.55556 22H3C2.44772 22 2 21.5523 2 21V17.4444C2 16.8922 2.44772 16.4444 3 16.4444H4.22222C5.44952 16.4444 6.44444 15.4496 6.44444 14.2222C6.44444 12.9949 5.44952 12 4.22222 12H3C2.44772 12 2 11.5523 2 11V7.44444C2 6.89216 2.44772 6.44444 3 6.44444H6.55556C7.10784 6.44444 7.55556 5.99673 7.55556 5.44444V4.22222Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"></path>
                   </svg>
                </div>
            </span>
            <h2 class="mt-2 font-semibold text-base sm:text-lg text-white">
                Backend Development
            </h2>
            <p class="sm:mt-1 block text-sm sm:text-base text-gray-300"> Deliver
                high-quality, engaging blogs, articles, and video tutorials to your audience.
            </p>
        </div>

        <div class="block rounded-xl border border-gray-800 p-4">
            <span class="inline-block rounded-lg p-3">
                <div class="inline-flex align-middle justify-center items-center select-none text-white">
                    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="32" width="32">
                      <path d="M12.6586 11.62C12.6286 11.62 12.6086 11.62 12.5786 11.62C12.5286 11.61 12.4586 11.61 12.3986 11.62C9.49859 11.53 7.30859 9.25 7.30859 6.44C7.30859 3.58 9.63859 1.25 12.4986 1.25C15.3586 1.25 17.6886 3.58 17.6886 6.44C17.6786 9.25 15.4786 11.53 12.6886 11.62C12.6786 11.62 12.6686 11.62 12.6586 11.62ZM12.4986 2.75C10.4686 2.75 8.80859 4.41 8.80859 6.44C8.80859 8.44 10.3686 10.05 12.3586 10.12C12.4086 10.11 12.5486 10.11 12.6786 10.12C14.6386 10.03 16.1786 8.42 16.1886 6.44C16.1886 4.41 14.5286 2.75 12.4986 2.75Z" fill="currentColor"></path>
                      <path d="M12.6716 22.55C10.7116 22.55 8.74156 22.05 7.25156 21.05C5.86156 20.13 5.10156 18.87 5.10156 17.5C5.10156 16.13 5.86156 14.86 7.25156 13.93C10.2516 11.94 15.1116 11.94 18.0916 13.93C19.4716 14.85 20.2416 16.11 20.2416 17.48C20.2416 18.85 19.4816 20.12 18.0916 21.05C16.5916 22.05 14.6316 22.55 12.6716 22.55ZM8.08156 15.19C7.12156 15.83 6.60156 16.65 6.60156 17.51C6.60156 18.36 7.13156 19.18 8.08156 19.81C10.5716 21.48 14.7716 21.48 17.2616 19.81C18.2216 19.17 18.7416 18.35 18.7416 17.49C18.7416 16.64 18.2116 15.82 17.2616 15.19C14.7716 13.53 10.5716 13.53 8.08156 15.19Z" fill="currentColor"></path>
                    </svg>
                </div>
            </span>

            <h2 class="mt-2 font-semibold text-base sm:text-lg text-white">
                DevOps</h2>
            <p class="sm:mt-1 block text-sm sm:text-base text-gray-300"> Easily create and
                share coding assignments and projects with your students
            </p>
        </div>

        <div class="block rounded-xl border border-gray-800 p-4">
            <span  class="inline-block rounded-lg p-3">
               <div class="inline-flex align-middle justify-center items-center select-none text-white">
                   <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="32" width="32">
                    <path d="M15.2013 6.29998C15.0181 6.48691 14.9155 6.73823 14.9155 6.99998C14.9155 7.26173 15.0181 7.51305 15.2013 7.69998L16.8013 9.29998C16.9882 9.48321 17.2396 9.58584 17.5013 9.58584C17.7631 9.58584 18.0144 9.48321 18.2013 9.29998L21.4602 6.04107C21.7073 5.79397 22.1242 5.87146 22.229 6.20485C22.52 7.13078 22.583 8.11721 22.4078 9.07913C22.1892 10.279 21.61 11.3838 20.7476 12.2463C19.8852 13.1087 18.7804 13.6878 17.5805 13.9064C16.4942 14.1044 15.3767 13.9983 14.3504 13.6034C14.1561 13.5287 13.9339 13.5674 13.7867 13.7146L7.12132 20.38C6.7235 20.7778 6.18393 21.0013 5.62132 21.0013C5.05871 21.0013 4.51914 20.7778 4.12132 20.38C3.7235 19.9822 3.5 19.4426 3.5 18.88C3.5 18.3174 3.7235 17.7778 4.12132 17.38L10.7867 10.7146C10.9339 10.5674 10.9726 10.3452 10.8979 10.1509C10.503 9.12458 10.3969 8.00708 10.5949 6.92083C10.8135 5.72092 11.3926 4.61614 12.255 3.7537C13.1175 2.89127 14.2223 2.31215 15.4222 2.09352C16.3841 1.91826 17.3705 1.98134 18.2965 2.27232C18.6298 2.37708 18.7073 2.79397 18.4602 3.04107L15.2113 6.28998L15.2013 6.29998Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                   </svg>
               </div>
            </span>
            <h2 class="mt-2 font-semibold text-base sm:text-lg text-white">
                Database Management </h2>
            <p class="sm:mt-1 block text-sm sm:text-base text-gray-300">For issue
                reproduction while letting your users try your work without installing it
            </p>
        </div>
    </div>
</div>
<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">TOOLS THAT I CAN USE</h2>
<div className='flex flex-row flex-wrap justify-center gap-10 mx-4 mt-8 md:mx-16'>
  

{Logo && Logo.map((index) => (
    <div key={index} className='w-12 h-12 mx-auto overflow-hidden transition-transform border rounded-lg shadow-lg border-zinc-800 hover:border-zinc-600 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110'>
    <img src={index.imageSrc} alt='' />
  </div>
))}


 
</div>

</section>


            {/* Timeline section */}
            <section className='flex items-center justify-center w-full pl-10 pr-10'>
  <VerticalTimeline>
  {
    Experience && Experience.map((n) => (
    <VerticalTimelineElement
    key={n.id}
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(21, 24, 31)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
      date={n.date}
      iconStyle={{ background: 'rgb(21, 24, 31)', color: '#fff' }}
      icon={n.iconsSrc}
    >
      <h3 className="vertical-timeline-element-title">{n.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
      <p>
        {n.description}
      </p>
    </VerticalTimelineElement>))
  }

  
  </VerticalTimeline>
</section>

{/* Project Section*/}
<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white pt-20">Projects</h2>
<section className='flex flex-wrap items-center gap-4 pl-20 pr-20 my-24 justify-evenly' id='projects'>

 {Projects && Projects.map((n) => (
   <div key={n.id} className='border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>
   <p className='font-medium uppercase text-md text-textBase'>
  {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
</p>

   <img src={n.imageSrc} className='object-cover w-full h-full my-4 rounded-md'></img>
   <div className='flex items-center justify-between flex-1 '>
     <p className='text-lg text-gray-300'>{n.techs}
     <span className='block text-sm text-gray-500'>
       {n.techs}

       </span>
       </p>
       <a href={n.github}>
         <motion.div
         whileTap={{scale:0.8}}
          className='text-3xl cursor-pointer text-textBase' >
<IoLogoGithub/>
         </motion.div>
       </a>
   </div>
 </div>

 ) )}
</section>

            {/* Contact section */}
            
<section id="contact" className='flex flex-col items-center justify-center w-full pl-10 pr-10 my-24'>
<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>

      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to talk With me? Just put an email here.I will respond as quickly as possible</p>
      <form onSubmit={onSubmit} action="#"  class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="name" name="name" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
  <p className='text-gray-400 capitalize text-2x1'> follow me </p>
  <div className='flex flex-wrap items-center justify-center w-full gap-4 my-4'>
  {
    SocialLinks && SocialLinks.map((n) => (  
    <motion.a 
    whileTap={{scale:0.8}}
    key={n.id} href={n.link} className='flex items-center justify-center w-full gap-3 px-3 py-5 duration-100 ease-in-out border cursor-pointer md:w-auto md:px-8 border-x-zine-800 rounded-2xl hover:border-zinc-600'>
    {n.iconSrc}
    <p className='text-lg text-textBase'>{n.name}</p>
  </motion.a>))
  }
  </div>

</section>
          </main>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
