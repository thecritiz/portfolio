import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-8">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
        <FaInstagram />
      </div>
    </nav>
  )
}

export default NavBar