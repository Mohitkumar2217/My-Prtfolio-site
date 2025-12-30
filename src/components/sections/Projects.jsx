import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "AI Agent Invoice Automation System",
    description:
      "Automated invoice processing system with persistent memory, intelligent data extraction, and scalable backend architecture.",
    tech: ["Node.js", "TypeScript", "SQLite", "Automation"],
    link: "#", // add GitHub or demo link
  },
  {
    title: "Dpr Assessment System",
    description:
      "Scalable AI Driven Assessment Software For Intigration with large application for better Analysis of Detail Report Project.",
    tech: ["React", "Node.js", "Python", "TypeScript", "mongoDB Atlas", "Express.js"],
    link: "#",
  },
  {
    title: "Inventroy Management System",
    description:
      "MERN Stack Web Application data visualization platform with Modern UI, interactive reports and Smart inventory managment.",
    tech: ["React", "MongoDB", "Chart.js", "Node.js", "Express.js", "TailwindCSS"],
    link: "#",
  },
  {
    title: "Krishi Saarthi Web App",
    description:
      "Full-stack Kishi Saarthi app with modern UI, and inventory management.",
    tech: ["Node.js", "React", "JavaScript", "Gemini AI API"],
    link: "#",
  },
  {
    title: "Url Shortner",
    description:
      "Small Url Shortner Website To Shorten Large URL into Small Urls just Like betliy.",
    tech: ["Node.js", "Express", "Ejs", "JavaScript"],
    link: "#",
  },
];

export const Projects = () => {
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  glass p-6 rounded-xl border border-white/10
                  hover:-translate-y-1 hover:border-blue-500/30
                  hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)]
                  transition-all
                "
              >
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        bg-blue-500/10 text-blue-500 py-1 px-3
                        rounded-full text-sm
                        hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                        transition
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block text-blue-400 hover:text-blue-300 transition-colors mt-2"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
