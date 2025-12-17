import React, { useRef } from 'react'
import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion, useInView } from 'framer-motion'

// Animations — UNCHANGED
const fadeLeft = {
  hidden: { opacity: 0, x: -60, rotate: -4 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 80, damping: 14 },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: 60, rotate: 4 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 80, damping: 14 },
  },
}

const About = () => {
  const sectionRef = useRef(null)
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.3 })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="border-b border-transparent py-16 sm:py-20 lg:py-32"
    >
      {/* Max-width container (NEW, matches Hero) */}
      <div className="mx-auto max-w-[1400px] px-4">

        {/* Heading — UNCHANGED */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={
            isSectionInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-4xl font-semibold"
        >
          About <span className="text-neutral-500">Me</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-20">

          {/* Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isSectionInView ? 'visible' : 'hidden'}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              src={aboutImg}
              alt="Aditya Pandey Profile"
              className="
                w-[220px] sm:w-[280px] md:w-[340px] xl:w-[420px]
                rounded-xl
                brightness-75 contrast-110 grayscale-[20%]
                ring-1 ring-neutral-700/50
              "
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={isSectionInView ? 'visible' : 'hidden'}
            className="w-full lg:w-1/2"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="
                max-w-[60ch]
                text-left
                text-[clamp(1rem,1.2vw,1.125rem)]
                leading-relaxed
                text-neutral-500
              "
            >
              {ABOUT_TEXT}
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
