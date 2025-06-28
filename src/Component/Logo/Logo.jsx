import React from "react";

const Logo = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "text-3xl w-10 h-10",
    md: "text-4xl w-12 h-12",
    lg: "text-5xl w-16 h-16",
    xl: "text-6xl w-20 h-20",
  };

  return (
    <div>
      <a href="#">
        <div className={`${className}`}>
          <div
            className={`${sizeClasses[size]} flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg font-bold text-white cursor-pointer hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
          >
            I
          </div>
        </div>
      </a>
    </div>
  );
};

export default Logo;
