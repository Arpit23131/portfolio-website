import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contacts from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Experience/>
      <Skills/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App