"use client";

import Link from "next/link";
import ParticleBackground from "../../components/particlebackground";
import NavBar from "../../components/navigation";

export default function Resume() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <ParticleBackground />
      <NavBar />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 glow">
            Briggs Bastian
          </h1>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="mailto:briggsbastian@pm.me" className="text-gray-300 hover:text-green-600 transition glow-box">Email</Link>
            <Link href="https://github.com/briggsbastian" className="text-gray-300 hover:text-teal-400 transition glow-box">GitHub</Link>
            <Link href="https://linkedin.com/in/briggs-bastian" className="text-gray-300 hover:text-purple-500 transition glow-box">LinkedIn</Link>
          </div>
          <Link
            href="https://docs.google.com/document/d/1-CE8oNpvgX9QBiURO85Yp9uo3061Fz8Dl_r49UiNbR0/edit?usp=sharing"
            target="_blank"
            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg font-semibold text-black"
          >
            Download Resume
          </Link>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-teal-400 mb-4 glow">Experience</h2>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box">
              <h3 className="text-xl font-semibold text-purple-500 glow">Kraft Kennedy</h3>
              <p className="text-gray-300 text-sm">Aug 2022 – Sept 2025</p>
              <p className="text-gray-200">Former subject matter expert for ConnectWise SIEM...</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box">
              <h3 className="text-xl font-semibold text-purple-500 glow">Sprout Mortgage</h3>
              <p className="text-gray-300 text-sm">Feb 2022 – July 2022</p>
              <p className="text-gray-200">Assisted employees with basic IT support...</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box">
              <h3 className="text-xl font-semibold text-purple-500 glow">JNC Management</h3>
              <p className="text-gray-300 text-sm">2019 to 2021</p>
              <p className="text-gray-200">Operated as a sales representative...</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box">
              <h3 className="text-xl font-bold text-purple-500 glow">McDonald's Crew Member</h3>
              <p className="text-gray-300 text-sm">2017 – 2019</p>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-purple-500 mb-4 glow">Skills</h2>

            {["SIEM / IDS", "EDR", "DNS", "Email Hygiene", "Security Awareness Training", "Networking Infrastructure", "Operating Systems"].map(skill => (
              <div key={skill} className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl glow-box">
                <h3 className="font-semibold text-teal-300 glow">{skill}</h3>
                <p className="text-gray-200">Details about {skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-purple-500 mb-4 glow">Education</h2>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box">
            <h3 className="text-xl font-semibold glow">UCSD Cybersecurity Bootcamp</h3>
            <p className="text-gray-300">2021</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box">
            <h3 className="text-xl font-semibold glow">Simi Valley High School</h3>
            <p className="text-gray-300">2019</p>
          </div>
        </div>
      </div>
    </div>
  );
}

