
import React from "react";
const About = () => {
    return ( 
        <div name='about' className="w-full h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">About</h1>
            </div>
            <div>
                <p className="text-2xl mt-20 tracking-{4}  text-justify">
                    Welcome to my professional space! I’m Nikoo, a software developer with a strong foundation in embedded systems and software development. With a BSc and MSc in Electrical Engineering and experience in C, JavaScript, Python, and ARM-based microcontrollers, I specialize in designing, developing, and optimizing software solutions that drive innovation.
                    My journey began in the Electrical and Computer Engineering department, where I completed my Master’s thesis on GPS tracking and anti-spoofing techniques (MATLAB). During this time, I published three research papers and co-authored a book in the field.
                    After graduation, I started working as an embedded software developer. I focused on smart meters (water, gas, and electricity) and battery controllers for POS machines, utilizing C programming, ARM, and STM32 microcontrollers.
                    As I progressed, I found myself drawn more toward software development rather than hardware. My strong background in C programming allowed me to quickly and smoothly transition into JavaScript and its ecosystem, mastering React, Next.js, and Tailwind CSS.
                    Now, I am focused on leveraging my full-stack development skills and integrating them with AI and machine learning to build intelligent and scalable applications. I am passionate about problem-solving, optimization, and software scalability. Whether it's developing web applications or diving into machine learning, I thrive on challenges that push technological boundaries.
                    Let’s connect and build something impactful! 🚀

                </p>
             
            </div>
            </div>
        </div>
     );
}
 
export default About;