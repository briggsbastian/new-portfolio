"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-4">404</h1>
      <p className="text-xl mb-6">Why are you here? How did you get here? Go back now!</p>
      <Link
        href="/"
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Go Home
      </Link>
    </div>
  )
}

