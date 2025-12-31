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

  const softwareDevSkills = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "System Design Basics",
    "REST APIs",
    "Git & GitHub",
    "Problem Solving",
  ];

  const programmingSkills = [
    "C",
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

          {/* Title */}
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* About Card */}
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all mb-10">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a motivated{" "}
              <span className="text-blue-400 font-medium">
                Software Developer & Computer Science undergraduate
              </span>{" "}
              with a strong foundation in data structures, algorithms, and core
              programming concepts. I enjoy designing and building{" "}
              <span className="text-cyan-400 font-medium">
                scalable, maintainable software systems
              </span>{" "}
              and full-stack web applications using clean and efficient code.
              Through academic projects, internships, and continuous self-learning,
              I have developed hands-on experience in modern web technologies,
              backend development, and software engineering best practices.
              I am eager to contribute to impactful, real-world software solutions
              and grow as a professional software engineer.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

            {/* Frontend */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                    hover:bg-blue-500/20 transition"
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
                    hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Software Development */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Software Development</h3>
              <div className="flex flex-wrap gap-2">
                {softwareDevSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                    hover:bg-blue-500/20 transition"
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
                    hover:bg-blue-500/20 transition"
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
                  <strong>B.Tech in Computer Science and Engineering</strong> –  
                  National Institute of Technology, Srinagar  
                  <span className="text-gray-400"> (2023 – 2027)</span>
                </li>
                <li>
                  Core Subjects: Data Structures & Algorithms, DBMS, Operating Systems,
                  OOP, Web Technologies, SQL, Python Programming, Microprocessor (8085),
                  C Programming
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Software Developer (Aspiring)</h4>
                  <p>
                    Actively seeking internship and entry-level opportunities to
                    work on real-world software systems, backend services, and
                    scalable web applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Junior Full-Stack Developer Intern – Fuel IT Online{" "}
                    <span className="text-gray-400">(Dec 2025)</span>
                  </h4>
                  <p>
                    Contributed to frontend feature development, REST API integration,
                    and performance improvements while collaborating in an
                    agile development environment.
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
