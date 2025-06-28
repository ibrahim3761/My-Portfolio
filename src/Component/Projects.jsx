import React, { useState } from "react";
import artifact from '../assets/artifact-vault-1.jpg';
import plant from '../assets/plant-care.jpg';
import tech from '../assets/tech-deal.jpg'

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
      tags: ["React", "TailwindCSS", "Firebase"],
      description:
        "A digital collection management platform allowing users to upload, organize, and share digital artifacts efficiently.",
      challenges:
        "Integrating Firebase for secure user management and scalable storage structure.",
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
      tags: ["React", "TailwindCSS", "Firebase"],
      description:
        "An app for tracking plant watering schedules and care needs with reminders.",
      challenges:
        "Setting up precise reminder systems and user data management.",
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
      tags: ["React", "TailwindCSS"],
      description:
        "A clean landing site showcasing tech deals in an organized UI.",
      challenges:
        "Maintaining responsiveness across all device sizes with dynamic content.",
      improvements:
        "Add user authentication and personalized deal notifications.",
    },
  ];
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center gap-2">
        Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <img
              src={project.image}
              alt={project.name}
              className="object-contain mb-4"
            />
            <h4 className="text-xl font-semibold text-center text-gray-800 mb-2">
              {project.name}
            </h4>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-auto">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900 text-sm"
              >
                Code
              </a>
              <button
                onClick={() => setShowDetails(idx)}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 text-sm"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showDetails !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-xl relative">
            <button
              onClick={() => setShowDetails(null)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>

            <h4 className="text-2xl font-bold text-blue-700 mb-3">
              {projects[showDetails].name}
            </h4>

            <div className="flex flex-wrap gap-2 mb-4">
              {projects[showDetails].tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-800 mb-2">
              <span className="font-semibold">Stack:</span>{" "}
              {projects[showDetails].stack}
            </p>
            <p className="text-gray-700 mb-2">
              {projects[showDetails].description}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Challenges:</span>{" "}
              {projects[showDetails].challenges}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Future Improvements:</span>{" "}
              {projects[showDetails].improvements}
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href={projects[showDetails].live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Live
              </a>
              <a
                href={projects[showDetails].github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
