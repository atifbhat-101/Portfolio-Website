import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Excellence Technology",
      period: "6 Months",
      description: [
        "Architected and implemented responsive full-stack applications using the MERN stack.",
        "Designed and secured RESTful APIs with JWT authentication and custom middleware.",
        "Managed database schema design, migrations, and indexing with MongoDB & Mongoose.",
        "Enhanced frontend performance by optimizing React state management and asset delivery.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900/50 text-white relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-emerald-400 uppercase tracking-widest">
            Career Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            Work Experience
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-3 rounded-full mx-auto" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Dot with Glow */}
              <span className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border border-slate-800 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.3)] transition-all duration-300">
                <FaBriefcase className="text-emerald-400 text-xs" />
              </span>

              {/* Experience Card */}
              <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/20 transition-all duration-300 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300">
                      {exp.role}
                    </h4>
                    <p className="text-emerald-400/90 font-semibold text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800/60 w-fit">
                    <FaCalendarAlt className="text-emerald-400" />
                    {exp.period}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2.5 items-start text-sm text-slate-300 leading-relaxed">
                      <FaCheckCircle className="text-emerald-400/80 mt-1 flex-shrink-0 text-xs" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-xs font-medium text-slate-300 bg-slate-950/60 rounded-md border border-slate-800/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;