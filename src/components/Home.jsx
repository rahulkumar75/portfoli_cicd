import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"; // ">"
// import { Link } from "react-scroll";
// import {ReactTyped} from "react-typed";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center md:text-left">
            I'm a Full Stack Developer
            {/* <br/>
            <ReactTyped strings={["Full Stack Developer","Programmer"]} typeSpeed={40} backSpeed={50} loop></ReactTyped> */}
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a recent graduate from BIT Mesra and a passionate Full Stack Developer with expertise in the MERN stack.
            I enjoy creating responsive, user-friendly web applications and have experience in both front-end and back-end development.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS.
          </p>

          <div>
            <a
              href="/resume.pdf"
              download
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Download Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;




