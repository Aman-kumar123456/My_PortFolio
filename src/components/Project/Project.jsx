import React, { useState } from "react";
import { projects } from "../../constants";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-10 pb-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>

        <div className="w-32 h-1 bg-green-400 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
        Showcasing my work, technical skills, and hands-on experience through real-world projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-10 w-full items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 flex flex-row w-[70vw] h-[45vh]"
          >
            {/* Left Side Image */}
            <div className="w-1/2 flex flex-col">


              <div className="p-4 flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 text-base line-clamp-4">
                {project.description}
              </p>

              <div className="mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-sm font-semibold text-purple-500 rounded-full px-3 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Go Live Click Button */}
              <button className=" min-w-[80px] bg-green-500 hover:bg-green-600 text-white px-5 rounded-xl text-sm font-semibold transition-all py-0.5 duration-300">
                Go Live Click
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] max-h-[300px] object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.LiveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
