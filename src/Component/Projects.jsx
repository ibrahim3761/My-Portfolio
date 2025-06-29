import React, { useState } from "react";
import { ExternalLink, Github, X, ListCollapse } from "lucide-react";
import artifact from "../assets/artifact-vault-1.jpg";
import plant from "../assets/plant-care.jpg";
import tech from "../assets/tech-deal.jpg";

const Projects = () => {
  const [showDetails, setShowDetails] = useState(null);

  const projects = [
    {
      id: "artifact-vault",
      name: "Artifact Vault",
      image: artifact,
      live: "https://artifact-vault-app.web.app/",
      github: "https://github.com/ibrahim3761/Artifact-vault-client",
      stack: "React, TailwindCSS, Firebase",
      tags: [
        "React",
        "TailwindCSS",
        "Firebase",
        "JWT",
        "Node",
        "Express",
        "MongoDB",
      ],
      description:
        "A digital collection management platform allowing users to upload, organize, and share digital artifacts efficiently.",
      challenges:
        "Integrating JWT with Firebase token for secure user management and scalable storage structure.",
      improvements:
        "Add AI-based artifact classification and collaborative vault sharing features.",
    },
    {
      id: "plant-care-tracker",
      name: "Plant Care Tracker",
      image: plant,
      live: "https://plant-care-app-d7978.web.app/",
      github: "https://github.com/ibrahim3761/Plant-Care-Client",
      stack: "React, TailwindCSS, Firebase",
      tags: ["React", "TailwindCSS", "Firebase", "Node", "Express", "MongoDB"],
      description:
        "An app for tracking plant watering schedules and care needs with reminders.",
      challenges:
        "Integrating a backend server with Node, Express, and MongoDB for better data management was challenging as it was my first time working with these technologies.",
      improvements:
        "Future integration with IoT sensors for automated watering reminders.",
    },
    {
      id: "tech-deal",
      name: "Tech Deal",
      image: tech,
      live: "https://tech-deal.netlify.app/",
      github: "https://github.com/ibrahim3761/Tech-Deal",
      stack: "React, TailwindCSS",
      tags: ["React", "TailwindCSS", "Firebase"],
      description:
        "A clean landing site showcasing tech deals in an organized UI.",
      challenges:
        "Integrating Firebase for secure user management and scalable storage structure.",
      improvements:
        "Future integration of server based sytem for data mangement.",
    },
  ];

  return (
    <div>
      <div>
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4 flex items-center justify-center md:justify-start gap-2">
            Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:mx-0">
            Here are some of the projects I've built, showcasing my skills in
            modern web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="p-1 w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {project.name}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-gray-300">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Description Preview */}
                <p className="text-gray-600 text-sm text-center mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-center gap-3 mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium border-2 border-blue-600"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium border-2 border-gray-800"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <button
                    onClick={() => setShowDetails(idx)}
                    className="flex items-center gap-1 justify-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium border-2 border-gray-300 cursor-pointer"
                  >
                    <ListCollapse className="w-4 h-4" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showDetails !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setShowDetails(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {projects[showDetails].name}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[showDetails].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Details */}
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Tech Stack
                  </h4>
                  <p className="text-gray-700">{projects[showDetails].stack}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Description
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {projects[showDetails].description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Challenges
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {projects[showDetails].challenges}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Future Improvements
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {projects[showDetails].improvements}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={projects[showDetails].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4 cursor-pointer" />
                  View Live Demo
                </a>
                <a
                  href={projects[showDetails].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium"
                >
                  <Github className="w-4 h-4 cursor-pointer" />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
