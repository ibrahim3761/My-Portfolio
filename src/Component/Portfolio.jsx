import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import portfolio from "../assets/photo_2024-10-04_18-17-17.jpg";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Portfolio = () => {
  
  return (
    <div className="font-sans px-2 md:px-16 ">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-12 text-center md:text-left gap-6">
        {/* Left side: Text */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-5xl text-gray-700 font-bold">
            Mohammad Ibrahim <span className="text-blue-600">Abdullah</span>
          </h1>
          <h2 className="text-2xl text-gray-700 font-semibold">
            Frontend Developer
          </h2>
          <p className="text-gray-500">
            Building clean, responsive, and scalable web applications with
            React, TailwindCSS, and modern JavaScript frameworks. Passionate
            about creating intuitive user interfaces, optimizing performance,
            and bringing ideas to life through elegant, maintainable code.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Download Resume
          </button>
          <div className="flex justify-center md:justify-start mt-6 space-x-4 text-2xl text-gray-600">
            <a
              aria-label="GitHub"
              href="https://github.com/ibrahim3761"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/your-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              aria-label="Twitter"
              href="https://twitter.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              aria-label="Facebook"
              href="https://facebook.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right side: Profile Image */}
        <div className="flex justify-center">
          <img
            src={portfolio}
            alt="Profile photo of Mohammad Ibrahim Abdullah"
            className="rounded-full w-60 md:w-96 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

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
