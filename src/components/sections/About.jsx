import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML5",
    "CSS",
    "JavaScript", 
    "TailwindCSS", 
    "Bootstrap",
  ];

  const backendSkills = ["Node.js", "Express.js", "Python", "AWS", "MongoDB", "GraphQL"];
  
  const programmingSkills = ["C Proramming", "Cpp", "Python", "JavaScript"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a motivated Computer Science student with a strong foundation in problem-solving, data structures, and core programming concepts. I have hands-on experience with languages like C++, C, and JavaScript, and I enjoy applying logical thinking to build efficient and scalable solutions. I am continuously learning and improving my skills through academic projects, coding practice, and real-world problem exploration. Passionate about technology and software development, I am eager to grow as an engineer, contribute to impactful projects, and explore opportunities that challenge me to learn, innovate, and deliver value.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Computer Science </strong> - National Institute Of Technology, Srinagar Jammu and Kashmir
                  (2023-2027)
                </li>
                <li>
                  Relevant Coursework: DataBase Managment System, Operating System, Object Oriented Programming, Data Structures, internet and Web Technology,
                  Data Analysis and Algorithm, SQL, Python Programming, Microprocessor(8085) and C Programming...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer
                  </h4>
                  <p>
                    Currently Seeking For Internship for Developed and maintained microservices for cloud-based
                    applications and webservices.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at Fuel IT Online (18 Dec 2025){" "}
                  </h4>
                  <p>
                    Junior Full Stack Developer
                    Assisted in building front-end components and integration
                    REST APIs
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
