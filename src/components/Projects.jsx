// src/components/Projects.jsx
import {  FaPython, FaCss3Alt } from "react-icons/fa";
import {  SiDjango, SiPythonanywhere } from "react-icons/si";

import React from "react";
import ProjectBackground from "./ProjectBackground";
import {
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiNetlify,
  SiOpenai,
  SiRender,
  SiMarkdown,
  SiFramer
} from "react-icons/si";

const projects = [
  {
    title: "Food Delivery Application ",
    image: "/projectimages/Screenshot 2025-08-06 at 12.45.39.png",
    description:
      "Easily create and preview GitHub README files. Generate markdown and download or copy it for your projects.",
    techStack: ["Python", "CSS", "Django", "PythonAnywhere", "GitHub"],
    liveDemo: "https://2300031585mbalu.pythonanywhere.com/",
    github: "https://github.com/MedisettiBalaChellarao/PFSDpRoject",
  },
  {
    title: "CareerQuest-JobPortal",
    image: "/projectimages/Screenshot 2025-08-06 at 13.55.25.png",
    description:
      "An intelligent resume analysis tool that evaluates resumes against job descriptions using AI-powered semantic matching.",
    techStack: ["React", "Tailwind CSS", "Render", "Framer"],
    liveDemo: "https://deploymentfrontend-e513.onrender.com",
    github: "https://github.com/MedisettiBalaChellarao/MswdSdp",
  },
];

// Icon mapping for tech stack
const techIcons = {
  "React": <FaReact className="text-blue-400 text-xl" title="React" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400 text-xl" title="Tailwind CSS" />,
  "Markdown": <SiMarkdown className="text-gray-500 text-xl" title="Markdown" />,
  "Netlify": <SiNetlify className="text-green-500 text-xl" title="Netlify" />,
  "Vite": <SiVite className="text-purple-500 text-xl" title="Vite" />,
  "Open AI": <SiOpenai className="text-gray-800 text-xl" title="OpenAI" />,
  "Render": <SiRender className="text-indigo-500 text-xl" title="Render" />,
  "Framer": <SiFramer className="text-pink-500 text-xl" title="Framer" />,
  "Python": <FaPython className="text-yellow-500 text-xl" title="Python" />,
  "CSS": <FaCss3Alt className="text-blue-500 text-xl" title="CSS" />,
  "Django": <SiDjango className="text-green-700 text-xl" title="Django" />,
  "PythonAnywhere": <SiPythonanywhere className="text-blue-600 text-xl" title="PythonAnywhere" />,
  "GitHub": <FaGithub className="text-gray-700 text-xl" title="GitHub" />,

};

const Projects = () => {
  return (
    <section className="relative bg-[#07070B] text-white px-4 py-20 md:px-16 lg:px-32 overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-0 h-full w-full ">
        <ProjectBackground />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-2  text-green-400">PROJECTS</h2>
        <p className="text-center text-gray-400 mb-12">Some of the things I've built.</p>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/70 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Screenshot */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 w-full h-50 object-cover"
              />

              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tech Stack Icons */}
              <div className="flex gap-3 flex-wrap mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i}>
                    {techIcons[tech] || (
                      <span className="text-sm text-gray-300">{tech}</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
