import React, { useState } from 'react';
import './App.css';
import ParticlesComponent from './components/particles';

import 'react-vertical-timeline-component/style.min.css';

import { IoMenu } from 'react-icons/io5';
import CV from './File/EE3253_L2_4733.pdf';
import { Experience, Projects, SocialLinks, Logo, skills } from './data';
import { AnimatePresence, motion } from 'framer-motion';

import ProjectsSection from './ProjectsSection';
import ExperienceSection from './Timeline';
import SkillSection from './SkillSection ';
import AboutMeSection from './AboutSection';
import HomeSection from './HomeSection';

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
            {/* Home section */}
            <HomeSection CV={CV}/>

            {/* About section */}
            <AboutMeSection />

            {/* Skills section */}
            <SkillSection skills={skills} tools={Logo}/>

            {/* Timeline section */}
            <ExperienceSection experience={Experience} />

            {/* Project Section */}
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white pt-20">Projects</h2>
            <ProjectsSection Projects={Projects}/>

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