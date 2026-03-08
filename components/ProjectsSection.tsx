// components/ProjectsSection.tsx
"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    // Changed 'py-20' to 'pt-10 pb-20' to reduce the top gap
    <section id="projects" className="pt-10 pb-20 bg-zinc-950 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-semibold text-gradient w-fit">Selected Projects</h2>
        <motion.p
          className="mt-3 text-zinc-400 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Case studies, future ideas, and links to code or live demos.
        </motion.p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((p) => (
            <motion.div
              key={p.slug}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}