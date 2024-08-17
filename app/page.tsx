"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import NavBar from "./navbar";

import Image from "next/image";
import AboutMePic from "../app/attachments/AboutMe/aboutMePic.jpg";
import SBicon from "../app/attachments/AboutMe/snowboard.png";
import WeightsIcon from "../app/attachments/AboutMe/weight-lifting.png";
import FishingIcon from "../app/attachments/AboutMe/fishing.png";
import BowlingPic from '../app/attachments/AboutMe/bowlingPic.png';

import PythonIcon from "../app/attachments/SkillsIcons/Languages/python.png";
import CIcon from "../app/attachments/SkillsIcons/Languages/C.png";
import JavaIcon from "../app/attachments/SkillsIcons/Languages/Java.png";
import CPPIcon from "../app/attachments/SkillsIcons/Languages/cpp.png";
import CSSIcon from "../app/attachments/SkillsIcons/Languages/CSS3.png";
import HTMLIcon from "../app/attachments/SkillsIcons/Languages/HTML5.png";
import JSIcon from "../app/attachments/SkillsIcons/Languages/js.png";
import SQLIcon from "../app/attachments/SkillsIcons/Languages/sql.png";
import BashIcon from "../app/attachments/SkillsIcons/Languages/bash.png";
import PHPIcon from "../app/attachments/SkillsIcons/Languages/PHPIcon.png";

import TypeScriptIcon from "../app/attachments/SkillsIcons/FrameWorks/typescript.png";
import TailwindIcon from "../app/attachments/SkillsIcons/FrameWorks/TailwindCSS.png";
import ReactIcon from "../app/attachments/SkillsIcons/FrameWorks/react.png";
import BootStrapIcon from "../app/attachments/SkillsIcons/FrameWorks/bootstrap.png";
import NextJsIcon from "../app/attachments/SkillsIcons/FrameWorks/Next.js.png";

import GitIcon from "../app/attachments/SkillsIcons/DevTools/Git.png";
import GitHubIcon from "../app/attachments/SkillsIcons/DevTools/GitHub.png";
import JupyterIcon from "../app/attachments/SkillsIcons/DevTools/Jupyter.png";
import LinuxIcon from "../app/attachments/SkillsIcons/DevTools/Linux.png";
import VercelIcon from "../app/attachments/SkillsIcons/DevTools/Vercel.png";
import MongoDBIcon from "../app/attachments/SkillsIcons/DevTools/mongodbIcon.png";

import AttendEazyPic from '../app/attachments/ProjectPics/attendEazyPic.png';
import SpaceCoordPic from "../app/attachments/ProjectPics/SpaceCoordPic.png";
import WebScraperPic from "../app/attachments/ProjectPics/WebScraperPic.jpg";
import GlobalTempPic from "../app/attachments/ProjectPics/GlobalTemp.png";
import LexicalAnalyzerPic from "../app/attachments/ProjectPics/LexicalAnalyzerPic.png";

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

import { FaPhoneSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { FaGithub, FaLinkedin } from 'react-icons/fa';


import Particles from "../app/components/Particles";
import dynamic from "next/dynamic";

const AutoType = dynamic(() => import("../app/components/autoType"), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <main>
        <NavBar/>
        <NameSec />
        <DescriptionSec />
        <SkillsSec />
        <ProjectsSec />
        <EduAndExpSec />
        <ContactUs />
      </main>
    </div>
  )
}

const NameSec = () => {
  return(
    <section
        className="relative min-h-screen flex flex-col items-center justify-center py-10 px-4 "
        id="home"
      >
        <div className="inset-0 w-full h-full">
          <Particles />
        </div>

        <div className="z-10">
          <h1 className="text-white font-semibold text-8xl ">
            David Laskowski
          </h1>
          <p>
            <AutoType />
          </p>
          <div className=" mt-5 text-4xl space-x-5 flex justify-center ">
            <a href="https://www.linkedin.com/in/davidlaskowski2002/" target="_blank">
              <AiFillLinkedin className="text-white hover:text-gray-300 hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/dlaskowski23" target="_blank">
              <AiFillGithub className="text-white hover:text-gray-300 hover:scale-110 transition-transform" />
            </a>
            <a href="/attachments/DavidLaskowskiResume.pdf" target="_blank">
              <CgFileDocument className="text-white hover:text-gray-300 hover:scale-110 transition-transform" />
            </a>

          </div>
        </div>
      </section>
  );
};

const DescriptionSec = () => {
  return (
    <section
        className="flex flex-col items-center bg-black justify-center py-10 px-4"
        id="aboutme"
      >
        <h1 className="text-white font-extrabold text-7xl mt-10 z-10">
          About Me
        </h1>
        <h2 className="text-white font-semibold text-3xl mb-10 z-10">~</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto p-4 z-10">
          <div className="mx-auto">
            <Image
              src={AboutMePic}
              alt="David Laskowski"
              className="border rounded-3xl"
              width={420}

            />
          </div>
          <div className="flex flex-1 flex-col items-center">
            <p className="text-white text-2xl text-center ml-6 mb-6">
              Hi! I'm David Laskowski. I'm currently an Undergraduate Computer
              Science Student at the New Jersey Institute of Technology. I will
              be graduating in May 2025 with a Bachelors of Science in Computer
              Science. I have had a passion for problem-solving and creating,
              which I plan to pursue that as a career in Software Engineering or
              Cyber Security. Some of my hobbies include snowboarding, fitness,
              fishing, and bowling.
            </p>
            <div className="flex justify-center space-x-5">
              <Image
                src={SBicon}
                alt="SnowBoardIcon"
                className="bg-white p-2 rounded-full shadow-xl hover:scale-110 transition-transform"
                width={100}
              />
              <Image
                src={WeightsIcon}
                alt="WeightsIcon"
                className="hover:scale-110 transition-transform bg-white p-2 rounded-full shadow-xl"
                width={100}
              />
              <Image
                src={FishingIcon}
                alt="WeightsIcon"
                className="hover:scale-110 transition-transform bg-white p-2 rounded-full shadow-xl"
                width={100}
              />
              <Image
                src={BowlingPic}
                alt="WeightsIcon"
                className="hover:scale-110 transition-transform bg-white p-2 rounded-full shadow-xl"
                width={100}
              />
            </div>
          </div>
        </div>
      </section>
  );
};

const SkillsSec = () => {
  return(
    <section
        className="flex flex-col items-center justify-center mt-52 px-4"
        id="skills"
      >
        <h1 className="text-white font-bold text-7xl mt-10 z-10">Skills</h1>
        <h2 className="text-white font-semibold text-3xl mb-10 z-10">~</h2>
        <h3 className="text-white font-semibold text-3xl mt-10 z-10">Languages</h3>
        
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mx-auto p-4 z-10 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={PythonIcon} alt="Python Icon" />
            <h1 className="text-lg font-semibold mt-2 text-center">Python</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={JavaIcon} alt="Java Icon" width={128}/>
            <h1 className="text-lg font-semibold mt-2 text-center">Java</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={CIcon} alt="C Icon" width={128}/>
            <h1 className="text-lg font-semibold mt-2 text-center">C</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={CPPIcon} alt="CPP Icon" />
            <h1 className="text-lg font-semibold mt-2 text-center">C++</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={HTMLIcon} alt="HTML Icon" width={128}/>
            <h1 className="text-lg font-semibold mt-2 text-center">HTML</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={CSSIcon} alt="CSS Icon" width={128}/>
            <h1 className="text-lg font-semibold mt-2 text-center">CSS</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={JSIcon} alt="JS Icon" />
            <h1 className="text-lg font-semibold mt-2 text-center">JavaScript</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={SQLIcon} width={128} alt="SQL Icon" />
            <h1 className="text-lg font-semibold mt-2 text-center">SQL</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={BashIcon} width={128} alt="Bash Icon" />
            <h1 className="text-lg font-semibold mt-2 text-center">Bash</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={PHPIcon} width={128} alt="PHP Icon" />
            <h1 className="text-lg font-semibold mt-2 text-center">PHP</h1>
          </div>
        </div>
        <h3 className="text-white font-semibold text-3xl mt-10 z-10">
          Libraries & Frameworks
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mx-auto p-4 z-10 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={TypeScriptIcon} alt="TypeScript Icon" className="fill-current" />
            <h1 className="text-lg font-semibold mt-2 md:text-center text-left">TypeScript</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={ReactIcon} alt="React Icon" className="fill-current" width={128} />
            <h1 className="text-lg font-semibold mt-2 text-center">ReactJS</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={BootStrapIcon}  alt="BootStrap Icon" className="fill-current" width={128} />
            <h1 className="text-lg font-semibold mt-2 md:text-center text-left">BootStrap</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={TailwindIcon} alt="Tailwind Icon" className="fill-current" width={128} />
            <h1 className="text-lg font-semibold mt-2 text-center">Tailwind CSS</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={NextJsIcon} alt="NextJS Icon" className="fill-current" width={128} />
            <h1 className="text-lg font-semibold mt-2 text-center">NextJS</h1>
          </div>
        </div>
        <h3 className="text-white font-semibold text-3xl mt-10 z-10">
          Developer Tools
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 mx-auto p-4 z-10 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={GitHubIcon} alt="GitHub" className="fill-current" width={128}/>
            <h1 className="text-lg font-semibold mt-2 text-center">GitHub</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={GitIcon} alt="Git" className="fill-current" width={128}/>
            <h1 className="text-lg font-semibold mt-2 text-center">Git</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={JupyterIcon} alt="Jupyter" className="fill-current" width={128}/>
            <h1 className="text-lg font-semibold mt-2 text-center">Jupyter</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={LinuxIcon} alt="Linux" className="fill-current" width={128}/>
            <h1 className="text-lg font-semibold mt-2 text-center">Linux</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={VercelIcon} alt="Vercel Icon" className="fill-current" width={128} />
            <h1 className="text-lg font-semibold mt-2 text-center">Vercel</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={MongoDBIcon} alt="Vercel Icon" className="fill-current" width={128} />
            <h1 className="text-lg font-semibold mt-2 text-center">MongoDB</h1>
          </div>
        </div>
      </section>
  );
};

const ProjectsSec = () => {
  return(
    <section className="flex flex-col items-center justify-center mt-52 px-4" id="projects">

        <div className="flex flex-col items-center justify-center py-10 px-4">
          <h1 className="text-white font-bold text-7xl mt-10 mb-6 text-center z-10">Projects</h1>
          <h2 className="text-white font-semibold text-3xl mb-3 z-10">~</h2>
        </div>

        <div className=" bg-white rounded-2xl grid grid-cols md:grid-cols-2 gap-10 max-w-6xl mb-10 mx-auto p-4 z-10 shadow-xl">
          <div className="mx-auto">
            <Image
              src={AttendEazyPic}
              alt="David Laskowski"
              className=" border rounded-2xl outline outline-black shadow-lg mt-7"
              width={450}
            />
          </div>
          <div className="flex flex-1 flex-col  mr-9 items-center">
            <h1 className="mb-2 text-2xl font-bold">AttendEazy</h1>
            <p className=" text-base  mb-2">
              Within CS 485, my group and I worked on a full-stack project with the goal of using agile methodologies.
              We created a digital attendance app called AttendEazy, which allows people who teach to keep the attendance of their students.
              The front-end is a combination of React + Vite with tailwind CSS used for the styling. The backend uses AWS & terraform,
              NodeJS & Express, and MySQL for the data base. Within the website you are able to create an account, set up classes with their respective students,
              and view a report with charts and graphs imported from the chatJS library to keep up to date with your classroom attendance.
            </p>
            <div className="flex justify-center space-x-5">
              <button className="bg-lime-500 hover:bg-lime-400 outline outline-lime-400 outline-offset-2 text-white font-bold py-2 px-4 rounded shadow-xl">
                <a href="https://attendeazy.com/" target="_blank">Webiste Link</a>
              </button>
              <button className="bg-cyan-500 hover:bg-cyan-400 button outline outline-cyan-400 outline-offset-2 text-white font-bold py-2 px-4 rounded shadow-xl">
                <a href="https://github.com/dlaskowski23/AttendanceReactApp" target="_blank">GitHub</a>
              </button>
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-2xl grid grid-cols md:grid-cols-2 gap-10 max-w-6xl mx-auto p-4 z-10 shadow-xl">
          <div className="mx-auto">
            <Image
              src={SpaceCoordPic}
              alt="David Laskowski"
              className=" border rounded-2xl outline outline-black shadow-lg py-5"
              width={450}
            />
          </div>
          <div className="flex flex-1 flex-col py-6 mr-9 items-center">
            <h1 className="mb-2 text-2xl font-bold">Space Satellite Coordinator </h1>
            <p className=" text-base  mb-9">
              At NJIT's 2023 GirlHacks Hackathon, our team won the "Best Use of StreamLit" award,
              winning amongst 120+ participants with our web app aimed to provide real-time satellite 
              information and solar system insights. It allows users to locate nearby satellites and 
              explore detailed information about the planets in our solar system. Built using Python 
              with Streamlit, it combines the functionality of APIs (StreamLit, OpenAI GPT), real-time data, and AI-driven 
              responses to user queries about space.
            </p>
            <div className="flex justify-center space-x-5">
              <button className="bg-purple-500 hover:bg-purple-400 button outline outline-purple-400 outline-offset-2 text-white font-bold py-2 px-4 rounded shadow-xl">
                <a href="https://devpost.com/software/solar-system-satnav-explorer" target="_blank">DevPost</a>
              </button>
              <button className="bg-cyan-500 hover:bg-cyan-400 button outline outline-cyan-400 outline-offset-2 text-white font-bold py-2 px-4 rounded shadow-xl">
                <a href="https://github.com/dlaskowski23/SpaceSatelliteCoordinator/tree/main" target="_blank">GitHub</a>
              </button>
              <button disabled className="hover:scale-110 transition-transform border bg-yellow-400 outline outline-yellow-400 outline-offset-2 text-white font-bold py-2 px-4 rounded shadow-xl">
                <a>Winner!</a>
              </button>
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-2xl grid grid-cols md:grid-cols-2 gap-10 max-w-6xl mx-auto p-4 mt-10 z-10 shadow-xl">
          <div className="mx-auto">
            <Image
              src={WebScraperPic}
              alt="Web Scaper"
              className="border rounded-2xl outline outline-black shadow-lg py-5"
              width={450}
            />
          </div>
          <div className="flex flex-1 flex-col py-5 mr-9 items-center">
            <h1 className="text-2xl font-bold mb-2">Yahoo Finance Web Scraper</h1>
            <p className="text-black text-base mb-3 md:mb-2">
              I developed a real-time data fetching application that scrapes and displays 
              the most active stocks from Yahoo Finance. This project combines 
              Python's powerful scraping capabilities with PHP for web display, integrating 
              technologies like BeautifulSoup, MongoDB, and pymongo for data handling. It 
              features an interactive web interface where users can view and sort stock data, 
              showcasing my skills in both data acquisition and web development. The application 
              stands out for its real-time data scraping and storage, offering a dynamic 
              experience for stock market enthusiasts.
            </p>
            <div className="flex justify-center space-x-5">
              <button className="bg-cyan-500 hover:bg-cyan-400 button outline outline-cyan-400 outline-offset-2 text-white font-bold py-2 px-4 rounded shadow-xl">
                <a href="https://github.com/dlaskowski23/WebScraper" target="_blank">GitHub</a>
              </button>
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-2xl grid grid-cols md:grid-cols-2 gap-10 max-w-6xl mx-auto p-4 mt-10 z-10 shadow-xl">
          <div className="mx-auto">
            <Image
              src={GlobalTempPic}
              alt="globalTempPic"
              className="border rounded-2xl outline outline-black shadow-lg py-5"
              width={450}
              height={375}
            />
          </div>
          <div className="flex flex-1 flex-col py-6 mr-9 items-center">
            <h1 className="text-2xl font-bold mb-4">Global Temperature Analysis</h1>
            <p className="text-black text-base mb-6 md:mb-10">
              My group and I completed our data science project analyzing the recorded global temperature dataset from UC Berkeley.
              The aim is to uncover trends and patterns in global temperatures over time using advanced 
              statistical and machine learning techniques which were simple linear regression and Random Forest algorithm.
              We used Jupyter Notebooks' execuiting cells in sequence and python with the following libraries for the algorithms and visualization;
              pandas, numpy, sklearn, matplotlib.
            </p>
            <div className="flex justify-center space-x-5">
              <button className="bg-cyan-500 hover:bg-cyan-400 button outline outline-cyan-400 outline-offset-2 text-white font-bold py-2 px-4 rounded shadow-xl">
                <a href="https://github.com/dlaskowski23/GlobalTemperatureAnalysis" target="_blank">GitHub</a>
              </button>
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-2xl grid grid-cols md:grid-cols-2 gap-10 max-w-6xl mx-auto p-4 mt-10 z-10 shadow-xl">
          <div className="mx-auto">
            <Image
              src={LexicalAnalyzerPic}
              alt="Lexical Analyzer Pic"
              className="border rounded-2xl outline outline-black shadow-lg py-5"
              width={450}
            />
          </div>
          <div className="flex flex-1 flex-col mr-9 items-center">
            <h1 className="text-2xl font-bold mb-1 py-2">Lexical Analyzer</h1>
            <p className="text-black text-base  mb-2 md:mb-6">
              In my Lexical Analyzer project, coded in C, the first component 
             reads text to identify tokens, utilizing the context 
              provided by adjacent tokens to detect and describe errors. Designed 
              to comprehend an untyped language, it handles strings, integers,
              real numbers, comments, and basic conditional constructs. The second layer, 
              a recursive descent parser, refines this process by cross-referencing tokens 
              with grammatical structures to pinpoint syntax errors. Finally, the interpreter 
              unifies these functionalities, executing code while verifying 
              syntactic correctness.
            </p>
            <div className="flex justify-center space-x-5">
              <button className="bg-cyan-500 hover:bg-cyan-400 button outline outline-cyan-400 outline-offset-2 text-white font-bold py-2 px-4 rounded shadow-xl">
                <a href="https://github.com/dlaskowski23/LexicalAnalyzer" target="_blank">GitHub</a>
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

const EduAndExpSec = () => {
  return(
    <section className="flex flex-col items-center justify-center mt-52 px-4" id="education&experience">
      <h1 className="text-white font-bold text-7xl mt-10 z-10 text-center">Experience & Education</h1>
      <div className="mt-6 z-10 text-white space-x-5">
        <button className="mt-6 rounded-2xl border py-1 px-4 hover:scale-110 transition-transform">
          <a href="/attachments/DavidLaskowskiResume.pdf" target="_blank">VIEW</a>
        </button>
        <button className="mt-6 rounded-2xl border py-1 px-4  hover:scale-110 transition-transform">
          <a href="/attachments/DavidLaskowskiResume.pdf" download="DavidLaskowskiResume">DOWNLOAD</a>
        </button>
      </div>
      <div className="z-10">
        <iframe className=" outline mt-10 outline-white outline-offset-4 shadow-lg rounded-3xl" width={900} height={1000} src="/attachments/DavidLaskowskiResume.pdf"></iframe>
      </div>
    </section>
  );
};

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (form.current) {
      emailjs
        .sendForm(
          'service_zmz4est',
          'template_d7jjmlm',
          form.current,
          'bPUM1elXyvZcq_KtE'
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000);
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); 
          }
        );
      
      e.currentTarget.reset();
    }
  };

  return (
    <div>      
      <section className="flex flex-col items-center justify-center mt-52 mb-5" id="contact">
        <h1 className="text-white font-bold text-5xl mt-10 z-10">
          CONTACT
        </h1>
        <h2 className="text-white font-bold text-3xl mb-10 z-10">~</h2>
        <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
          <div className="flex justify-self-center min-w-[200px]">
            <HiOutlineMail className="text-3xl"/>
            <h2 className="text-xl"> dml3@njit.edu</h2>
          </div>
          <div className="flex justify-self-center min-w-[200px]">
            <FaPhoneSquare className="text-3xl" />
            <h2 className="text-xl"> +1 201-803-8461</h2>
          </div>
          <div className="flex justify-self-center min-w-[200px]">
            <HiOutlineMail className="text-3xl"/>
            <h2 className="text-xl"> david.laskowski.dev@gmail.com</h2>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mb-10" id="contact">
          <button disabled className="outline outline-white p-3 rounded-3xl text-white font-bold text-lg mt-10 z-10 shadow-xl ">
            Send me an email | Enter your name, email address, and a message
          </button>
          <section className='mt-10 bg-white z-10 rounded-2xl outline shadow-lg  outline-white outline-offset-4'>
            <form className='m-4 p-2 rounded-2xl z-10' id="contact-form" ref={form} onSubmit={sendEmail}>
              <div className='mb-2 space-x-10'>
                <input className=' border border-black rounded-xl shadow-lg  text-center p-2 outuline outline-black outline-offset-1' type="text" name="from_name" placeholder="name" required />
                <input className='border border-black shadow-lg rounded-xl text-center p-2 outuline outline-black outline-offset-1'type="email" name="user_email" placeholder="email" required />
              </div>
              <div className='justify-center flex mt-6'>            
                <textarea className='border border-black rounded-2xl items-center shadow-lg text-center p-2 w-96 outuline outline-black outline-offset-1' id="message" name="message" placeholder="Write me a message and let's connect!" required></textarea>
              </div>
              <div className='justify-center flex mt-6'>
                <input className='bg-lime-500 hover:bg-lime-400 button outline outline-lime-400 outline-offset-2 text-white font-bold py-2 px-4 rounded shadow-xl' type="submit" value="Send" disabled={isSubmitting} />
                {stateMessage && <p className='ml-5 outline outline-black p-2 rounded-3xl'>{stateMessage}</p>}
              </div>
            </form>
          </section>
      </section>

      <section className="z-10">
        <footer className="bg-black relative bg-opacity-50 text-white text-center p-4 z-10">
          <div className="container mx-auto z-10">
            <p className="mb-4 mt-3 z-10">&copy; 2024 David Laskowski</p>
            <div className="flex justify-center space-x-4 z-10">
              <a href="https://github.com/dlaskowski23" target="_blank" className="text-white hover:text-gray-300">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/davidlaskowski2002/" target="_blank" className="text-white hover:text-gray-300 mb-6">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Page;
