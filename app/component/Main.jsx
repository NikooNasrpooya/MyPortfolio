import React from "react";

import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div name="home" className="h-screen w-full m-10">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full  md:w-2/3 text-justify">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Hello, I'm Nikoo 😊
          </h2>
          <p className=" py-4 w-full text-2xl">
          I'm a Software Developer based in Toronto, Canada, specializing in building web applications with React, Next.js, Tailwind CSS, and Node.js. I’m passionate about integrating generative AI into my work, exploring innovative ways to enhance web experiences and create cutting-edge solutions.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer items-center"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 p">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="../assets/profile.jpg"
            alt="my profile "
            className="rounded-2xl mx-auto w-2/3 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
