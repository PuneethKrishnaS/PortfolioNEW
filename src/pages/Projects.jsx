import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
const projects = [
  {
    title: "InterviewTalent",
    description:
      "A full-stack interview preparation platform for engineering students. Features technical, behavioral, and HR interview simulations, AI-assisted resume building, and GitHub project integration.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://interview-talent-5abh.vercel.app/",
    code: "https://github.com/PuneethKrishnaS/InterviewTalent",
    index: 1,
  },
  {
    title: "ChitChat",
    description:
      "A real-time messaging web app built with Socket.IO for instant communication. Features user authentication, responsive UI, and secure data management using MongoDB.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    link: "https://chit-chat-ten-zeta.vercel.app/",
    code: "https://github.com/PuneethKrishnaS/ChitChat",
    index: 2,
  },
  {
    title: "2D Platform Game – Pixel Adventure",
    description:
      "A retro-style 2D platformer game built using JavaScript and Canvas API. Includes dynamic levels, obstacles, and AI-driven enemies with engaging gameplay mechanics.",
    techStack: ["JavaScript", "HTML", "CSS", "Canvas API"],
    link: "https://pixeladventure2024.netlify.app/",
    code: "https://github.com/PuneethKrishnaS/2D-Platform-Game-Pixel-Adventure",
    index: 3,
  },
  {
    title: "University Database Management System",
    description:
      "A centralized web application for managing university data such as students, teachers, courses, and timetables. Built with pure HTML, CSS, and JavaScript for a lightweight solution.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://universitydbms.netlify.app/login",
    code: "https://github.com/PuneethKrishnaS/University-Data-Base-Management-System",
    index: 4,
  },
];


  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className="min-h-screen px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center text-foreground">
        Projects
      </h1>
      <p className="text-base text-muted-foreground mb-10  text-center">
        Explore some of the projects I’ve worked on recently. Click on a project to
        view it in action.
      </p>

      <div className="w-full  border border-border rounded-xl bg-background shadow-sm grid grid-cols-1 lg:grid-cols-6 overflow-hidden">
        {/* Sidebar */}
        <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border ">
          {projects.map((project) => (
            <button
              key={project.index}
              onClick={() => setSelected(project)}
              className={`w-full text-left px-5 py-4 transition-all duration-300 border-b-1 ${
                selected.index === project.index
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <h4 className="font-semibold text-lg">{project.title}</h4>
              <p
                className={`text-sm mt-1 ${
                  selected.index === project.index
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground line-clamp-2"
                }`}
              >
                {project.description}
              </p>
            </button>
          ))}
        </div>

        {/* Project Preview */}
        <div className="lg:col-span-4 flex flex-col p-5">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
            <h2 className="text-2xl font-semibold text-foreground">
              {selected.title}
            </h2>
            <div className="flex flex-wrap gap-2 mt-2 lg:mt-0">
              {selected.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs border border-border px-2 py-1 rounded-full text-muted-foreground bg-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Preview Frame */}
          <div className="relative w-full h-[54vh] border border-border rounded-lg overflow-hidden bg-muted shadow-inner">
            <motion.iframe
              key={selected.link}
              src={selected.link}
              title={selected.title}
              className="w-full h-full"
              frameBorder="0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute top-3 right-3 flex gap-2">
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition"
                title="Live Demo"
              >
                <FiExternalLink size={18} />
              </a>
              <a
                href={selected.code}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition"
                title="View Code"
              >
                <FiGithub size={18} />
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            {selected.description}
          </p>
        </div>
      </div>
    </div>
  );
}
