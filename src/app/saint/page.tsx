"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import ParticleBackground from "@/components/particlebackground";
import NavBar from "@/components/navigation";

type Media = {
  id: number;
  type: "image" | "video";
  src: string;
  alt?: string;
};

const media: Media[] = [
  { id: 1, type: "image", src: "/images/on_desk.jpg", alt: "Cat chilling" },
  { id: 2, type: "video", src: "/images/silly_bathtub_cat.mp4", alt: "Bathtub antics" },
  { id: 3, type: "image", src: "/images/what.jpg", alt: "Cat being silly" },
  { id: 4, type: "image", src: "/images/window_guy.jpg", alt: "Cat playing" },
];

export default function CatPage() {
  const [clickedId, setClickedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setClickedId(id);
    setTimeout(() => setClickedId(null), 500);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-x-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <NavBar className="relative z-20" />

      {/* Header Container */}
      <div className="relative z-10 flex flex-col items-center pt-20 pb-10">
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl font-semibold glow-subtle pb-2">
          Saint Whiskertonian
        </h2>

        {/* Main Header */}
        <h1 className="text-4xl md:text-5xl font-bold glow-white text-center">
          My Cat 🐾
        </h1>
      </div>

      {/* Gallery */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {media.map((item) => (
          <div
            key={item.id}
            className={clsx(
              "relative overflow-hidden rounded-2xl transform cursor-pointer",
              "transition duration-500 ease-in-out",
              "hover:scale-105 hover:rotate-1 hover:shadow-xl hover:animate-glowPulse",
              clickedId === item.id && "animate-bounce"
            )}
            onClick={() => handleClick(item.id)}
          >
            {item.type === "image" ? (
              <>
                <Image
                  src={item.src}
                  alt={item.alt || "Cat image"}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                {item.alt && (
                  <p className="absolute bottom-2 left-2 text-sm text-white glow-caption">
                    {item.alt}
                  </p>
                )}
              </>
            ) : (
              <div className="relative w-full rounded-2xl overflow-hidden">
                <video
                  src={item.src}
                  controls
                  className="w-full h-auto rounded-2xl"
                />
                {item.alt && (
                  <p className="absolute bottom-2 left-2 text-sm text-white glow-caption">
                    {item.alt}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

