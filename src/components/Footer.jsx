import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-white py-12 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding/Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-semibold text-slate-300">
            © 2026 Aquib Gulzar. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Handcrafted with React & Tailwind CSS.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/atifbhat-101"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-slate-900 hover:bg-emerald-500/10 border border-slate-800 hover:border-emerald-500/30 rounded-xl text-slate-400 hover:text-emerald-400 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>
          
          <a
            href="https://www.linkedin.com/in/aquib-gulzar-0286222bb/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-slate-900 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/30 rounded-xl text-slate-400 hover:text-cyan-400 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;