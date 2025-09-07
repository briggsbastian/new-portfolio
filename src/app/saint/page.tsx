"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import ParticleBackground from "@/components/particlebackground";
import Navbar from "@/components/navigation";

type Media = {
  id: number;
  type: "image" | "video";
  src: string;
  alt?: string;
};

const media: Media[] = [
  { id: 1, type: "image", src: "/images/on_desk.jpg"},
  { id: 2, type: "video", src: "/images/silly_bathtub_cat.mp4" },
  { id: 3, type: "image", src: "/images/what.jpg"},
  { id: 4, type: "image", src: "/images/window_guy.jpg"},
];

export default function CatPage() {
  const [clickedId, setClickedId] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleClick = (id: number) => {
    setClickedId(id);
    setTimeout(() => setClickedId(null), 500);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <Navbar className="fixed top-0 left-0 w-full z-30" />

      <div className="relative z-10 p-5 pt-32">
        {/* Particle background */}
        <ParticleBackground className="absolute inset-0 -z-10" />

        {/* Header */}
        <h1
          className="relative z-20 text-center text-4xl font-bold mb-10 animate-greenPulse hover:animate-headerGlow transition-all duration-500"
          data-header-glow
          style={{
            '--header-glow-x': `${mousePos.x}%`,
            '--header-glow-y': `${mousePos.y}%`,
          } as React.CSSProperties}
        >
          Saint Whiskertonian🐾
        </h1>

        {/* Gallery Grid */}
        <div className="relative z-20 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {media.map((item) => (
            <div
              key={item.id}
              className={clsx(
                "relative overflow-hidden rounded-2xl shadow-2xl transform cursor-pointer transition duration-500 ease-in-out",
                "hover:rotate-1 hover:scale-105 hover:animate-glowPulse",
                clickedId === item.id && "animate-bounce"
              )}
              data-glow
              style={{
                '--glow-x': `${mousePos.x}%`,
                '--glow-y': `${mousePos.y}%`,
              } as React.CSSProperties}
              onClick={() => handleClick(item.id)}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt || "Cat image"}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="w-full h-auto rounded-2xl"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

