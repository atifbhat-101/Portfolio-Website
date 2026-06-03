const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Git",
  "GitHub",
  "Postman",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-4 rounded-xl text-center"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;