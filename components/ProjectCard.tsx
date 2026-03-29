// components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";


type Props = {
  slug?: string;
  title: string;
  description: string;
  tech?: string[];
  demo?: string;
  source?: string;
  image?: string;
  comingSoon?: boolean;
};

export default function ProjectCard({
  title,
  description,
  tech = [],
  demo,
  source,
  image,
  comingSoon,
}: Props) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative h-full flex flex-col overflow-hidden rounded-xl glass-card transition-shadow duration-300 ${comingSoon ? "opacity-90" : "hover:shadow-[0_0_15px_rgba(167,139,250,0.3)]"
        }`}
    >
      {comingSoon && (
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold bg-white/90 rounded-full shadow-sm">
            🚧 Coming Soon
          </span>
        </div>
      )}

      {/* ---- image / video wrapper ---- */}
      <div className="relative w-full overflow-hidden bg-zinc-900 group" style={{ minHeight: 192 }}>
        {image ? (
          <>
            {isLoading && (
              <div className="absolute inset-0 z-10">
                <div className="h-full w-full animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />
              </div>
            )}
            <div
              className={`absolute inset-0 transition-transform duration-500 ${isLoading ? "" : "group-hover:scale-105"}`}
            >
              {image.endsWith('.mp4') || image.endsWith('.webm') ? (
                <video
                  src={image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`object-cover object-center w-full h-full transition-opacity duration-500 z-0 ${isLoading ? "opacity-0" : "opacity-100"} ${comingSoon ? "brightness-90" : ""}`}
                  onLoadedData={() => setIsLoading(false)}
                />
              ) : (
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover object-center transition-opacity duration-500 z-0 ${isLoading ? "opacity-0" : "opacity-100"} ${comingSoon ? "brightness-90" : ""}`}
                  onLoad={() => setIsLoading(false)}
                  unoptimized
                />
              )}
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-4xl text-gray-300 select-none">{"</>"}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
          <p className="mt-2 text-sm text-zinc-400">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="shimmer-hover relative z-10 font-mono text-xs px-2.5 py-1 bg-black/50 border border-cyan-500/30 rounded-full text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {!comingSoon && (
          <div className="mt-4 flex gap-3">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 text-zinc-950 font-semibold hover:scale-105 transition-transform duration-300 shimmer-hover"
              >
                Live Demo
              </a>
            )}
            {source && (
              <a
                href={source}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 p-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 shadow-sm hover:bg-white/10 transition-colors flex items-center justify-center"
                aria-label="GitHub Source Code"
              >
                <FaGithub size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
