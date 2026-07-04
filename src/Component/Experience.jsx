import React from "react";
import { motion } from "motion/react";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Quad Theory Ltd.",
      location: "Banasree, Dhaka",
      duration: "October 2025 - February 2026",
      logo: "/public/quad.jfif",
      points: [
        "Implemented web prototypes and applications based on client requirements.",
        "Configured and customized software programs to meet project specifications.",
        "Maintained and supported live websites and systems for ongoing client needs.",
        "Analyzed client needs and translated them into functional web solutions.",
        "Stayed current with the latest web design trends to keep deliverables modern and competitive.",
      ],
    },
  ];

  return (
    <div>
      <h3 className="text-3xl font-bold mb-6 text-center md:text-left text-blue-600 flex items-center gap-2 justify-center md:justify-start">
        Experience
      </h3>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md p-6 md:p-10 w-full"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {/* Left Column: Logo */}
              <div className="hidden md:flex justify-center items-center">
                <div className="w-36 h-36 rounded-full border border-blue-200 shadow bg-white flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="max-w-full max-h-full object-contain mx-auto my-auto"
                  />
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="md:col-span-2 space-y-2">
                <h4 className="text-2xl font-semibold text-gray-800">
                  {exp.role}
                </h4>
                <p className="text-gray-700 text-lg">{exp.company}</p>

                <div className="flex flex-wrap gap-x-6 gap-y-1 text-gray-600 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>

                <ul className="mt-3 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
