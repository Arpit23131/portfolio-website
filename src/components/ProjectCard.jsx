
function ProjectCard(props) {
  return (
    <div className="bg-[#1e293b] p-5 sm:p-6 rounded-2xl border border-gray-700 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition duration-300">

      <img
        src={props.image}
        alt={props.title}
        className="w-full h-48 sm:h-52 object-cover rounded-lg"
      />

      <div className="pt-6">

        <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4">
          {props.title}
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {props.description}
        </p>

        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-5 py-2 rounded-lg"
        >
          GitHub
        </a>

      </div>
    </div>
  )
}

export default ProjectCard
