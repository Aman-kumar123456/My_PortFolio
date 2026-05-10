import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-6 px-[6vw] md:px-[7vw] lg:px-[10vw] bg-[#0e030d]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Name / Logo */}
        <h2 className="text-lg md:text-xl font-semibold text-white text-center">
          Aman Kumar
        </h2>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-4">
          {[
            {icon: <FaGithub/>, link:"https://github.com/Aman-kumar123456"},
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aman-kumar-4aaa832b3" },
            { icon: <FaInstagram />, link: "" },
            { icon: <FaFacebook />, link: "" },
            { icon: <FaTwitter />, link: "" },
                       
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-green-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © 2026 Aman Kumar, All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer;