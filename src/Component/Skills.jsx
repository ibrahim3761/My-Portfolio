import React from "react";

const Skills = () => {
  const frontend = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "TailwindCSS",
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Firebase",
      logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
  ];

  const backend = [
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

  const tools = [
    {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  return (
    <div>
      <h3 className="text-3xl font-bold mb-6 text-center md:text-left text-blue-600">
        Skills
      </h3>

      {/* Frontend Skills */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4 text-gray-700">Frontend</h4>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {frontend.map((skill, idx) => (
            <div
              key={idx}
              className="bg-blue-50 p-4 rounded text-center shadow hover:shadow-lg hover:bg-blue-100 cursor-pointer transition-shadow duration-300"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-10 h-10 mx-auto mb-2"
              />
              <p className="text-sm font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Skills */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4 text-gray-700">Backend</h4>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {backend.map((skill, idx) => (
            <div
              key={idx}
              className="bg-green-50 p-4 rounded text-center shadow hover:shadow-lg hover:bg-green-100 cursor-pointer transition-shadow duration-300"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-10 h-10 mx-auto mb-2"
              />
              <p className="text-sm font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h4 className="text-xl font-semibold mb-4 text-gray-700">Tools</h4>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-4 rounded text-center shadow hover:shadow-lg hover:bg-gray-100 cursor-pointer transition-shadow duration-300"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-10 h-10 mx-auto mb-2"
              />
              <p className="text-sm font-medium text-gray-700">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
