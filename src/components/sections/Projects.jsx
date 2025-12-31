import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "DPR Assessment System",
    description:
    "Scalable AI-driven assessment software designed for integration with large applications and detailed report analysis.",
    tech: [
      "React",
      "Node.js",
      "Python",
      "TypeScript",
      "MongoDB Atlas",
      "Express.js",
    ],
    link: "https://voidframe2.vercel.app/",
    repolink: "https://github.com/Mohitkumar2217/voidframe2",
  },
  {
    title: "Krishi Saarthi Web App",
    description:
      "Full-stack agriculture support platform with modern UI and intelligent data-driven features.",
    tech: ["Node.js", "React", "JavaScript", "Gemini AI API"],
    link: "https://tracebase-main.vercel.app/",
    repolink: "https://github.com/Mohitkumar2217/tracebase",
  },
  {
    title: "URL Shortener",
    description:
      "Lightweight URL shortener service that converts long URLs into clean, shareable short links similar to Bitly.",
    tech: ["Node.js", "Express", "EJS", "JavaScript"],
    link: "https://url-shortener-1-9443.onrender.com/",
    repolink: "https://github.com/Mohitkumar2217/URL-Shortener",
  },
  {
    title: "AI Agent Invoice Automation System",
    description:
    "Automated invoice processing system with persistent memory, intelligent data extraction, and a scalable backend architecture.",
    tech: ["Node.js", "TypeScript", "SQLite", "Automation"],
    link: "modal",
    repolink: "https://github.com/Mohitkumar2217/ai_agent_invoice_managment",
  },
  {
    title: "Inventory Management System",
    description:
    "MERN stack web application featuring modern UI, interactive dashboards, and smart inventory management.",
    tech: [
      "React",
      "MongoDB",
      "Chart.js",
      "Node.js",
      "Express.js",
      "TailwindCSS",
    ],
    link: "modal",
    repolink: "https://github.com/Mohitkumar2217/Inventory_management_system_mohit.ISM",
  },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl border border-white/10
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)]
                transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                      hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-6">
                  {project.link === "modal" ? (
                    <button
                      onClick={() => setActiveProject(project.title)}
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      Visit Site →
                    </button>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      Visit Site →
                    </a>
                  )}

                  {project.repolink !== "#" && (
                    <a
                      href={project.repolink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      GitHub Repo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL */}
        {activeProject && (
          <div
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 max-w-sm text-center shadow-xl"
            >
              <h3 className="text-xl font-bold mb-2 text-white">
                🚧 {activeProject}
              </h3>
              <p className="text-gray-400 mb-6">
                This project is currently under active development.
                The live demo will be available soon.
              </p>
              <button
                onClick={() => setActiveProject(null)}
                className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </RevealOnScroll>
    </section>
  );
};
