import { RevealOnScroll } from "../RevealOnScroll";
import profileImg from "../../assets/profile.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

      <RevealOnScroll>
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I’m Mohit Kumawat
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mb-5">
              Full-Stack Developer • AI & Automation
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              I build <span className="text-blue-400 font-medium">scalable full-stack applications</span> 
              and <span className="text-cyan-400 font-medium">AI-powered systems</span> that solve real-world problems —
              from invoice automation to intelligent dashboards.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-7 rounded-md font-semibold transition-all
                hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-400 py-3 px-7 rounded-md font-semibold transition-all
                hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            {/* Glow ring */}
            <div className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

            <img
              src={profileImg}
              alt="Mohit Kumawat"
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover
              border-4 border-blue-500/30
              shadow-[0_0_40px_rgba(59,130,246,0.4)]
              hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
