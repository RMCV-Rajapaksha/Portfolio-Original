import { FaReact, FaDatabase, FaServer, FaCogs } from 'react-icons/fa';

import C from './images/c.png';
import CSS from './images/css.png';
import HTML from './images/html.png';
import JS from './images/node-js.png';
import React from './images/react.png';
import Figma from './images/figma.png';
import Tailwind from './images/tailwind-css.png';
import Firebase from './images/firebase.png';
import Flutter from './images/flutter.png';
import Git from './images/git.png';
import Java from './images/java.png';
import Mongodb from './images/mongodb.png';
import Mysql from './images/mysql.png';
import Postman from './images/postman.png';
import Python from './images/python.png';


//projects
import Finance_app from './images/thumbnail/Finace_app.png';
import Finance_web from './images/thumbnail/Finance_web.png';
import Password from './images/thumbnail/Password.png';
import Pos_Flutter from './images/thumbnail/Pos_Flutter.png';
import Pos from './images/thumbnail/Pos.png';
import Vision from './images/thumbnail/Vision.png';
import Hostel from './images/thumbnail/Hostel.png';


//competitions 
import Eminence from './images/competitions/Eminence.jpg';
import Xtreme from './images/competitions/Xtreme.png';
import Insurgex from './images/competitions/Insugex.jpg';
import HackVenture from './images/competitions/HackVenture.jpg';
import SparkLink from './images/competitions/SparkLink.jpg';
import RedCypher from './images/competitions/RedCypher.jpg';

//oc
import Axiom from './images/oc/Axiom.jpg';
import CareerXpo from './images/oc/CareerXpo.jpg';


import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoLogoMedium 
} from "react-icons/io5";



export const Experience = [
    {
      id: 1,
      date: "2023",
      iconsSrc: <IoCodeWorking />,
      title: "Eminence 3.0",
      location: "By WIE Affinity group of IEEE student branch @ FOE,UOR",
      description:
      "As a part of team Matrix, won the 1st place in Eminence 3.0, a software, electronic, telecommunication and electrical field related competition organized by WIE Affinity group of IEEE student branch @ FOE,UOR.",
   
         img:Eminence
    },
    {
      id: 2,
      date: "2023",
      iconsSrc: <IoCodeWorking />,
      title: "SparkLink 1.0",
      location: "By IEEE student branch UOR",
    
      description:
      "As team Team Inception, we won the 6th place among 15+ teams.",
         img:SparkLink
    },
    {
      id: 3,
      date: "2023",
      iconsSrc: <IoCodeWorking />,
      title: "Xtreme 17.0",
      location: "By IEEE",
      description:
        "XTreme was a 24 hour global hackathon organized by IEEE. I was a part of the team TeamInceptionB and we won the 4rd place in University of Ruhuna and placed 116th in Sri Lanka.",
         img:Xtreme
    },
    {
      id: 4,
      date: "2023",
      iconsSrc: <IoCodeWorking />,
      title: "Insurgex 1.0",
      location: "By Computer Science Students' Community @ FOS,UOR",
      description:
        "As a part of team Team Inception, won the 2st place in Insurgex 1.0, hackathon competition organized by WIE Affinity group of IEEE student branch @ FOE,UOR.",
        img:Insurgex
    },
    {
      id: 5,
      date: "2024",
      iconsSrc: <IoCodeWorking />,
      title: "Red Cypher 1.0",
      location: "By CS Chapter, IEEE Student Branch @ UOR",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
         img:RedCypher
    },
    {
      id: 6,
      date: "2024",
      iconsSrc: <IoCodeWorking />,
      title: "HackVenture 1.0",
      location: "By AIESEC community @ UOK",
      description:
        "As part of Team Inception, Colifi participated in HackVenture 1.0, an innovation competition organized by the AIESEC community at UOK.",
         img:HackVenture
    },
   
  ];


  
export const Projects = [
  {
    id: 1,
    name: "Food Delivery UI Mockup",
    imageSrc: Finance_web,
    techs: "React Js, Redux, Material UI",
    github: "#",
  },
  {
    id: 2,
    name: "Full Stack Social Media App ",
    imageSrc: Pos,
    techs: "React Js, Sanity, Tailwind CSS",
    github: "#",
  },
  {
    id: 3,
    name: "Travel Advisor",
    imageSrc: Password,
    techs: "React Js, Chakra UI, Google API",
    github: "#",
  },
  {
    id: 4,
    name: "Pintrest UI Clone 2.0 ",
    imageSrc: Vision,
    techs: "React Js,  Material UI",
    github: "#",
  },
  {
    id: 5,
    name: "Own Video Blog",
    imageSrc: Pos_Flutter,
    techs: "React Js, Chara UI, Firebase",
    github: "#",
  },
  {
    id: 6,
    name: "Whatsapp UI Clone",
    imageSrc: Finance_app,
    techs: "NextJs, Firebase Auth",
    github: "#",
  },
  {
    id: 7,
    name: "Whatsapp UI Clone",
    imageSrc: Hostel,
    techs: "NextJs, Firebase Auth",
    github: "#",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-3xl cursor-pointer text-textBase" />,
    name: "GitHub",
    link: "https://github.com/RMCV-Rajapaksha",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-3xl text-blue-800 cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chamara-vishvajith-09b561242/",
  },
  {
    id: 1,
    iconSrc: <IoLogoMedium className="text-3xl text-white cursor-pointer" />,
    name: "Medium",
    link: "https://medium.com/@sch.chamara",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoFacebook className="text-3xl text-blue-500 cursor-pointer" />
    ),
    name: "Facebook",
    link: "https://www.facebook.com/vira.kuma?mibextid=ZbWKwL",
  },
  
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-3xl text-green-500 cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://wa.me/qr/IY6J7TAUBVOZC1",
  },
];




  
export const tools = [
  {
    id: 1,
    imageSrc: C, 
  },
  {
    id: 2,
    imageSrc: CSS, 
  },
  {
    id: 3,
    imageSrc: HTML, 
  },
  {
    id: 4,
    imageSrc: JS, 
  },
  {
    id: 5,
    imageSrc: React, 
  },
  {
    id: 6,
    imageSrc: Figma, 
  },
  {
    id: 7,
    imageSrc: Tailwind, 
  },
  {
    id: 8,
    imageSrc: Firebase, 
  },
  {
    id: 9,
    imageSrc: Flutter, 
  },
  {
    id: 10,
    imageSrc: Git, 
  },
  {
    id: 11,
    imageSrc: Java, 
  },
  {
    id: 12,
    imageSrc: Mongodb, 
  },
  {
    id: 13,
    imageSrc: Mysql, 
  },
  {
    id: 14,
    imageSrc: Postman, 
  },
  {
    id: 15,
    imageSrc: Python, 
  },
  
  
];

export const skills = [
  {
    icon: FaReact,
    title: 'Frontend - Development',
    description: 'Prototype ideas online, without depending on your local environment.'
  },
  {
    icon: FaServer,
    title: 'Backend - Development',
    description: 'Deliver high-quality, engaging blogs, articles, and video tutorials to your audience.'
  },
  {
    icon: FaCogs,
    title: 'DevOps',
    description: 'Easily create and share coding assignments and projects with your students.'
  },
  {
    icon: FaDatabase,
    title: 'Database Management',
    description: 'For issue reproduction while letting your users try your work without installing it.'
  }
];



export const volunteeringData = [
  {
    imgSrc: CareerXpo,
    altText: "volunteering",
    hoverText: "Hover me!",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc:Axiom,
    altText: "volunteering",
    hoverText: "Hover me!",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: "https://images.pexels.com/photos/19730800/pexels-photo-19730800/free-photo-of-an-empty-ski-lift-on-the-background-of-rocky-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    altText: "volunteering",
    hoverText: "Hover me!",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }
];