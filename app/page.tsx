import NavBar from "./navbar";

import Image from "next/image";
import AboutMePic from "../app/attachments/AboutMe/aboutMePic.jpg";
import SBicon from "../app/attachments/AboutMe/snowboard.png";
import WeightsIcon from "../app/attachments/AboutMe/weight-lifting.png";
import FishingIcon from "../app/attachments/AboutMe/fishing.png";

import PythonIcon from "../app/attachments/SkillsIcons/Languages/python.png";
import CIcon from "../app/attachments/SkillsIcons/Languages/C.png";
import JavaIcon from "../app/attachments/SkillsIcons/Languages/Java.png";
import CPPIcon from "../app/attachments/SkillsIcons/Languages/cpp.png";
import CSSIcon from "../app/attachments/SkillsIcons/Languages/CSS3.png";
import HTMLIcon from "../app/attachments/SkillsIcons/Languages/HTML5.png";
import JSIcon from "../app/attachments/SkillsIcons/Languages/js.png";
import SQLIcon from "../app/attachments/SkillsIcons/Languages/sql.png";
import BashIcon from "../app/attachments/SkillsIcons/Languages/bash.png";

import TypeScriptIcon from "../app/attachments/SkillsIcons/FrameWorks/typescript.png";
import TailwindIcon from "../app/attachments/SkillsIcons/FrameWorks/TailwindCSS.png";
import ReactIcon from "../app/attachments/SkillsIcons/FrameWorks/react.png";
import BootStrapIcon from "../app/attachments/SkillsIcons/FrameWorks/bootstrap.png";
import NextJsIcon from "../app/attachments/SkillsIcons/FrameWorks/Next.js.png";
import PandasIcon from "../app/attachments/SkillsIcons/FrameWorks/pandas.png";
import MySQLIcon from "../app/attachments/SkillsIcons/FrameWorks/mySQL.png";
import PlotyIcon from "../app/attachments/SkillsIcons/FrameWorks/Matplotlib.png";

import GitIcon from "../app/attachments/SkillsIcons/DevTools/Git.png";
import GitHubIcon from "../app/attachments/SkillsIcons/DevTools/GitHub.png";
import JupyterIcon from "../app/attachments/SkillsIcons/DevTools/Jupyter.png";
import LinuxIcon from "../app/attachments/SkillsIcons/DevTools/Linux.png";
import VercelIcon from "../app/attachments/SkillsIcons/DevTools/Vercel.png";
import VSCodeIcon from "../app/attachments/SkillsIcons/DevTools/VisualStudioCode.png";

import SpaceCoordPic from "../app/attachments/ProjectPics/SpaceCoordPic.png";
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

function Home() {
  return (
    <main className="bg-black">
      <NavBar />
      <section
        className="relative min-h-screen flex flex-col items-center justify-center py-10 px-4 "
        id="home"
      >
        <div className="absolute inset-0 w-full h-full">
          <Particles />
        </div>

        <div className="z-10">
          <h1 className="text-white font-semibold text-5xl ">
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
            <a href="https://drive.google.com/file/d/13fn8-feMC8p25veWxYU0yzVqu3SVUvAN/view?usp=drive_link" target="_blank">
              <CgFileDocument className="text-white hover:text-gray-300 hover:scale-110 transition-transform" />
            </a>

          </div>
        </div>
      </section>

      <section
        className="flex flex-col items-center justify-center py-10 px-4"
        id="aboutme"
      >
        <h1 className="text-white font-bold text-5xl mt-10 z-10">
          About Me
        </h1>
        <h2 className="text-white font-semibold text-3xl mb-10 z-10">~</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto p-4 z-10">
          <div className="mx-auto">
            <Image
              src={AboutMePic}
              alt="David Laskowski"
              className=" border rounded-3xl"
              width={420}

            />
          </div>
          <div className="flex flex-1 flex-col items-center">
            <p className="text-white text-2xl text-center ml-6 mb-6">
              Hi! I'm David Laskowski. I'm currently an Undergraduate Computer
              Science Student at the New Jersey Institute of Technology. I will
              be graduating in May 2025 with a Bachelor of Science in Computer
              Science. I have had a passion for problem-solving and creating,
              which I plan to pursue as a career in Software Engineering or
              Cyber Security. Some of my hobbies include snowboarding, fitness,
              and fishing.
            </p>
            <div className="flex justify-center space-x-5">
              <Image
                src={SBicon}
                alt="SnowBoardIcon"
                className="bg-white p-2 rounded-full shadow-xl hover:scale-110 transition-transform"
                width={125}
              />
              <Image
                src={WeightsIcon}
                alt="WeightsIcon"
                className="hover:scale-110 transition-transform bg-white p-2 rounded-full shadow-xl"
                width={125}
              />
              <Image
                src={FishingIcon}
                alt="WeightsIcon"
                className="hover:scale-110 transition-transform bg-white p-2 rounded-full shadow-xl"
                width={125}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col items-center justify-center mt-52 px-4"
        id="skills"
      >
        <h1 className="text-white font-bold text-5xl mt-10 z-10">Skills</h1>
        <h2 className="text-white font-semibold text-3xl mb-10 z-10">~</h2>
        <h3 className="text-white font-semibold text-3xl mt-10 z-10">Languages</h3>
        
        <div className="grid grid-cols-3 md:grid-cols-3 gap-10 mx-auto p-4 z-10 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={PythonIcon} alt="Python Icon" />
            <h1 className="text-xl font-semibold mt-2 text-center">Python</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={JavaIcon} alt="Java Icon" width={128}/>
            <h1 className="text-xl font-semibold mt-2 text-center">Java</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={CIcon} alt="C Icon" width={128}/>
            <h1 className="text-xl font-semibold mt-2 text-center">C</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={CPPIcon} alt="CPP Icon" />
            <h1 className="text-xl font-semibold mt-2 text-center">C++</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={HTMLIcon} alt="HTML Icon" width={128}/>
            <h1 className="text-xl font-semibold mt-2 text-center">HTML</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={CSSIcon} alt="CSS Icon" width={128}/>
            <h1 className="text-xl font-semibold mt-2 text-center">CSS</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={JSIcon} alt="JS Icon" />
            <h1 className="text-xl font-semibold mt-2 text-center">JavaScript</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={SQLIcon} width={128} alt="SQL Icon" />
            <h1 className="text-xl font-semibold mt-2 text-center">SQL</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={BashIcon} width={128} alt="Bash Icon" />
            <h1 className="text-xl font-semibold mt-2 text-center">Bash</h1>
          </div>
        </div>
        <h3 className="text-white font-semibold text-3xl mt-10 z-10">
          Libraries & Frameworks
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 mx-auto p-4 z-10 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={TypeScriptIcon} alt="TypeScript Icon" className="fill-current" />
            <h1 className="text-xl font-semibold mt-2 text-center">TypeScript</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={TailwindIcon} alt="MySQL Icon" className="fill-current" width={128} />
            <h1 className="text-xl font-semibold mt-2 text-center">Tailwind CSS</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={ReactIcon} alt="React Icon" className="fill-current" width={128} />
            <h1 className="text-xl font-semibold mt-2 text-center">ReactJS</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={BootStrapIcon}  alt="BootStrap Icon" className="fill-current" width={128} />
            <h1 className="text-xl font-semibold mt-2 text-center">BootStrap</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={NextJsIcon} alt="NextJS Icon" className="fill-current" width={128} />
            <h1 className="text-xl font-semibold mt-2 text-center">NextJS</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={PandasIcon} alt="Pandas Icon" className="fill-current" width={128} />
            <h1 className="text-xl font-semibold mt-2 text-center">Pandas</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={PlotyIcon} alt="Matplotlib" className="fill-current" width={128} />
            <h1 className="text-xl font-semibold mt-2 text-center">Matplotlib</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={MySQLIcon} alt="MySQL Icon" className="fill-current" width={128} />
            <h1 className="text-xl font-semibold mt-2 text-center">mySQL</h1>
          </div>
        </div>
        <h3 className="text-white font-semibold text-3xl mt-10 z-10">
          Developer Tools
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 mx-auto p-4 z-10 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={GitHubIcon} alt="GitHub" className="fill-current" width={128}/>
            <h1 className="text-xl font-semibold mt-2 text-center">GitHub</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={GitIcon} alt="Git" className="fill-current" width={128}/>
            <h1 className="text-xl font-semibold mt-2 text-center">Git</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={JupyterIcon} alt="Jupyter" className="fill-current" width={128}/>
            <h1 className="text-xl font-semibold mt-2 text-center">Jupyter</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={LinuxIcon} alt="Linux" className="fill-current" width={128}/>
            <h1 className="text-xl font-semibold mt-2 text-center">Linux</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={VSCodeIcon} alt="VScode" className="fill-current" width={128} />
            <h1 className="text-xl font-semibold mt-2 text-center">VScode</h1>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image src={VercelIcon} alt="Vercel Icon" className="fill-current" width={128} />
            <h1 className="text-xl font-semibold mt-2 text-center">Vercel</h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-52 px-4" id="projects">

        <div className="flex flex-col items-center justify-center py-10 px-4">
          <h1 className="text-white font-bold text-5xl mt-10 mb-6 text-center z-10">Projects</h1>
          <h2 className="text-white font-semibold text-3xl mb-3 z-10">~</h2>
        </div>

        <div className=" bg-white rounded-2xl grid grid-cols md:grid-cols-2 gap-10 max-w-6xl mx-auto p-4 z-10 shadow-xl">
          <div className="mx-auto">
            <Image
              src={SpaceCoordPic}
              alt="David Laskowski"
              className=" border rounded-2xl"
              width={500}
            />
          </div>
          <div className="flex flex-1 flex-col items-center">
            <h1 className="mb-2 text-2xl font-bold">Space Satellite Coordinator </h1>
            <p className=" text-xl text-center mb-9">
              At NJIT's 2023 GirlHacks Hackathon, our team won the "Best Use of StreamLit" award,
              winning amongst 120+ participants with our web app aimed to provide real-time satellite 
              information and solar system insights. It allows users to locate nearby satellites and 
              explore detailed information about the planets in our solar system. Built using Python 
              with Streamlit, it combines the functionality of APIs (StreamLit, OpenAI GPT), real-time data, and AI-driven 
              responses to user queries about space.
            </p>
            <div className="flex justify-center space-x-5">
              <button className="bg-slate-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                <a href="https://devpost.com/software/solar-system-satnav-explorer" target="_blank">DevPost</a>
              </button>
              <button className="bg-slate-500 button text-white font-bold py-2 px-4 rounded">
                <a href="https://github.com/dlaskowski23/SpaceSatelliteCoordinator/tree/main" target="_blank">GitHub</a>
              </button>
              <button className="hover:scale-110 transition-transform border bg-yellow-200 font-bold py-2 px-4 rounded">
                <a>Winner!</a>
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-2xl grid grid-cols md:grid-cols-2 gap-10 max-w-6xl mx-auto p-4 mt-10 z-10 shadow-xl">
          <div className="mx-auto">
            <Image
              src={GlobalTempPic}
              alt="globalTempPic"
              className=" border rounded-2xl"
              width={550}
            />
          </div>
          <div className="flex flex-1 flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">Global Temperature Analysis</h1>
            <p className="text-black text-xl text-center  mb-6 md:mb-12">
              My group and I completed our data science project analyzing the recorded global temperature dataset from UC Berkeley.
              The aim is to uncover trends and patterns in global temperatures over time using advanced 
              statistical and machine learning techniques were simple linear regression and Random Forest algorithm.
              We used Jupyter Notebooks' executing cells in sequence and Python with the following libraries for the algorithms and visualization;
              pandas, numpy, sklearn, matplotlib.
            </p>
            <div className="flex justify-center space-x-5">
              <button className="bg-slate-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                <a href="https://github.com/dlaskowski23/GlobalTemperatureAnalysis" target="_blank">GitHub</a>
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-2xl grid grid-cols md:grid-cols-2 gap-10 max-w-6xl mx-auto p-4 mt-10 z-10 shadow-xl">
          <div className="mx-auto">
            <Image
              src={LexicalAnalyzerPic}
              alt="globalTempPic"
              className=" border rounded-2xl"
              width={550}
            />
          </div>
          <div className="flex flex-1 flex-col items-center">
            <h1 className="text-2xl font-bold mb-1">Lexical Analyzer</h1>
            <p className="text-black text-md text-center  mb-2 md:mb-2">
              In my Lexical Analyzer project, crafted in C, the first component 
              meticulously reads text to identify tokens, utilizing the context 
              provided by adjacent tokens to detect and describe errors. Designed 
              to comprehend an untyped language, it handles strings, integers,
              real numbers, comments, and basic conditional constructs. The second layer, 
              a recursive descent parser refines this process by cross-referencing tokens 
              with grammatical structures to pinpoint syntax errors. Finally, the interpreter 
              unifies these functionalities, executing code while simultaneously verifying 
              syntactic correctness, thereby elevating the system from mere analysis to 
              execution with error-checking.
            </p>
            <div className="flex justify-center space-x-5">
              <button className="bg-slate-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                <a href="https://github.com/dlaskowski23/LexicalAnalyzer" target="_blank">GitHub</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-52 px-4" id="education">
        <h1 className="text-white font-bold text-5xl mt-10 z-10 text-center">Experience & Education</h1>
        <h2 className="text-white font-bold text-3xl mb-10 z-10">~</h2>
        <p className="z-10 text-white">
           Please view my resume!
        </p>
        <div className="mt-6 z-10 text-white space-x-5">
          <button className="mt-6 rounded-2xl border py-1 px-4 hover:scale-110 transition-transform">
            <a href="https://drive.google.com/file/d/13fn8-feMC8p25veWxYU0yzVqu3SVUvAN/view?usp=drive_link" target="_blank">VIEW</a>
          </button>
          <button className="mt-6 rounded-2xl border py-1 px-4  hover:scale-110 transition-transform">
            <a href="https://drive.google.com/file/d/13fn8-feMC8p25veWxYU0yzVqu3SVUvAN/view?usp=drive_link" target="_blank">DOWNLOAD</a>
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-52 mb-52" id="contact">
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

      <section className="z-10">
        <footer className="bg-gray-400 relative bg-opacity-75 text-white text-center p-4 z-10">
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

    </main>
  );
}

export default Home;
