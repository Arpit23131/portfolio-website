import { useState, useEffect } from 'react'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {

    const sections = document.querySelectorAll('section[id]')

    const handleScroll = () => {

      const scrollY = window.scrollY

      sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (
          scrollY >= sectionTop &&
          scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId)
        }

      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0f172a]/80 border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wide hover:scale-105 transition duration-300"
        >
          Arpit Dabas
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-medium">

          <a
            href="#about"
            className={`transition duration-300 hover:-translate-y-1 ${
              activeSection === 'about'
                ? 'text-cyan-400'
                : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            About
          </a>

          <a
            href="#projects"
            className={`transition duration-300 hover:-translate-y-1 ${
              activeSection === 'projects'
                ? 'text-cyan-400'
                : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            Projects
          </a>

          <a
            href="#experience"
            className={`transition duration-300 hover:-translate-y-1 ${
              activeSection === 'experience'
                ? 'text-cyan-400'
                : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            Experience
          </a>

          <a
            href="#skills"
            className={`transition duration-300 hover:-translate-y-1 ${
              activeSection === 'skills'
                ? 'text-cyan-400'
                : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            Skills
          </a>

          <a
            href="#contact"
            className={`transition duration-300 hover:-translate-y-1 ${
              activeSection === 'contact'
                ? 'text-cyan-400'
                : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            Contact
          </a>

        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-cyan-400 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden flex flex-col gap-6 px-6 pb-6 text-gray-300 font-medium bg-[#0f172a] border-t border-gray-800">

          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>

          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        </div>

      )}

    </nav>
  )
}

export default Navbar