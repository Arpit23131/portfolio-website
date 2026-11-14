
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

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ]

  return (

    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0f172a]/95 border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-8 md:px-10 py-4 sm:py-5">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wide hover:scale-105 transition duration-300"
        >
          Arpit Dabas
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-medium">

          {navLinks.map((link) => (

            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition duration-300 hover:-translate-y-1 ${
                activeSection === link.id
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              {link.name}
            </a>

          ))}

        </div>

        {/* Hamburger Button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          className="md:hidden text-cyan-400 text-3xl leading-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 pt-3 text-gray-300 font-medium bg-[#0f172a] border-t border-gray-800">

          {navLinks.map((link) => (

            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`transition duration-300 hover:text-cyan-400 ${
                activeSection === link.id
                  ? 'text-cyan-400'
                  : 'text-gray-300'
              }`}
            >
              {link.name}
            </a>

          ))}

        </div>

      )}

    </nav>
  )
}

export default Navbar
