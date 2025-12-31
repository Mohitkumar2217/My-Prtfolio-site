import { RevealOnScroll } from "../RevealOnScroll";
import profileImg from "../../assets/profile.png";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)]"
      />

      <RevealOnScroll>
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Animated Gradient Name */}
            <h1
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight
              bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500
              bg-[length:200%_200%] bg-clip-text text-transparent
              animate-gradient"
            >
              Hi, I’m Mohit Kumawat
            </h1>

            {/* Typing Role */}
            <h2 className="text-xl md:text-2xl text-gray-300 mb-5 h-8">
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "Software Developer",
                  "React & Node.js Engineer",
                  "Problem Solver",
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
              I build{" "}
              <span className="text-blue-400 font-medium">
                scalable full-stack applications
              </span>{" "}
              and{" "}
              <span className="text-cyan-400 font-medium">
                AI-powered systems
              </span>{" "}
              that solve real-world problems — from invoice automation to
              intelligent dashboards, with a strong focus on{" "}
              <span className="text-blue-400 font-medium">
                problem-solving and performance
              </span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="relative bg-blue-500 text-white py-3 px-7 rounded-md font-semibold
                transition-all duration-300
                hover:-translate-y-1 hover:scale-[1.03]
                hover:shadow-[0_0_35px_rgba(59,130,246,0.8)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-400 py-3 px-7 rounded-md font-semibold
                transition-all duration-300
                hover:-translate-y-1 hover:bg-blue-500/10"
              >
                Contact Me
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Mohitkumar2217"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-gray-600 text-gray-300
                py-3 px-6 rounded-md font-semibold transition-all duration-300
                hover:border-white hover:text-white hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <FaGithub size={20} />
                GitHub
              </a>
            </div>

            {/* Availability */}
            <p className="mt-6 text-gray-500 text-sm">
              Open to internships & full-time opportunities 🚀
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Pulsing Glow */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"
            />

            {/* Floating Avatar */}
            <motion.img
              src={profileImg}
              alt="Mohit Kumawat"
              animate={{ y: [0, -12, 0] }}
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover
              border-4 border-blue-500/30
              shadow-[0_0_45px_rgba(59,130,246,0.45)]"
            />
          </motion.div>

        </div>
      </RevealOnScroll>

      {/* Gradient Animation */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient 6s ease infinite;
          }
        `}
      </style>
    </section>
  );
};
