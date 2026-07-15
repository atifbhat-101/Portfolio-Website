import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode className="text-emerald-400 text-2xl" />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E] bg-black p-0.5 rounded" /> },
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    ],
  },
  {
    title: "Backend & Databases",
    icon: <FaServer className="text-cyan-400 text-2xl" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-[#FFFFFF]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Mongoose", icon: <FaDatabase className="text-[#880000]" /> },
    ],
  },
  {
    title: "Tools & Utilities",
    icon: <FaTools className="text-emerald-400 text-2xl" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-[#FFFFFF]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-emerald-400 uppercase tracking-widest">
            Expertise
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            My Tech Stack
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-3 rounded-full mx-auto" />
        </div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl flex flex-col hover:border-emerald-500/20 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-2.5 bg-slate-950 rounded-xl shadow-inner">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-100">
                  {category.title}
                </h4>
              </div>

              {/* Skills Sub-grid */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-emerald-500/30 hover:bg-slate-950 hover:shadow-[0_4px_12px_rgba(52,211,153,0.05)] transition-all duration-300 group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;