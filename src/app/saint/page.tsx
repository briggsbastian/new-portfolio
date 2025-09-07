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
  { id: 2, type: "video", src: "/images/silly_bathtub_cat.mp4" },
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
    <div className="relative min-h-screen p-8 text-white">
      <ParticleBackground />
      <NavBar />

      <h1 className="relative z-20 text-center text-4xl font-bold mb-10 mt-20 glow">
        Saint Whiskertonian 🐾
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative z-10">
        {media.map((item) => (
          <div
            key={item.id}
            className={clsx(
              "relative overflow-hidden rounded-2xl shadow-lg transform cursor-pointer glow-box",
              "transition duration-500 ease-in-out",
              "hover:rotate-1 hover:scale-105",
              clickedId === item.id && "animate-bounce"
            )}
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
              <video src={item.src} controls className="w-full h-auto rounded-2xl" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

