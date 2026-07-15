import { FaAward, FaBuilding, FaCheck } from "react-icons/fa";

const Certification = () => {
  return (
    <section className="py-24 bg-slate-900/50 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-emerald-400 uppercase tracking-widest">
            Credentials
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            Certifications
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-3 rounded-full mx-auto" />
        </div>

        {/* Certificate Card */}
        <div className="max-w-2xl mx-auto bg-slate-950/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative hover:border-emerald-500/20 transition-all duration-300 shadow-xl group">
          {/* Certificate Badge Corner */}
          <div className="absolute -top-5 -right-2 sm:right-6 p-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 rounded-2xl shadow-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
            <FaAward size={26} />
          </div>

          <div className="space-y-6">
            <div>
              <span className="px-2.5 py-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full tracking-wider uppercase">
                Verified Credential
              </span>
              <h4 className="text-2xl font-bold text-slate-100 mt-3 group-hover:text-emerald-400 transition-colors duration-300">
                MERN Stack Developer Certification
              </h4>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <FaBuilding className="text-emerald-400" />
                <span>Excellence Technology</span>
              </div>
              <div className="hidden sm:block text-slate-700">|</div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Completion Status: Verified</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
              Rigorous hands-on training program covering full-stack web applications. Demonstrated competence in React frontend architectures, Express routing, REST API modeling, database normalization with MongoDB, and deployment standards.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <FaCheck className="text-emerald-400" /> Web Engineering
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <FaCheck className="text-emerald-400" /> Database Administration
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <FaCheck className="text-emerald-400" /> RESTful Architecture
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certification;