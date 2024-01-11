"use client";

import NavBar from "./navbar";
import Image from "next/image";
import AboutMePic from "../app/attachments/aboutmePic.jpg";
import SBicon from "../app/attachments/snowboardingIcon.png";
import WeightsIcon from "../app/attachments/weightsicon.png";
import FishingIcon from "../app/attachments/fishingIcon.png";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import Particles from "../app/components/Particles";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Typewriter } from "react-simple-typewriter";
function Home() {
  const [text] = useTypewriter({
    words: [
      "Student.",
      "Web Developer.",
      "Software Engineer.",
      "Computer Scientist.",
    ],
    loop: true, // Set to true to loop infinitely
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <main className="bg-black">
      <NavBar />
      <section className="relative min-h-screen flex flex-col items-center justify-center py-10 px-4 bg-slate-500">
        <div className="absolute inset-0 w-full h-full">
          <Particles />
        </div>

        <div className="z-10">
          <h1 className="text-white font-semibold text-5xl ">
            David Laskowski
          </h1>
          <p className="text-white text-3xl mt-5">
            I'm a{" "}
            <span style={{ fontWeight: "bold", color: "Black" }}>{text}</span>
            <span style={{ color: "black" }}>
              <Cursor cursorStyle="|" />
            </span>
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
        <h1 className="text-white font-semibold text-3xl mt-10 z-10">
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
    </main>
  );
}

export default Home;
