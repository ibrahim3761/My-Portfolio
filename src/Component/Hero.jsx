import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Facebook, Eye, CircleUser } from "lucide-react";
import Image from "../assets/photo_2024-10-04_18-17-17.jpg";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const resumePreviewLink =
    "https://drive.google.com/file/d/1ooovy33xBhFi0Josgh9uGe1-w1v32FpV/view?usp=sharing";
  const resumeDownloadLink =
    "https://drive.google.com/uc?export=download&id=1ooovy33xBhFi0Josgh9uGe1-w1v32FpV";

  // On click: open preview in new tab + trigger download
  const handleResumeClick = () => {
    window.open(resumePreviewLink, "_blank");

    const link = document.createElement("a");
    link.href = resumeDownloadLink;
    link.setAttribute("download", "Mohammad_Ibrahim_Abdullah_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container py-12 md:pt-30 md:pb-10 mt-10"
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 lg:gap-12 items-center">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="space-y-2 md:space-y-6 text-center lg:text-left"
        >
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Mohammad Ibrahim <br />{" "}
              <span className="text-blue-600">Abdullah</span>
            </h1>

            <h2 className="text-lg md:text-2xl font-semibold text-gray-700">
              Frontend Developer
            </h2>

            <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-3xl">
              Crafting clean, responsive web apps with React and TailwindCSS.
              I’m passionate about intuitive user experiences, high performance,
              and turning ideas into elegant, maintainable code
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4 pt-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={handleResumeClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Eye className="w-4 h-4 mr-2" />
              View & Download Resume
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("#projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Eye className="w-4 h-4 mr-2" />
              View My Work
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer inline-flex items-center justify-center bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-all duration-200 shadow hover:shadow-md"
            >
              <CircleUser className="w-4 h-4 mr-2" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-start gap-4 md:pt-4 pt-2"
          >
            <a
              href="https://github.com/ibrahim3761"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammad-ibrahim-abdullah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="https://x.com/ibrahim376146"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Twitter profile"
              className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>

            <a
              href="https://www.facebook.com/Ibrahim376146ab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Facebook profile"
              className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src={Image}
              alt="Profile photo of Mohammad Ibrahim Abdullah"
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl transition-transform duration-300 hover:scale-105 border-4 border-white"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
