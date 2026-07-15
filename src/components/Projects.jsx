import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "AgroLink",
      image: "/agrolink.png",
      desc: "An innovative, full-stack B2C agriculture marketplace connecting local farmers directly with bulk buyers. Streamlines supply chains and improves pricing transparency.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      github: "https://github.com/atifbhat-101",
      demo: "#",
    },
    {
      title: "Weather App",
      image: "/weather.png",
      desc: "A sleek, clean dashboard that aggregates weather forecasts in real time using geolocation services, open API integrations, and intuitive climate maps.",
      tech: ["React.js", "REST APIs", "Tailwind CSS", "CSS Modules"],
      github: "https://github.com/atifbhat-101",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      image: "/portfolio.png",
      desc: "This personal developer portfolio. Built using React, Tailwind CSS v4, and modern responsive UI patterns to showcase my experience, skills, and credentials.",
      tech: ["React.js", "Tailwind CSS", "Vite", "Keyframe Animations"],
      github: "https://github.com/atifbhat-101",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative ambient glowing grids */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-cyan-400 uppercase tracking-widest">
            Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            Featured Projects
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mt-3 rounded-full mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-cyan-500/35 transition-all duration-300 shadow-xl flex flex-col hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Image Frame */}
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all duration-300" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed flex-grow">
                  {project.desc}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-semibold text-cyan-400/90 bg-cyan-500/5 rounded-md border border-cyan-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project CTA Links */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-800/60">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 px-3.5 py-2 rounded-lg transition-all duration-300"
                  >
                    <FaGithub size={14} /> Source Code
                  </a>
                  
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white transition-colors duration-300 ml-auto group-hover:translate-x-0.5 duration-200"
                    >
                      Live Demo <FaExternalLinkAlt size={10} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;