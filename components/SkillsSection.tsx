// components/SkillsSection.tsx
'use client'
import React from 'react'
import { skills } from '../data/skills'

export default function SkillsSection() {
  return (
    // Changed 'py-20' to 'pt-20 pb-6' to reduce the gap below this section
    <section id="skills" className="pt-20 pb-6 bg-zinc-950 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-semibold text-gradient w-fit">Skills</h2>
        <p className="mt-3 text-zinc-400 max-w-2xl">
          Core skills I use daily and continuously improve.
        </p>

        {/* Seamless Infinite Marquee Container */}
        <div
          className="mt-8 flex overflow-hidden w-full group py-4"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          {/* First track */}
          <div className="flex shrink-0 min-w-full justify-around gap-4 animate-scroll group-hover:[animation-play-state:paused]">
            {skills.map((skill) => (
              <button
                key={`${skill.name}-1`}
                className="skill-pill"
                type="button"
                data-skill={skill.name}
              >
                {skill.name}
              </button>
            ))}
          </div>

          {/* Duplicate track for flawless looping */}
          <div
            className="flex shrink-0 min-w-full justify-around gap-4 animate-scroll group-hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {skills.map((skill) => (
              <button
                key={`${skill.name}-2`}
                className="skill-pill"
                type="button"
                tabIndex={-1}
                data-skill={skill.name}
              >
                {skill.name}
              </button>
            ))}
          </div>
        </div>

        {/* Inline style to ensure the animation works independently of globals.css */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}} />
      </div>
    </section>
  )
}