import React from "react";

import Image from "next/image";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: './assets/html.png',
      title: "HTML",
    },
    {
      id: 2,
      src: './assets/css.png',
      title: "CSS",
    },
    {
      id: 3,
      src: './assets/javascript.png',
      title: "JavaScript",
    },
    {
      id: 4,
      src: './assets/react.png',
      title: "React",
    },
    {
      id: 5,
      src: './assets/tailwind.png',
      title: "Tailwind",
    },
    {
      id: 6,
      src: './assets/nextjs.png',
      title: "Next JS",
    },
    {
      id: 7,
      src: './assets/graphql.png',
      title: "GraphQL",
    },
    {
      id: 8,
      src: './assets/github.png',
      title: "GitHub",
    },
    {
      id: 9,
      src: './assets/bootstrap.png',
      title: "Bootstrap",
    },
    {
      id: 10,
      src: './assets/git.png',
      title: "Git",
    },
    {
      id: 11,
      src: './assets/visualstudio.png',
      title: "Visual Studio",
    },
    {
      id: 12,
      src: './assets/python.png',
      title: "Python",
    },
    {
      id: 13,
      src: './assets/node.png',
      title: "Node Js",
    },
    {
      id: 14,
      src: './assets/c-.png',
      title: "C Programming",
    },
    {
      id: 15,
      src: './assets/Docker.png',
      title: "Docker",
    },
    {
      id: 16,
      src: './assets/mysql.png',
      title: "MySQL",
    },
    
  ];

  return (
    <div
      name="Skills"
      className=" w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-6 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="hover:scale-125 duration-500 py-2 rounded-lg"
            >
              <Image src={src} alt="" width={80} height={80} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
