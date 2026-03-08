// components/Nav.tsx
'use client'

import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { useState } from 'react'
import useActiveSection from '../hooks/.hooks/useActiveSection'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const NAV_ITEMS = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'interests', label: 'Interests' },

  { id: 'contact', label: 'Contact' }
]

export default function Nav() {
  // const pathname = usePathname() || '/'
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id))
  const [open, setOpen] = useState(false)

  const linkClass = (id: string) =>
    `text-sm font-medium px-3 py-1 rounded transition-colors ${active === id ? 'text-cyan-400' : 'text-zinc-400 hover:text-zinc-100'
    }`

  return (
    <>
      <header className="border-b border-white/10 bg-zinc-950/80 backdrop-blur-md fixed inset-x-0 top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-zinc-100">
            Aman Kumar
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`/#${item.id}`} className={linkClass(item.id)}>
                {item.label}
              </a>
            ))}
            {/* <a
              href="/public/resume.pdf"
              download
              className="ml-4 inline-block px-3 py-1 rounded border text-sm text-gray-700 hover:bg-gray-50"
            >
              Resume
            </a> */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-4 inline-block px-3 py-1 rounded border border-white/10 text-sm text-zinc-300 hover:bg-white/5 transition-colors"
            >Resume</a>




          </nav>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              className="p-2 rounded text-zinc-400 hover:bg-white/10 transition-colors"
              onClick={() => setOpen(true)}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-over using headlessui */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 md:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative w-72 max-w-full bg-zinc-950 shadow-xl p-6 border-r border-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-zinc-100">Menu</div>
                  <button
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="p-2 rounded text-zinc-400 hover:bg-white/10 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-4">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.id}
                      href={`/#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={`text-base transition-colors ${active === item.id ? 'text-cyan-400 font-semibold' : 'text-zinc-400 hover:text-zinc-100'}`}
                    >
                      {item.label}
                    </a>
                  ))}

                  <a
                    href="/resume.pdf"
                    download
                    className="mt-4 inline-block px-3 py-2 rounded border border-white/10 text-sm text-zinc-300 hover:bg-white/5 transition-colors text-center"
                    onClick={() => setOpen(false)}
                  >
                    Resume
                  </a>
                </nav>
              </Dialog.Panel>
            </Transition.Child>

            {/* click outside panel */}
            <div className="flex-1" onClick={() => setOpen(false)} />
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
