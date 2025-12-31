import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "Runner-Up – Smart India Hackathon",
    desc: "Built a real-world problem-solving solution at national level.",
  },
  {
    year: "2025",
    title: "3rd Place – IUST Tech Summit Coding Contest",
    desc: "Competed among top coders with strong DSA performance.",
  },
  {
    year: "2024",
    title: "500+ LeetCode Problems Solved",
    desc: "Consistent problem solving across arrays, DP, graphs & trees.",
  },
];

export const Timeline = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Achievements Timeline
        </h2>

        <div className="relative border-l border-white/20">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="ml-6 mb-10"
            >
              <span className="absolute -left-2 w-4 h-4 bg-blue-500 rounded-full" />
              <p className="text-sm text-gray-400">{item.year}</p>
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
