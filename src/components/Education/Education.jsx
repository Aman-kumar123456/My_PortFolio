import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-[6vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">EDUCATION</h2>

        <div className="w-24 md:w-32 h-1 bg-green-400 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-sm md:text-lg font-semibold leading-7 max-w-4xl mx-auto">
          My academic journey has helped me build strong technical knowledge,
          problem-solving abilities, and practical development skills. Here are
          the details of my educational background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Center Line */}
        <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-white"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex items-center w-full mb-12 md:mb-16 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } justify-center`}
          >
            {/* Timeline Dot */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-14 h-14 rounded-full border-4 border-[#45ec77] bg-gray-400 flex items-center justify-center overflow-hidden">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Education Card */}
            <div
              className={`w-full sm:w-[90%] md:w-[45%] p-5 md:p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              transition-transform duration-300 hover:scale-105
              ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
            >
              {/* Top Section */}
              <div className="flex items-center gap-4">
                {/* School Image */}
                <div className="w-16 h-16 md:w-20 md:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree Info */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>

                  <h4 className="text-sm text-gray-300">{edu.school}</h4>

                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-4 text-gray-400 font-bold text-sm md:text-base">
                Grade: {edu.grade}
              </p>

              {/* Description */}
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-7">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
