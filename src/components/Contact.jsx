import ResumePDF from '../assets/Arpit_Dabas_Resume.pdf'
function Contact() {

  return (

    <section
      id="contact"
      className="px-10 py-24 bg-[#111827] text-white"
    >

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-cyan-400 mb-14">
          Contact
        </h2>

        {/* Contact Container */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-semibold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-relaxed mb-10">
              I’m always open to discussing new opportunities,
              collaborations, technical projects, and event operations.
              Feel free to connect with me through the platforms below.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">

              {/* Email */}
              <div className="bg-[#1e293b] p-5 rounded-2xl border border-gray-700 hover:border-cyan-400 transition duration-300">

                <h4 className="text-cyan-400 font-semibold mb-2">
                  Email
                </h4>

                <p className="text-gray-300">
                  arpitdabas2006@gmail.com
                </p>

              </div>

              {/* LinkedIn */}
              <div className="bg-[#1e293b] p-5 rounded-2xl border border-gray-700 hover:border-cyan-400 transition duration-300">

                <h4 className="text-cyan-400 font-semibold mb-2">
                  LinkedIn
                </h4>

                <a
                  href="https://www.linkedin.com/in/arpit-dabas-4640462b1"
                  target="_blank"
                    rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  https://www.linkedin.com/in/arpit-dabas-4640462b1
                </a>

              </div>

              {/* GitHub */}
              <div className="bg-[#1e293b] p-5 rounded-2xl border border-gray-700 hover:border-cyan-400 transition duration-300">

                <h4 className="text-cyan-400 font-semibold mb-2">
                  GitHub
                </h4>

                <a
                  href="https://github.com/Arpit23131"
                  target="_blank"
                    rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  https://github.com/Arpit23131
                </a>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="bg-[#1e293b] p-10 rounded-3xl border border-gray-700">

            <h3 className="text-2xl font-semibold mb-8">
              Quick Actions
            </h3>

            <div className="flex flex-col gap-6">

              {/* Email Button */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arpitdabas2006@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-cyan-400 text-black px-6 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105 hover:bg-cyan-300"
              >
                Send Email
              </a>

              {/* Resume Button */}
              <a
                href={ResumePDF}
                download
                className="block text-center border border-cyan-400 text-cyan-400 px-6 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black"
              >
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact