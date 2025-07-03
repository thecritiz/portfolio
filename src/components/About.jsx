import React, { useRef } from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion, useInView } from 'framer-motion';

// Framer‑motion variants — clean, springy, and symmetric
const fadeLeft = {
  hidden: { opacity: 0, x: -60, rotate: -4 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 80, damping: 14 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60, rotate: 4 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 80, damping: 14 },
  },
};

const About = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="border-b border-transparent py-20"
    >
      {/* animated heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center text-4xl font-semibold"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={isSectionInView ? 'visible' : 'hidden'}
          className="w-full max-w-sm p-4 lg:w-1/2"
        >
          <motion.img
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            className="rounded-2xl shadow-md"
            src={aboutImg}
            alt="Aditya Pandey Profile"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate={isSectionInView ? 'visible' : 'hidden'}
          className="w-full max-w-xl p-4 lg:w-1/2"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-justify py-6"
          >
            {ABOUT_TEXT}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
