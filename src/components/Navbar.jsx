const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-green-400 font-bold text-xl">
          Aquib Gulzar
        </h1>

        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;