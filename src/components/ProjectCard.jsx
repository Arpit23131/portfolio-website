function ProjectCard(props) {
  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-700 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition duration-300">

      <img
        src={props.image}
        alt={props.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
          {props.title}
        </h3>

        <p className="text-gray-300 mb-6">
          {props.description}
        </p>

        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
        >
          GitHub
        </a>

      </div>

    </div>
  )
}

export default ProjectCard