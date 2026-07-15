import { FaGraduationCap, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

const Education = () => {
  const educationList = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "IK Gujral Punjab Technical University",
      period: "2020 - 2024",
      highlights: [
        "Focused on Software Engineering, Database Management Systems, and Web Technologies.",
        "Built multiple functional academic projects using modern programming stacks.",
      ],
      coursework: [
        "Data Structures",
        "Algorithms",
        "DBMS",
        "OOPs",
        "Web Engineering",
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-cyan-400 uppercase tracking-widest">
            Academic Background
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            Education
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mt-3 rounded-full mx-auto" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Dot with Glow */}
              <span className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border border-slate-800 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all duration-300">
                <FaGraduationCap className="text-cyan-400 text-xs" />
              </span>

              {/* Education Card */}
              <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/20 transition-all duration-300 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-400/90 font-semibold text-sm">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800/60 w-fit">
                    <FaCalendarAlt className="text-cyan-400" />
                    {edu.period}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-2.5 items-start text-sm text-slate-300 leading-relaxed">
                      <FaBookOpen className="text-cyan-400/80 mt-1 flex-shrink-0 text-xs" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Coursework Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {edu.coursework.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-0.5 text-xs font-medium text-slate-300 bg-slate-950/60 rounded-md border border-slate-800/60"
                    >
                      {c}
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

export default Education;