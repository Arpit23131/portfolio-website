import myPhoto from '../assets/my_photo.jpg'
import ResumePDF from '../assets/Arpit_Dabas_Resume.pdf'

function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center px-10 py-16 gap-20">

      {/* Profile Image */}
      <div className="w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-[0_0_40px_rgba(34,211,238,0.5)]">

        <img
          src={myPhoto}
          alt="Arpit Dabas"
          className="w-full h-full object-cover rounded-full"
        />

      </div>

      {/* Right Content */}
      <div className="max-w-2xl">

        {/* Badge */}
        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-[#1e293b] text-cyan-400 text-sm border border-cyan-400/30">
          👋 Welcome to my portfolio
        </div>

        <h1 className="text-6xl font-bold leading-tight mb-6">
          Hi, I'm <span className="text-cyan-400">Arpit Dabas</span>
        </h1>

        <h2 className="text-2xl text-gray-300 mb-3">
          Full Stack Developer
        </h2>

        <h2 className="text-2xl text-gray-300 mb-3">
          AI Engineer
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed mt-6">
          Engineering student at IIIT Delhi passionate about full-stack
          development, cybersecurity, and building impactful digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-10">
          <a
            href="#projects"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            View Projects
          </a>

          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black"
          >
            View Resume
          </a>

        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-10 text-gray-400">

          <a href="https://github.com/Arpit23131"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/arpit-dabas-4640462b1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition">
            LinkedIn
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arpitdabas2006@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition">
            Email
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero
