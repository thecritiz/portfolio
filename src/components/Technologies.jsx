import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs, FaDocker, FaPython } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiKubernetes, SiFastapi } from 'react-icons/si'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],
    transition: { duration, repeat: Infinity, repeatType: 'reverse', ease: 'linear' },
  },
})

const TechIcon = ({ duration, label, children }) => (
  <motion.div
    variants={iconVariants(duration)}
    initial='initial'
    animate='animate'
    className='group relative rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-600 transition-colors duration-200'
  >
    {children}
    <span className='
      pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2
      whitespace-nowrap rounded-lg px-2.5 py-1
      text-xs font-mono text-neutral-300
      bg-neutral-900/90 border border-white/10 backdrop-blur-sm
      opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-200 z-10
    '>
      {label}
    </span>
  </motion.div>
)

const Technologies = () => {
  return (
    <div className='border-b border-transparent pb-24'>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl font-semibold'
      >
        Technologies
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4 pb-8'
      >
        <TechIcon duration={2.5} label="React">
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </TechIcon>

        <TechIcon duration={3} label="Next.js">
          <TbBrandNextjs className='text-7xl text-neutral-400' />
        </TechIcon>

        <TechIcon duration={5} label="Docker">
          <FaDocker className='text-7xl text-blue-500' />
        </TechIcon>

        <TechIcon duration={2.5} label="Redis">
          <DiRedis className='text-7xl text-red-700' />
        </TechIcon>

        <TechIcon duration={6} label="Node.js">
          <FaNodeJs className='text-7xl text-green-500' />
        </TechIcon>

        <TechIcon duration={3} label="PostgreSQL">
          <BiLogoPostgresql className='text-7xl text-sky-700' />
        </TechIcon>

        <TechIcon duration={4} label="Python">
          <FaPython className='text-7xl text-yellow-400' />
        </TechIcon>

        <TechIcon duration={3.5} label="Kubernetes">
          <SiKubernetes className='text-7xl text-blue-400' />
        </TechIcon>

        <TechIcon duration={2} label="FastAPI">
          <SiFastapi className='text-7xl text-teal-400' />
        </TechIcon>
      </motion.div>
    </div>
  )
}

export default Technologies
