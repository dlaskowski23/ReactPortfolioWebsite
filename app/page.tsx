import NavBar from "./navbar";

import Image from "next/image";
import AboutMePic from "../app/attachments/aboutmePic.jpg";
import SBicon from "../app/attachments/snowboardingIcon.png";
import WeightsIcon from "../app/attachments/weightsicon.png";
import FishingIcon from "../app/attachments/fishingIcon.png";

import PythonIcon from "../app/attachments/SkillsIcons/python.png";
import CIcon from "../app/attachments/SkillsIcons/c.png";
import JavaIcon from "../app/attachments/SkillsIcons/java.png";
import CPPIcon from "../app/attachments/SkillsIcons/cpp.png";
import CSSIcon from "../app/attachments/SkillsIcons/css.png";
import HTMLIcon from "../app/attachments/SkillsIcons/html.png";
import JSIcon from "../app/attachments/SkillsIcons/js.png";
import SQLIcon from "../app/attachments/SkillsIcons/sql.png";

import TypeScriptIcon from "../app/attachments/SkillsIcons/typescript.png";

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

import Particles from "../app/components/Particles";
import dynamic from 'next/dynamic'

const AutoType = dynamic(() => import('../app/components/autoType'), {
  ssr: false,
});

function Home() {
  return (
    <main className="bg-black">
      <NavBar />
      <section className="relative min-h-screen flex flex-col items-center justify-center py-10 px-4 ">
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
            <a href="https://www.linkedin.com/in/davidlaskowski2002/">
              <AiFillLinkedin className="text-white hover:text-gray-300 hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/dlaskowski23">
              <AiFillGithub className="text-white hover:text-gray-300 hover:scale-110 transition-transform" />
            </a>
            <a href="portfoliowebsite\app\attachments">
              <CgFileDocument className="text-white hover:text-gray-300 hover:scale-110 transition-transform" />
            </a>
            {/*Problem with resume Link up above*/}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-white font-semibold text-5xl mt-10 z-10">
          About Me
        </h1>
        <h2 className="text-white font-semibold text-3xl mb-10 z-10">______</h2>
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
              be graduating in May 2025 with a Bachelors of Science in Computer
              Science. I have had a passion for problem-solving and creating,
              which I plan to pursue that as a career in Software Engineering or
              Cyber Security. Some of my hobbies include snowboarding, fitness,
              and fishing.
            </p>
            <div className="flex justify-center space-x-5">
              <Image
                src={SBicon}
                alt="SnowBoardIcon"
                className="hover:scale-110 transition-transform"
                width={125}
              />
              <Image
                src={WeightsIcon}
                alt="WeightsIcon"
                className="hover:scale-110 transition-transform"
                width={125}
              />
              <Image
                src={FishingIcon}
                alt="WeightsIcon"
                className="hover:scale-110 transition-transform"
                width={125}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-white font-semibold text-5xl mt-10 z-10">Skills</h1>
        <h2 className="text-white font-semibold text-3xl mb-10 z-10">___</h2>
        <h3 className="text-white font-semibold text-3xl mt-10 z-10">
          Languages:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-auto p-4 z-10 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image
              src={PythonIcon}
              alt="Python Icon"
              className="fill-current"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={JavaIcon} alt="Java Icon" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={CIcon} alt="Java Icon" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={CPPIcon} alt="Java Icon" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={HTMLIcon} alt="Java Icon" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={CSSIcon} alt="Java Icon" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={JSIcon} alt="Java Icon" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform">
            <Image src={SQLIcon} width={128} alt="Java Icon" />
          </div>
        </div>
        <h3 className="text-white font-semibold text-3xl mt-10 z-10">
          Libraries & Frameworks:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto p-4 z-10 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image
              src={TypeScriptIcon}
              alt="Python Icon"
              className="fill-current"
            />
          </div>
        </div>
        <h3 className="text-white font-semibold text-3xl mt-10 z-10">
          Technologies:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto p-4 z-10 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-transform">
            <Image
              src={PythonIcon}
              alt="Python Icon"
              className="fill-current"
            />
          </div>
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-white font-semibold text-5xl mt-10 z-10">
          Projects
        </h1>
      </section>
    </main>
  );
}

export default Home;
