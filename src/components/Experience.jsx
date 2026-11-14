
import { useState } from 'react'

import Certificate from '../assets/Kho Kho world cup certificate.jpeg'
import p1 from '../assets/khokho/1.jpg'
import p2 from '../assets/khokho/2.jpg'
import p3 from '../assets/khokho/3.jpg'
import p4 from '../assets/khokho/4.jpg'

import q1 from '../assets/ropeskipping/q1.jpeg'
import q2 from '../assets/ropeskipping/q2.jpg'

function Experience() {
  const [activeTab, setActiveTab] = useState('technical')
  const [showKhoKhoPhotos, setShowKhoKhoPhotos] = useState(false)
  const [showropeskippingphotos, setShowRopeSkippingPhotos] = useState(false)

  const activeButton =
    'btn-primary px-8 py-3 rounded-xl shadow-[0_0_25px_rgba(34,211,238,0.5)]'

  const inactiveButton =
    'bg-[#1e293b] text-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition duration-300'

  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-16 md:py-24 bg-[#111827] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Experience
        </h2>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">

          <button
            onClick={() => setActiveTab('technical')}
            className={
              activeTab === 'technical'
                ? activeButton
                : inactiveButton
            }
          >
            Technical
          </button>

          <button
            onClick={() => setActiveTab('event')}
            className={
              activeTab === 'event'
                ? activeButton
                : inactiveButton
            }
          >
            Event Management
          </button>

        </div>

        {/* TECHNICAL EXPERIENCE */}
        {activeTab === 'technical' && (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* NIC Internship */}
            <div className="bg-[#1e293b] p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition duration-300">

              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                NIC Internship
              </h3>

              <p className="text-gray-400 mb-4">
                National Informatics Centre
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Built a real-time Security Devices Monitoring Dashboard
                displaying traffic analysis, attack statistics,
                sessions, and security insights during internship
                in Cyber and Information Security Systems division.
              </p>

              <a
                href="https://github.com/Arpit23131/Security-Devices-Monitoring-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2 rounded-lg"
              >
                GitHub
              </a>

            </div>

            {/* Full Stack Development */}
            <div className="bg-[#1e293b] p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition duration-300">

              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                Full Stack Development
              </h3>

              <p className="text-gray-400 mb-4">
                Personal & Academic Projects
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Developing scalable web applications and modern
                frontend interfaces using React, Tailwind CSS,
                JavaScript, backend technologies, and responsive UI principles.
              </p>

              <a
                href="https://github.com/Arpit23131"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2 rounded-lg"
              >
                GitHub
              </a>

            </div>

          </div>
        )}

        {/* EVENT MANAGEMENT EXPERIENCE */}
        {activeTab === 'event' && (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Kho Kho World Cup */}
            <div className="bg-[#1e293b] p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition duration-300">

              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                Kho Kho World Cup India 2025
              </h3>

              <p className="text-gray-400 mb-2">
                Accreditation Coordinator
              </p>

              <p className="text-gray-500 mb-4">
                Kho Kho Federation of India
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Managed accreditation operations and coordinated
                participant access management during the international
                sporting event.
              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href={Certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-5 py-2 rounded-lg"
                >
                  Certificate
                </a>

                <button
                  onClick={() => setShowKhoKhoPhotos(!showKhoKhoPhotos)}
                  className="btn-outline px-5 py-2 rounded-lg hover:scale-105"
                >
                  {showKhoKhoPhotos ? 'Hide Photos' : 'Photos'}
                </button>

              </div>

              {showKhoKhoPhotos && (

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">

                  <img
                    src={p1}
                    alt="Kho Kho Event"
                    className="w-full rounded-xl"
                  />

                  <img
                    src={p2}
                    alt="Kho Kho Event"
                    className="w-full rounded-xl"
                  />

                  <img
                    src={p3}
                    alt="Kho Kho Event"
                    className="w-full rounded-xl"
                  />

                  <img
                    src={p4}
                    alt="Kho Kho Event"
                    className="w-full rounded-xl"
                  />

                </div>

              )}

            </div>

            {/* Rope Skipping */}
            <div className="bg-[#1e293b] p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition duration-300">

              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                17th Delhi State Rope Skipping Championship
              </h3>

              <p className="text-gray-400 mb-2">
                IT Coordinator
              </p>

              <p className="text-gray-500 mb-4">
                Rope Skipping Federation of India
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Coordinated technical operations and managed IT-related
                event workflows during the championship event.
              </p>

              <button
                onClick={() =>
                  setShowRopeSkippingPhotos(!showropeskippingphotos)
                }
                className="btn-outline px-5 py-2 rounded-lg hover:scale-105"
              >
                {showropeskippingphotos ? 'Hide Photos' : 'Photos'}
              </button>

              {showropeskippingphotos && (

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">

                  <img
                    src={q1}
                    alt="Rope Skipping Event"
                    className="w-full rounded-xl"
                  />

                  <img
                    src={q2}
                    alt="Rope Skipping Event"
                    className="w-full rounded-xl"
                  />

                </div>

              )}

            </div>

            {/* Cultural Council */}
            <div className="bg-[#1e293b] p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition duration-300">

              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                Cultural Council, IIIT Delhi
              </h3>

              <p className="text-gray-400 mb-4">
                Operations Head
              </p>

              <p className="text-gray-300 leading-relaxed">
                Managed operational activities, event coordination,
                team workflows, and execution planning for various
                cultural events and student activities.
              </p>

            </div>

            {/* Sports Council */}
            <div className="bg-[#1e293b] p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition duration-300">

              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                Sports Council, IIIT Delhi
              </h3>

              <p className="text-gray-400 mb-4">
                Undergraduate Representative (2025–2026)
              </p>

              <p className="text-gray-300 leading-relaxed">
                Organized and coordinated multiple intra-college sports tournaments,
                managed event operations, and contributed to planning and execution
                of sports activities within the institute.
              </p>

            </div>

          </div>
        )}

      </div>
    </section>
  )
}

export default Experience
