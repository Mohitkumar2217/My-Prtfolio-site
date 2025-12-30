import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "AWS",
    "Python",
    "GraphQL",
  ];

  const programmingSkills = [
    "C Programming",
    "C++",
    "Python",
    "JavaScript",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* About Card */}
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all mb-10">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a motivated <span className="text-blue-400 font-medium">Computer Science undergraduate</span>
              with a strong foundation in data structures, algorithms, and core programming concepts.
              I enjoy building scalable full-stack applications and solving real-world problems using
              clean, efficient code. Through academic projects, internships, and self-driven learning,
              I continuously sharpen my skills in modern web technologies and backend systems.
              I am eager to grow as a software engineer and contribute to impactful, technology-driven solutions.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Frontend */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {programmingSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Computer Science And Engineering</strong> – National Institute of Technology, Srinagar  
                  <span className="text-gray-400"> (2023 – 2027)</span>
                </li>
                <li>
                  Coursework: Database Management Systems, Operating Systems,
                  Object-Oriented Programming, Data Structures & Algorithms,
                  Internet and Web Technologies, SQL, Python Programming,
                  Microprocessor (8085), C Programming
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Aspiring Software Engineer</h4>
                  <p>
                    Actively seeking internship opportunities to work on scalable
                    web applications, backend services, and real-world engineering problems.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Intern – Fuel IT Online <span className="text-gray-400">(Dec 2025)</span>
                  </h4>
                  <p>
                    Junior Full-Stack Developer. Assisted in building frontend components,
                    integrating REST APIs, and improving application performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
