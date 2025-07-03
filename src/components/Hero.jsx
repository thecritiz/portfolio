import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/profile.png'
import { motion } from 'framer-motion'

const fadeInFromLeft = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
})

const Hero = () => {
  return (
    <section id="hero" className="border-b border-transparent pb-16 lg:mb-32">
      <div className="flex flex-wrap items-center justify-center">
        {/* Left Side (Text) */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-6 lg:px-10">
            <motion.h1
              variants={fadeInFromLeft(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl lg:text-8xl font-light tracking-tight text-center lg:text-left"
            >
              Aditya Pandey
            </motion.h1>

            <motion.span
              variants={fadeInFromLeft(0.4)}
              initial="hidden"
              animate="visible"
              className="text-2xl lg:text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={fadeInFromLeft(0.8)}
              initial="hidden"
              animate="visible"
              className="mt-8 mb-10 max-w-2xl text-justify text-lg leading-relaxed text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full lg:w-1/2 px-6 lg:px-8">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center"
          >
            <img
              src={profilePic}
              alt="Aditya Pandey"
              className="w-[300px] md:w-[400px] h-auto rounded-xl filter brightness-50 contrast-125 shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
