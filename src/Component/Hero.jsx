import React from "react";
import { Github, Linkedin, Twitter, Facebook, Download } from "lucide-react";
import Image from "../assets/photo_2024-10-04_18-17-17.jpg";

// Button Component
const Button = ({
  children,
  onClick,
  size = "md",
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Hero = () => {
  const handleResumeDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section className="container py-12 md:pt-24 md:pb-10 md:mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Mohammad Ibrahim <br /> <span className="text-blue-600">Abdullah</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              Frontend Developer
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              Building clean, responsive, and scalable web applications with
              React, TailwindCSS, and modern JavaScript frameworks. Passionate
              about creating intuitive user interfaces, optimizing performance,
              and bringing ideas to life through elegant, maintainable code.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Button
              onClick={handleResumeDownload}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Hardcoded Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 pt-4">
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
              href="https://www.linkedin.com/in/your-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="https://twitter.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Twitter profile"
              className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>

            <a
              href="https://facebook.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Facebook profile"
              className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src={Image}
              alt="Profile photo of Mohammad Ibrahim Abdullah"
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl transition-transform duration-300 hover:scale-105 border-4 border-white"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
