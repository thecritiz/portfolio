import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => (
  <footer className="border-t border-white/[0.06] mt-8 py-8 px-6">
    <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-neutral-600 font-mono">
        © {new Date().getFullYear()} Aditya Pandey. All rights reserved.
      </p>

      <div className="flex items-center gap-5">
        <a
          href="https://www.linkedin.com/in/mainadityapandey"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-neutral-600 hover:text-neutral-300 transition-colors duration-200"
        >
          <FaLinkedin size={16} />
        </a>
        <a
          href="https://github.com/thecritiz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-neutral-600 hover:text-neutral-300 transition-colors duration-200"
        >
          <FaGithub size={16} />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
