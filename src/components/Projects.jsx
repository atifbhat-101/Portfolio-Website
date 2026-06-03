const Projects = () => {
  const projects = [
    {
      title: "AgroLink",
      image: "/agrolink.png",
      desc: "MERN Agriculture Marketplace connecting farmers and buyers.",
      tech: "React • Node • MongoDB • Tailwind",
      github: "https://github.com/atifbhat-101",
    },
    {
      title: "Weather App",
      image: "/weather.png",
      desc: "Real-time weather application using API integration.",
      tech: "React • API",
      github: "https://github.com/atifbhat-101",
    },
    {
      title: "Portfolio Website",
      image: "/portfolio.png",
      desc: "Personal portfolio website showcasing skills and projects.",
      tech: "React • Tailwind CSS",
      github: "https://github.com/atifbhat-101",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-300">
                  {project.desc}
                </p>

                <p className="mt-3 text-green-400">
                  {project.tech}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 bg-green-500 px-4 py-2 rounded-lg"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;