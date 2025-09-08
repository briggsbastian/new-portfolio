"use client"

import Link from "next/link"
import ParticleBackground from "../../components/particlebackground"
import NavBar from "../../components/navigation"

export default function Resume() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <ParticleBackground />
      <NavBar />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-16">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold glow-animated">
            Briggs Bastian
          </h1>
          <div className="flex justify-center gap-4 mt-2">
            <Link
              href="mailto:briggsbastian@pm.me"
              className="text-gray-300 hover:text-green-400 transition"
            >
              Email
            </Link>
            <Link
              href="https://github.com/briggsbastian"
              className="text-gray-300 hover:text-teal-400 transition"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/briggs-bastian"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              LinkedIn
            </Link>
          </div>
          <Link
            href="https://docs.google.com/document/d/1-CE8oNpvgX9QBiURO85Yp9uo3061Fz8Dl_r49UiNbR0/edit?usp=sharing"
            target="_blank"
            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg font-semibold text-black hover:from-purple-500 hover:to-teal-400 transition"
          >
            Download Resume
          </Link>
        </header>

        {/* Experience + Skills */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Experience */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-teal-400 mb-4 glow">Experience</h2>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box space-y-2">
              <h3 className="text-xl font-semibold text-purple-400 glow">Kraft Kennedy</h3>
              <p className="text-gray-300 text-sm">Aug 2022 – Sept 2025</p>
              <p className="text-gray-200">
                Former subject matter expert for ConnectWise SIEM, creating and curating alerts related to Kibana. Assisted clients with SIEM onboarding, tuning, and any necessary action warranted from alerts. Also worked with EDR, DNS and email hygiene solutions to ensure client security.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box space-y-2">
              <h3 className="text-xl font-semibold text-purple-400 glow">Sprout Mortgage</h3>
              <p className="text-gray-300 text-sm">Feb 2022 – July 2022</p>
              <p className="text-gray-200">
                Assisted employees with basic IT support, password resets, and troubleshooting office software such as the Office365 stack and Encompass.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box space-y-2">
              <h3 className="text-xl font-semibold text-purple-400 glow">JNC Management</h3>
              <p className="text-gray-300 text-sm">2019 – 2021</p>
              <p className="text-gray-200">
                Operated as a sales representative in the Simi Valley and Topanga areas, and managed the Northridge location.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box space-y-2">
              <h3 className="text-xl font-bold text-yellow-400 glow">McDonald's Crew Member</h3>
              <p className="text-gray-300 text-sm">2017 – 2019</p>
            </div>
          </div>

          {/* Skills */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4 glow">Skills</h2>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl glow-box">
              <h3 className="font-semibold text-teal-300 glow">SIEM / IDS</h3>
              <p className="text-gray-200">
                ConnectWise SIEM, Wazuh, BlackPoint, Microsoft Sentinel
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl glow-box">
              <h3 className="font-semibold text-teal-300 glow">EDR</h3>
              <p className="text-gray-200">
                SentinelOne, Microsoft Defender for Endpoint
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl glow-box">
              <h3 className="font-semibold text-teal-300 glow">DNS</h3>
              <p className="text-gray-200">
                Atakama, Cisco Umbrella/OpenDNS
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl glow-box">
              <h3 className="font-semibold text-teal-300 glow">Email Hygiene</h3>
              <p className="text-gray-200">
                Mimecast, Barracuda, Tessian
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl glow-box">
              <h3 className="font-semibold text-teal-300 glow">Security Awareness Training</h3>
              <p className="text-gray-200">
                KnowBe4, BreachSecureNow
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl glow-box">
              <h3 className="font-semibold text-teal-300 glow">Networking Infrastructure</h3>
              <p className="text-gray-200">
                Cisco Catalyst & Meraki switches and access points, Ubiquiti Unifi access points and switches, SonicWall firewalls, Fortinet firewalls, PFSense, and others.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl glow-box">
              <h3 className="font-semibold text-teal-300 glow">Operating Systems</h3>
              <p className="text-gray-200">
                Linux, Windows, macOS
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4 glow">Education</h2>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box space-y-2">
            <h3 className="text-xl font-semibold glow">UCSD Cybersecurity Bootcamp</h3>
            <p className="text-gray-300">2021</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box space-y-2">
            <h3 className="text-xl font-semibold glow">Simi Valley High School</h3>
            <p className="text-gray-300">2019</p>
          </div>
        </div>
      </div>
    </div>
  )
}

