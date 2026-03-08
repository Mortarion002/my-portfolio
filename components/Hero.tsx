'use client'

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 md:pt-28 pb-6">
      <div className="container mx-auto px-6">
        <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold leading-tight text-zinc-100">
          Hi, I’m Aman Kumar — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">AI Engineer</span>
        </motion.h1>

        <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }} className="mt-6 text-lg text-zinc-400 max-w-2xl">
          I&apos;m an AI Engineer focused on designing intelligent, agentic workflows and advanced RAG systems that solve real-world problems. I love taking AI models out of the notebook and into production by crafting the complete experience—from intuitive user interfaces down to the resilient, containerized cloud infrastructure and high-performance microservices that power them behind the scenes.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="mt-8 flex gap-3">
          {/* <a href="#projects" className="px-5 py-2 rounded-lg bg-indigo-600 text-white">View Projects</a>
          <a href="#contact" className="px-5 py-2 rounded-lg border text-gray-700">Contact</a> */}
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 text-zinc-950 font-semibold shimmer-hover hover:scale-105 transition-transform"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full border border-white/10 text-zinc-300 shimmer-hover hover:bg-white/5 hover:scale-105 transition-all"
          >
            Contact
          </a>


        </motion.div>
      </div>
    </section>
  );
}
