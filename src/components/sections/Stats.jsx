import { motion } from "framer-motion";
import { FaGithub, FaCode } from "react-icons/fa";

export const Stats = () => {
  const stats = [
    {
      title: "GitHub Repositories",
      value: "30+",
      icon: <FaGithub size={28} />,
      desc: "Open-source & personal projects",
    },
    {
      title: "LeetCode Problems",
      value: "500+",
      icon: <FaCode size={28} />,
      desc: "Strong DSA & problem-solving",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl border border-white/10 bg-black/30 text-center"
          >
            <div className="flex justify-center mb-3 text-blue-400">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
            <p className="text-gray-300 mt-2">{stat.title}</p>
            <p className="text-gray-500 text-sm mt-1">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
