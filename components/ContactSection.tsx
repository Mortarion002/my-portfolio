// components/ContactSection.tsx
'use client'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-zinc-950 relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl font-semibold text-gradient w-fit mx-auto">Get in touch</h2>
        <p className="mt-3 text-zinc-400">
          Looking for collaboration or full-time roles — feel free to reach out.
        </p>

        <a
          href="mailto:resoamamkumar@gmail.com"
          className="mt-6 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 text-zinc-950 font-semibold shimmer-hover hover:scale-105 transition-transform"
        >
          Email me
        </a>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-6 text-2xl text-zinc-400">
          <a
            href="https://github.com/Mortarion002002"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition shimmer-hover"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/CloudKnight002"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition shimmer-hover"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-kumar-537a73296/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition shimmer-hover"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}
