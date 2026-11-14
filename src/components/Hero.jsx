
import myPhoto from '../assets/my_photo.jpg'
import ResumePDF from '../assets/Arpit_Dabas_Resume.pdf'

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center px-5 sm:px-8 md:px-10 pt-16 pb-20 md:py-16 gap-10 md:gap-20"
    >
      {/* Profile Image */}
      <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-[0_0_40px_rgba(34,211,238,0.5)]">
        <img
          src={myPhoto}
          alt="Arpit Dabas"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Right Content */}
      <div className="max-w-2xl w-full">

        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-[#1e293b] text-cyan-400 text-sm border border-cyan-400/30">
          👋 Welcome to my portfolio
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Hi, I'm <span className="text-cyan-400">Arpit Dabas</span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-gray-300 mb-3">
          Full Stack Developer
        </h2>

        <h2 className="text-xl sm:text-2xl text-gray-300 mb-3">
          AI Engineer
        </h2>

        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mt-6">
          Engineering student at IIIT Delhi passionate about full-stack
          development, cybersecurity, and building impactful digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10">
          <a
            href="#projects"
            className="btn-primary px-6 py-3 rounded-xl hover:scale-105"
          >
            View Projects
          </a>

          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-6 py-3 rounded-xl hover:scale-105"
          >
            View Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-6 mt-10 text-gray-400">
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
