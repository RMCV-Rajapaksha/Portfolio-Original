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
import { FaReact, FaDatabase, FaServer, FaCogs } from 'react-icons/fa';

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
         
             
<section className='flex flex-wrap items-center gap-4 pl-20 pr-20 my-24 justify-evenly md:mt-48 lg:mt-44' id='skill'>
<h1 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">I'M FAMILIAR WITH...</h1>   <div className="">
        <div className="grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 pt-28">
            <div className="block p-4 border border-gray-800 rounded-xl">
                <span className="inline-block p-3 rounded-lg">
                    <div className="inline-flex items-center justify-center text-white align-middle select-none">
                        <FaReact size={32} />
                    </div>
                </span>
                <h2 className="mt-2 text-base font-semibold text-white sm:text-lg">
                    Frontend Development
                </h2>
                <p className="block text-sm text-gray-300 sm:mt-1 sm:text-base"> Prototype ideas online, without depending on your local environment.
                </p>
            </div>

            <div className="block p-4 border border-gray-800 rounded-xl">
                <span className="inline-block p-3 rounded-lg">
                    <div className="inline-flex items-center justify-center text-white align-middle select-none">
                        <FaServer size={32} />
                    </div>
                </span>
                <h2 className="mt-2 text-base font-semibold text-white sm:text-lg">
                    Backend Development
                </h2>
                <p className="block text-sm text-gray-300 sm:mt-1 sm:text-base"> Deliver high-quality, engaging blogs, articles, and video tutorials to your audience.
                </p>
            </div>

            <div className="block p-4 border border-gray-800 rounded-xl">
                <span className="inline-block p-3 rounded-lg">
                    <div className="inline-flex items-center justify-center text-white align-middle select-none">
                        <FaCogs size={32} />
                    </div>
                </span>
                <h2 className="mt-2 text-base font-semibold text-white sm:text-lg">
                    DevOps
                </h2>
                <p className="block text-sm text-gray-300 sm:mt-1 sm:text-base"> Easily create and share coding assignments and projects with your students
                </p>
            </div>

            <div className="block p-4 border border-gray-800 rounded-xl">
                <span className="inline-block p-3 rounded-lg">
                    <div className="inline-flex items-center justify-center text-white align-middle select-none">
                        <FaDatabase size={32} />
                    </div>
                </span>
                <h2 className="mt-2 text-base font-semibold text-white sm:text-lg">
                    Database Management
                </h2>
                <p className="block text-sm text-gray-300 sm:mt-1 sm:text-base"> For issue reproduction while letting your users try your work without installing it
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
