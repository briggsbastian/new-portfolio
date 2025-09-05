// app/page.tsx
import Link from 'next/link'
import Image from "next/image"
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import ParticleBackground from '../components/particlebackground.tsx'
import NavBar from '../components/navigation.tsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <ParticleBackground />
      <NavBar />

      <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-500 px-4 py-1 rounded-full text-sm font-medium border border-green-200 animate-pulse">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for new opportunities
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-tight bg-gradient-to-r from-blue-300 to-green-500 text-transparent bg-clip-text">
            Briggs Bastian
          </h1>
          <p className="text-xl text-green-300">
            Programmer, Security Professional, and Linux Enthusiast
          </p>
          <p className="text-lg text-gray-300 max-w-xl">
            Cybersecurity professional with a strong technical foundation and a passion for Linux systems. Enthusiastic about continuous learning, problem-solving, and exploring creative outlets such as music.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/resume" className="flex items-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
              View My Resume
            </Link>
            <Link href="mailto:briggsbastian@pm.me" className="flex items-center gap-2 px-5 py-2 bg-gray-200 text-gray-900 rounded-lg shadow hover:bg-gray-300 transition">
              Get In Touch
            </Link>
          </div>
        </div>

          <div className="w-full md:w-[300px] bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 text-center space-y-4">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-green-500 to-blue-500 mx-auto flex items-center justify-center text-4xl text-white shadow-lg">
            <Image src="/images/profile.png" alt="Profile Picture" width={120} height={120} className="rounded-full" />
          </div>

          <h3 className="text-lg font-semibold leading-tight bg-gradient-to-r from-green-800 to-green-300 text-transparent bg-clip-text">Based in Seattle</h3>

          <div className="grid gap-4 text-center">
            <div>
              <div className="text-green-500 font-bold text-xl">3+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-3">
            <a href="https://linkedin.com/in/briggs-bastian" target="_blank" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 text-lg hover:bg-blue-200 transition">
              <IoLogoLinkedin size={20} />
            </a>
            <a href="https://github.com/briggsbastian" target="_blank" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-800 text-lg hover:bg-gray-200 transition">
              <IoLogoGithub size={20} />
            </a>
            <a href="https://twitter.com/bboostin" target="_blank" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 text-lg hover:bg-blue-200 transition">
              <IoLogoTwitter size={20} />
            </a>
            <a href="mailto:briggsbastian@pm.me" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-800 text-lg hover:bg-gray-200 transition">
              📧
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

