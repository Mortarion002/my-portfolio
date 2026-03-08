// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Script from "next/script";
import { Plus_Jakarta_Sans, Fira_Code } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata = {
  title: 'Aman Kumar — Full Stack Developer',
  description: 'I build cloud-native apps with Java, React, and Spring Boot.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} ${firaCode.variable}`}>
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        {/* <Script
          src="/oneko/oneko.js"
          data-cat="/oneko/oneko.gif"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  )
}
