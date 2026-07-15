import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center bg-slate-950 text-white pt-28 pb-16 overflow-hidden"
    >
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="md:col-span-7 text-left space-y-6 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Internships & Projects
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm font-extrabold block mt-2">
              Aquib Gulzar
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200">
            Full Stack MERN Developer
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
            Passionate MERN stack engineer with a 6-month hands-on internship at
            <span className="text-emerald-400 font-medium"> Excellence Technology</span>. 
            I specialize in crafting high-performance, robust, and interactive web applications.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FaDownload className="text-sm" /> Download Resume
            </a>
            
            <a
              href="#contact"
              className="flex items-center gap-2 border border-slate-700 hover:border-emerald-500 bg-slate-900/60 hover:bg-slate-900 text-slate-200 hover:text-white px-6 py-3 rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Me <FaArrowRight className="text-xs text-slate-400 group-hover:text-white" />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-6">
            <span className="text-sm text-slate-500 font-medium tracking-wider uppercase">
              Connect:
            </span>
            <a
              href="https://github.com/atifbhat-101"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900/80 hover:bg-emerald-500/10 border border-slate-800 hover:border-emerald-500/30 rounded-full text-slate-400 hover:text-emerald-400 shadow-md transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/aquib-gulzar-0286222bb/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900/80 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/30 rounded-full text-slate-400 hover:text-cyan-400 shadow-md transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Avatar */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
            {/* Background ambient glowing ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow" />
            
            {/* Double border wrapper */}
            <div className="relative w-full h-full p-2 bg-slate-900/40 rounded-full border border-slate-800/80 backdrop-blur-sm shadow-2xl flex items-center justify-center">
              <div className="w-full h-full p-1.5 bg-gradient-to-tr from-emerald-400 via-teal-400 to-cyan-400 rounded-full animate-float">
                <img
                  src="/profile.png"
                  alt="Aquib Gulzar"
                  className="w-full h-full rounded-full object-cover border-2 border-slate-950 bg-slate-900 shadow-inner"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;