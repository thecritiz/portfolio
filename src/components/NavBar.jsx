import React from 'react'
import logo from '../assets/Logo.png'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const socialLinks = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mainadityapandey' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/thecritiz' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/' },
]

const NavBar = () => (
  <nav className="mb-8 pb-4 px-6 md:px-8 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center">
      <img
        src={logo}
        alt="Aditya Pandey Logo"
        className="w-10 h-auto object-contain mx-2"
      />
    </div>

    

    {/* Social Icons */}
    <div className="flex items-center gap-4">
      {socialLinks.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative flex flex-col items-center cursor-pointer"
        >
          <Icon className="text-2xl transition-transform duration-200 ease-in-out group-hover:scale-125" />
          <span className="absolute top-8 text-xs opacity-0 translate-y-1 transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            {label}
          </span>
        </a>
      ))}
    </div>
  </nav>
)

export default NavBar
