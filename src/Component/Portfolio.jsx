import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Hero from "./Hero";


const Portfolio = () => {
  
  return (
    <div className="font-sans px-2 md:px-16 ">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Hero Section */}
      <Hero></Hero>

      {/* About Me */}
      <section id="about" className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-blue-600">
          About Me
        </h3>
        <p className="text-gray-600">
          I’m currently pursuing a BSc in Computer Science and Engineering at
          International Islamic University Chittagong (2023–present). My journey
          into programming began with a strong curiosity about how the internet
          and web technologies work, which naturally led me to specialize in
          frontend development. I’m passionate about crafting visually engaging,
          responsive, and user-friendly web applications using modern tools like
          React and TailwindCSS. <br />
          <br />
          Beyond the screen, I find inspiration in nature and recharge through
          playing football—activities that spark fresh ideas and creativity in
          my development work. I'm always eager to learn, grow, and build
          projects that make a difference.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mt-12">
        <Skills></Skills>
      </section>

      {/* education */}
      <section id="education" className="mt-16 w-full">
        <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center gap-2">
          Educational Qualification
        </h3>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md p-6 md:p-10 w-full">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Left Column: Optional Logo */}
            <div className="hidden md:flex justify-center">
              <img
                src="https://images.seeklogo.com/logo-png/42/1/international-islamic-university-chittagong-logo-png_seeklogo-425751.png"
                alt="IIUC Logo"
                className="w-36 h-36 rounded-full border border-blue-200 shadow"
              />
            </div>

            {/* Right Column: Education Details */}
            <div className="md:col-span-2 space-y-2">
              <h4 className="text-2xl font-semibold text-gray-800">
                B.Sc. in Computer Science and Engineering
              </h4>
              <p className="text-gray-700 text-lg">
                International Islamic University Chittagong
              </p>
              <p className="text-gray-600">2023 - Present</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Currently pursuing my undergraduate studies focusing on computer
                science fundamentals, data structures, algorithms, and practical
                web development using React, JavaScript, and modern frameworks.
                Passionate about building impactful projects while maintaining
                academic excellence and contributing to open-source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-12">
       <Projects></Projects>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-12 mb-12">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Portfolio;
