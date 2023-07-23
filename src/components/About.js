// src/components/About.js
import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-gray-800 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-gray-900 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-900">
                About Me
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                My name is Dorian Walker. 
              </p>
            </div>
            <div>
              <p>
                {" "}
                I am a Software developer with educational and work experience in building responsive and
                scalable Web applications. In addition to my skills, I have a background in 
                computer science and technical support. Understanding the importance of teamwork and willingness to
                learn new technologies are some of my strengths. I am a self-motivated individual who takes pride in 
                my work and strives to be the best at what I do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;