import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { FaGithub, FaCode } from "react-icons/fa";

export const Achievement = () => {
  const stats = [
    {
      title: "GitHub Repositories",
      value: "30+",
      desc: "Open-source & personal projects",
      icon: <FaGithub size={28} />,
      link: "https://github.com/Mohitkumar2217",
    },
    {
      title: "LeetCode Problems",
      value: "500+",
      desc: "Strong DSA & problem-solving",
      icon: <FaCode size={28} />,
      link: "https://leetcode.com/u/mohit16user/",
    },
  ];

  const competitivePlatforms = [
    {
      name: "LeetCode",
      rating: "500+ problems solved",
      link: "https://leetcode.com/u/mohit16user/",
    },
    {
      name: "Codeforces",
      rating: "Pupil • 1209 max rating",
      link: "https://codeforces.com/profile/Ammohit22",
    },
    {
      name: "HackerRank",
      rating: "5⭐ in DSA & C++",
      link: "https://www.hackerrank.com/profile/mohitkumawat2211",
    },
    {
      name: "CodeChef",
      rating: "2⭐ • 1426 max rating",
      link: "https://www.codechef.com/users/mohitkumars",
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Runner-Up – Smart India Hackathon",
      desc: "Built a real-world, scalable solution at national level.",
    },
    {
      year: "2025",
      title: "3rd Place – IUST Tech Summit Coding Contest",
      desc: "Competed among top coders with strong DSA performance.",
    },
    {
      year: "2024",
      title: "500+ LeetCode Problems Solved",
      desc: "Consistent problem solving across arrays, DP, trees & graphs.",
    },
  ];

  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center px-4 py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full">

          {/* ===== STATS CARDS ===== */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Coding Stats
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {stats.map((stat, i) => (
              <motion.a
                key={i}
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl border border-white/10 bg-black/30 text-center"
              >
                <div className="flex justify-center mb-3 text-blue-400">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white">
                  {stat.value}
                </h3>
                <p className="text-gray-300 mt-1">{stat.title}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.desc}</p>
              </motion.a>
            ))}
          </div>

          {/* ===== COMPETITIVE PROGRAMMING ===== */}
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Competitive Programming
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {competitivePlatforms.map((platform, i) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl border border-white/10 bg-black/30
                hover:bg-blue-500/10 transition-all text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-300">{platform.rating}</p>
              </motion.a>
            ))}
          </div>

          {/* ===== TIMELINE ===== */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Achievements Timeline
          </h2>

          <div className="relative border-l border-white/20 max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="ml-6 mb-10 relative"
              >
                <span className="absolute -left-3 top-1 w-4 h-4 bg-blue-500 rounded-full" />
                <p className="text-sm text-gray-400">{item.year}</p>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
