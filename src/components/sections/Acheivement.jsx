import { RevealOnScroll } from "../RevealOnScroll";

export const Achievement = () => {
  const competitivePlatforms = [
    { name: "LeetCode", rating: "500 problems solved", link: "https://leetcode.com/u/mohit16user/" },
    { name: "Codeforces", rating: "pupil | 1209 Max rating", link: "https://codeforces.com/profile/Ammohit22" },
    { name: "HackerRank", rating: "5⭐ in DSA and C++", link: "https://www.hackerrank.com/profile/mohitkumawat2211" },
    { name: "CodeChef", rating: "2⭐ | 1426 Max rating", link: "https://www.codechef.com/users/mohitkumars" },
  ];

  const achievements = [
    " RunnerUp of Smart India Hackathon 2025",
    " 3st place in College Coding Contest IUST TECH SUMMIT 2025", 
    " 3st place in College HacKer Rank Coding Contest", 
  ];

  const additionalInfo = [
    "Languages: English, Hindi", 
    "Interests: AI, Web Development, Cloud Computing, Open Source Contributions",
    "Hobbies: Cricket, Vollyball, Online Mobile Gamming",
  ];

  return (
    <section id="achievements" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <RevealOnScroll>
        <div className="max-w-5xl w-full">

          {/* Competitive Programming */}
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Competitive Programming
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {competitivePlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl border border-white/10 bg-black/30 hover:bg-blue-500/10 transition-all text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-gray-300">{platform.rating}</p>
              </a>
            ))}
          </div>

          {/* Achievements */}
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Achievements
          </h2>
          <ul className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achieve, idx) => (
              <li
                key={idx}
                className="p-6 rounded-xl border border-white/10 bg-black/30 hover:bg-blue-500/10 transition-all text-center text-gray-300"
              >
                {achieve}
              </li>
            ))}
          </ul>

          {/* Additional Information */}
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Additional Info
          </h2>
          <ul className="grid md:grid-cols-3 gap-6">
            {additionalInfo.map((info, idx) => (
              <li
                key={idx}
                className="p-6 rounded-xl border border-white/10 bg-black/30 hover:bg-blue-500/10 transition-all text-center text-gray-300"
              >
                {info}
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </section>
  );
};
