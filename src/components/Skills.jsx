function Skills() {

  const technicalSkills = [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'C++',
    'Python',
    'Cybersecurity',
    'REST APIs',
  ]

  const toolsPlatforms = [
    'Git & GitHub',
    'VS Code',
    'Linux',
    'Postman',
    'GROMACS',
  ]

  const softSkills = [
    'Leadership',
    'Event Coordination',
    'Team Management',
    'Communication',
    'Problem Solving',
    'Operations Management',
  ]

  return (

    <section
      id="skills"
      className="px-10 py-24 bg-[#0f172a] text-white"
    >

      <div className="max-w-6xl mx-auto">

        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-cyan-400 mb-16">
          Skills
        </h2>

        {/* Technical Skills */}
        <div className="mb-16">

          <h3 className="text-2xl font-semibold mb-8 text-white">
            Technical Skills
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {technicalSkills.map((skill, index) => (

              <div
                key={index}
                className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 text-center text-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition duration-300 hover:-translate-y-2"
              >
                {skill}
              </div>

            ))}

          </div>

        </div>

        {/* Tools & Platforms */}
        <div className="mb-16">

          <h3 className="text-2xl font-semibold mb-8 text-white">
            Tools & Platforms
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {toolsPlatforms.map((tool, index) => (

              <div
                key={index}
                className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 text-center text-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition duration-300 hover:-translate-y-2"
              >
                {tool}
              </div>

            ))}

          </div>

        </div>

        {/* Soft Skills */}
        <div>

          <h3 className="text-2xl font-semibold mb-8 text-white">
            Soft Skills
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {softSkills.map((skill, index) => (

              <div
                key={index}
                className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 text-center text-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition duration-300 hover:-translate-y-2"
              >
                {skill}
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Skills