import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import myprofile from "../../assets/myprofile.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-6 px-[6vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Aman Kumar
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-green-400 leading-tight">
            <span className="text-white">I am a </span>

            <div>
              <TypeAnimation
                sequence={[
                  "Full-Stack developer",
                  1000,
                  "Mern developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
          </h3>

          {/* About Me Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 mt-6 leading-relaxed">
            I am a full-stack developer passionate about building scalable web
            applications. Skilled in both front-end and back-end development, I
            specialize in the MERN stack and modern technologies to create
            seamless user experiences and efficient solutions.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1yb43kvyRQex2xsWdhGtDREDWVmXD0-79/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-green-400 inline-block text-white py-3 px-6 sm:px-8 rounded-full mt-4 text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            MY RESUME
          </a>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-32 h-32 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] flex justify-center items-center"
          >
            <img
              src={myprofile}
              alt="myprofile"
              className="w-full h-full object-cover rounded-full border-4 border-green-700"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
