import React from "react";
import Image from "next/image";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: '/assets/portfolio/CSSGrid.jpg',
      title: "CSSGrid",
    },
    {
      id: 2,
      src: '/assets/portfolio/toDoList.png',
    },
    {
      id: 3,
      src: '/assets/portfolio/navbar.jpg',
    },
    {
      id: 4,
      src: '/assets/portfolio/reactSmooth',
    },
    {
      id: 5,
      src: '/assets/portfolio/installNode',
    },
    {
      id: 6,
      src: '/assets/portfolio/',
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
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                title={title}
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
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
