import { FaBriefcase, FaCode, FaGraduationCap, FaLayerGroup } from "react-icons/fa";

const About = () => {
  const stats = [
    {
      icon: <FaBriefcase className="text-emerald-400 text-xl" />,
      title: "Experience",
      value: "6+ Months Intern",
      desc: "Excellence Technology",
    },
    {
      icon: <FaCode className="text-cyan-400 text-xl" />,
      title: "Projects",
      value: "5+ Built",
      desc: "MERN & APIs",
    },
    {
      icon: <FaGraduationCap className="text-emerald-400 text-xl" />,
      title: "Education",
      value: "B.Tech CSE",
      desc: "Graduated in 2024",
    },
    {
      icon: <FaLayerGroup className="text-cyan-400 text-xl" />,
      title: "Focus Stack",
      value: "MERN Dev",
      desc: "React, Node, Express, Mongo",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/50 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-base font-semibold text-emerald-400 uppercase tracking-widest">
            Biography
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            About Me
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-3 rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Detailed Paragraph */}
          <div className="md:col-span-6 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a dedicated and results-driven <strong className="text-white font-semibold">Full Stack Developer</strong> specializing in the MERN (MongoDB, Express.js, React.js, Node.js) ecosystem. 
              My journey in software engineering has equipped me with a strong foundation in building highly scalable, backend-driven, and client-centric web applications.
            </p>
            <p>
              During my 6-month internship at <strong className="text-white font-semibold">Excellence Technology</strong>, I worked extensively on designing robust RESTful APIs, managing database migrations, and crafting pixel-perfect, responsive user interfaces. 
              I love turning complex problems into elegant, maintainable code.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/40 border border-slate-800/80 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
              >
                <div className="p-3 w-fit bg-slate-900 rounded-xl mb-4 shadow-inner">
                  {stat.icon}
                </div>
                <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  {stat.title}
                </h4>
                <p className="text-lg font-bold text-slate-100 mt-1">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;