import { RevealOnScroll } from "../RevealOnScroll";
import profileImg from "../../assets/profile.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I’m Mohit Kumawat
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
              Full-Stack Developer
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              I love crafting clean, scalable web applications with a focus on
              performance, usability, and modern design.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded-md font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded-md font-medium transition-all hover:-translate-y-0.5 hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={profileImg}
              alt="Mohit Kumawat"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover
              border-4 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]
              hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
