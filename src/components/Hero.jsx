import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white pt-20">

      <div className="text-center">

        <img
          src="/profile.png"
          alt=""
          className="w-44 h-44 rounded-full mx-auto border-4 border-green-500 object-cover"
        />

        <h1 className="text-6xl font-bold mt-6">
          Aquib Gulzar
        </h1>

        <h2 className="text-2xl text-green-400 mt-3">
          Full Stack Developer
        </h2>

        <p className="max-w-xl mx-auto mt-5 text-slate-300">
          MERN Stack Developer with 6 months internship
          experience at Excellence Technology.
        </p>

        <div className="flex justify-center gap-4 mt-8">

          <a
            href="https://github.com/atifbhat-101"
            target="_blank"
            className="p-3 bg-slate-800 rounded-full"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/aquib-gulzar-0286222bb/"
            target="_blank"
            className="p-3 bg-slate-800 rounded-full"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="/resume.pdf"
            className="bg-green-500 px-5 py-3 rounded-lg"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;