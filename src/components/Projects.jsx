import ProjectCard from './ProjectCard'
import dashboardImg1 from '../assets/projects/dashboard1.jpeg'
import dashboardImg2 from '../assets/projects/dashboard2.jpeg'
import portfolioImg from '../assets/projects/portfolio.png'
import courseImg from '../assets/projects/course.png'
import foodImg from '../assets/projects/food.png'
import angrybirdsImg from '../assets/projects/angrybirds.png'

function Projects() {
  return (
    <section
      id="projects"
      className="px-10 py-24 bg-[#0f172a]"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-cyan-400 mb-14">
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Security Dashboard */}
          <ProjectCard
            image={dashboardImg1}
            href = "https://github.com/Arpit23131/Security-Devices-Monitoring-Dashboard"
            title="Security Devices Monitoring Dashboard"
            description="Real-time dashboard for monitoring security devices, attack statistics, network traffic, and active sessions developed during internship at NIC."
            
          />

          {/* Course Registration System */}
          <ProjectCard
            image={courseImg}
            href = "https://github.com/Arpit23131/Course-Registration-System"
            title="Course Registration System"
            description="Web-based platform enabling students to register for courses, manage schedules, and streamline academic workflows efficiently."
          />

          {/* Food Ordering System */}
          <ProjectCard
            image={foodImg}
            href = "https://github.com/Arpit23131/Food-Ordering-System"
            title="Food Ordering System"
            description="Interactive food ordering application featuring menu browsing, cart management, and responsive user interface design."
          />

          {/* Angry Birds Clone */}
          <ProjectCard
            image={angrybirdsImg}
            href = "https://github.com/Arpit23131/Angry-Birds-Clone"
            title="Angry Birds Clone"
            description="Game development project recreating Angry Birds gameplay mechanics including projectile launching, physics interactions, and obstacle destruction."
          />



        </div>

      </div>

    </section>
  )
}

export default Projects
