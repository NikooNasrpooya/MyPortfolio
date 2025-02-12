import React from "react";
import Image from "next/image";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: './assets/portfolio/toDoList.png',
      title: "ToDoList",
      demoLink: "https://nikoonasrpooya.github.io/To-Do-List/",
      codeLink: "https://github.com/NikooNasrpooya/To-Do-List",
    },
    {
      id: 2,
      src: './assets/portfolio/drumkit.png',
      title: "Drum Kits",
      demoLink: "https://nikoonasrpooya.github.io/DrumKits/",
      codeLink: "https://github.com/NikooNasrpooya/DrumKits",
    },
    {
      id: 3,
      src: './assets/portfolio/shop.png',
      title: "Shop",
      demoLink: "https://nikoonasrpooya.github.io/shop/",
      codeLink: "https://github.com/NikooNasrpooya/shop",
    },
    {
      id: 4,
      src: './assets/portfolio/first-portfolio-website.png',
      demoLink: "https://nikoo-nasrpooya.github.io/portfolio-website/",
      codeLink: "https://github.com/NikooNasrpooya/First-Portfolio-Website",
    },
    {
      id: 5,
      src: './assets/portfolio/cardcomponent.png',
      demoLink: "https://github.com/NikooNasrpooya/preview-card-component-myCode/blob/main/README.md",
      codeLink: "https://github.com/NikooNasrpooya/preview-card-component-myCode",
    },
    {
      id: 6,
      src: './assets/portfolio/',
      demoLink: "",
      codeLink: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" w-full  md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title ,  demoLink, codeLink}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md h-4/5 duration-200 hover:scale-105"
                title={title}
              />
              <div className="flex items-center justify-center">
                <button 
                onClick={() => window.open(demoLink, "_blank")}
                className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button 
                onClick={() => window.open(codeLink, "_blank")}
                className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
