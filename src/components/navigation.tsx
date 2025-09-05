"use client"

import Link from "next/link"
import { useState } from "react"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black/50 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Briggs Bastian
        </Link>

        <div className="hidden md:flex gap-6">
          <Link href="/resume" className="hover:text-green-400 transition">Resume</Link>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md flex flex-col gap-4 px-6 pb-4">
          <Link href="/resume" className="hover:text-green-400 transition">Resume</Link>
        </div>
      )}
    </nav>
  )
}

