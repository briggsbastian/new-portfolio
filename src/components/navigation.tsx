"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
    <Link
    href="/"
    className="text-xl font-bold text-white transition-transform duration-200 hover:scale-105 hover:text-indigo-400"
    >
    Briggs Bastian
    </Link>

    <div className="hidden md:flex space-x-6">
    <Link
    href="/resume"
    className="text-white hover:text-indigo-400 transition-colors"
    >
    Resume
    </Link>
    <Link
    href="/saint"
    className="text-white hover:text-indigo-400 transition-colors"
    >
    Saint the Cat
    </Link>
    </div>

    {/* Mobile Menu Button */}
    <button
    className="md:hidden text-white hover:text-indigo-400"
    onClick={() => setIsOpen(!isOpen)}
    >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
    </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden bg-black/90 backdrop-blur-sm px-4 pb-4 space-y-2">
      <Link
      href="/resume"
      className="block text-white hover:text-indigo-400 transition-colors"
      onClick={() => setIsOpen(false)}
      >
      Resume
      </Link>
      <Link
      href="/saint"
      className="block text-white hover:text-indigo-400 transition-colors"
      onClick={() => setIsOpen(false)}
      >
      Saint the Cat
      </Link>
      </div>
    )}
    </nav>
  );
}
