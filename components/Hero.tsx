'use client'

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 md:pt-28 pb-6">
      <div className="container mx-auto px-6">
        <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m Aman Kumar — <span className="text-indigo-600">AI Engineer</span>
        </motion.h1>

        <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }} className="mt-6 text-lg text-gray-600 max-w-2xl">
          I&aposm an AI Engineer focused on designing intelligent, agentic workflows and advanced RAG systems that solve real-world problems. I love taking AI models out of the notebook and into production by crafting the complete experience—from intuitive user interfaces down to the resilient, containerized cloud infrastructure and high-performance microservices that power them behind the scenes.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="mt-8 flex gap-3">
          {/* <a href="#projects" className="px-5 py-2 rounded-lg bg-indigo-600 text-white">View Projects</a>
          <a href="#contact" className="px-5 py-2 rounded-lg border text-gray-700">Contact</a> */}
          <a
              href="#projects"
              className="px-5 py-2 rounded-lg bg-indigo-600 text-white shimmer-hover"
            >
              View Projects
          </a>
          <a
              href="#contact"
              className="px-5 py-2 rounded-lg border text-gray-700 shimmer-hover"
            >
              Contact
          </a>


        </motion.div>
      </div>
    </section>
  );
}
