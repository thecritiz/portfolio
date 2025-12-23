import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/profile.jpg'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Code, Brain, Database, Network } from 'lucide-react'

/* Animation */
const fadeInFromLeft = (delay = 0) => ({
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
})

/* Roles — JSX icons (SAME BEHAVIOR AS ORIGINAL) */
const roles = [
  {
    label: 'Full Stack Developer',
    icon: <Code className="w-4 h-4 mr-2 text-neutral-400 opacity-70" />,
  },
  {
    label: 'AI/ML Researcher',
    icon: <Brain className="w-4 h-4 mr-2 text-neutral-400 opacity-70" />,
  },
  {
    label: 'Database Designer',
    icon: <Database className="w-4 h-4 mr-2 text-neutral-400 opacity-70" />,
  },
  {
    label: 'DevOps Enthusiast',
    icon: <Network className="w-4 h-4 mr-2 text-neutral-400 opacity-70" />,
  },
]

const Hero = () => {
  const labels = roles.map((r) => r.label)

  const [text] = useTypewriter({
    words: labels,
    loop: true,
    delaySpeed: 1500,
  })

  /* EXACT SAME LOGIC AS YOUR ORIGINAL */
  const activeRole = roles.find((r) => r.label === text)
  const currentIcon = activeRole ? activeRole.icon : roles[0].icon

  return (
    <section
      id="hero"
      className="border-b border-transparent py-16 sm:py-20 lg:py-32"
    >
      {/* Max-width container */}
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20">

          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">

              {/* Name */}
              <motion.h1
                variants={fadeInFromLeft(0)}
                initial="hidden"
                animate="visible"
                className="
                  pb-4
                  text-[clamp(2.75rem,6vw,6rem)]
                  font-semibold
                  tracking-[-0.02em]
                  text-center lg:text-left
                "
              >
                Aditya Pandey
              </motion.h1>

              {/* Role (ICON + TEXT CHANGE TOGETHER) */}
              <motion.div
                variants={fadeInFromLeft(0.3)}
                initial="hidden"
                animate="visible"
                className="
                  min-h-[36px] sm:min-h-[40px]
                  flex items-center justify-center lg:justify-start
                  text-[clamp(1.1rem,2.5vw,1.75rem)]
                  font-mono tracking-tight
                  text-transparent bg-gradient-to-r
                  from-neutral-300 via-neutral-400 to-neutral-300
                  bg-clip-text
                "
              >
                <span className="flex items-center">
                  {currentIcon}
                  {text}
                </span>
                <Cursor cursorStyle="|" />
              </motion.div>

              {/* Description */}
              <motion.p
  variants={fadeInFromLeft(0.6)}
  initial="hidden"
  animate="visible"
  className="
    mt-8
    max-w-[60ch]
    text-left
    text-[clamp(1rem,1.2vw,1.125rem)]
    leading-[1.75]
    tracking-[0.01em]
    text-neutral-500
  "
>
  {HERO_CONTENT}
</motion.p>

            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
            >
              <img
                src={profilePic}
                alt="Aditya Pandey"
                className="
                  w-[220px] sm:w-[280px] md:w-[340px] xl:w-[420px]
                  rounded-xl
                  brightness-75 contrast-110 grayscale-[20%]
                  ring-1 ring-neutral-700/50
                "
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
