"use client"

import Link from "next/link"
import ParticleBackground from "../../components/particlebackground"
import NavBar from "../../components/navigation"

export default function Projects() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <ParticleBackground />
      <NavBar />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold glow-animated">
            Projects
          </h1>
          <p className="text-gray-300 text-lg">
            A collection of my active work — spanning web, apps, and games.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-teal-400 glow">Personal Website</h2>
            <p className="text-gray-200">
              This portfolio website, designed with Next.js, TailwindCSS, and interactive particle backgrounds. 
              Features include a glowing theme, resume integration, and a cat gallery.
            </p>
            <div className="flex gap-4 mt-auto">
              <Link
                href="https://github.com/briggsbastian/new-portfolio"
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-teal-400 rounded-lg text-black font-semibold hover:from-teal-400 hover:to-purple-500 transition"
              >
                Go to project
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 glow">Elder Tracker App</h2>
            <p className="text-gray-200">
              An app in testing made for navigating the issues of taking care of your loved ones about to enter an elder care facility. It's largely a calendar app with reminders, notes and resources for families navigating that difficult time. 
            </p>
            <div className="flex gap-4 mt-auto">
              <Link
                href="https://github.com/briggsbastian/ElderCare"
                className="px-4 py-2 bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg text-black font-semibold hover:from-purple-500 hover:to-teal-400 transition"
              >
                Go to project
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl glow-box flex flex-col space-y-4 md:col-span-2">
            <h2 className="text-2xl font-bold text-yellow-400 glow">Gesture (Video Game)</h2>
            <p className="text-gray-200">
              A Souls-like arena fighting game with unique gesture-based combat mechanics. 
              Built in Godot, featuring 1v1 and 3v3 multiplayer battles.
            </p>
            <div className="flex gap-4 mt-auto">
              <Link
                href="#"
                className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-lg text-black font-semibold hover:from-purple-500 hover:to-yellow-400 transition"
              >
                In Development
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

