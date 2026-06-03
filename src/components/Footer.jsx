function Footer() {

  return (

    <footer className="bg-[#0b1120] border-t border-gray-800 text-white px-10 py-12">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left Side */}
        <div className="text-center md:text-left">

          <h2 className="text-2xl font-bold text-cyan-400 mb-2">
            Arpit Dabas
          </h2>

          <p className="text-gray-400">
            Full Stack Developer • Cybersecurity Enthusiast
          </p>

        </div>

        {/* Center Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-300">

          <a
            href="#about"
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="hover:text-cyan-400 transition duration-300"
          >
            Experience
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition duration-300"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </a>

        </div>

        {/* Right Side */}
        <div className="text-center md:text-right">

          <p className="text-gray-500 text-sm">
            © 2026 Arpit Dabas
          </p>

          <p className="text-gray-600 text-sm mt-2">
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer