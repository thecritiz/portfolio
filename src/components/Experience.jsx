import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const ExperienceCard = ({ exp, isLeft }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 90, damping: 15 }}
      className={`relative flex flex-col md:w-1/2 ${
        isLeft ? 'md:items-end md:pr-10' : 'md:ml-auto md:items-start md:pl-10'
      }`}
    >
      {/* timeline dot */}
      <span
        aria-hidden
        className="absolute left-1/2 top-0 hidden h-5 w-5 -translate-x-1/2 translate-y-1 md:block"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-purple-600/40" />
        <span className="relative block h-5 w-5 rounded-full bg-purple-600" />
      </span>

      {/* card */}
      <motion.div
        layout
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-full cursor-pointer rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 shadow-lg ring-1 ring-neutral-800 hover:border-purple-500/40 hover:shadow-[0_0_32px_rgba(168,85,247,0.18)] transition-colors duration-300"
      >
        {/* always-visible header */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-neutral-500 font-mono mb-0.5">{exp.year}</p>
            <h6 className="font-semibold text-purple-100 leading-snug">
              {exp.role}
              <span className="text-sm text-neutral-400 font-normal"> — {exp.company}</span>
            </h6>
          </div>
          <motion.span
            animate={{ rotate: hovered ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-neutral-600 text-sm shrink-0"
          >
            ▾
          </motion.span>
        </div>

        {/* expandable content */}
        <AnimatePresence initial={false}>
          {hovered && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/5 mt-4">
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-purple-950/50 px-3 py-1 text-xs font-medium text-purple-300 ring-1 ring-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative border-b border-transparent py-20">
      {/* timeline */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-12 hidden h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-gradient-to-b from-purple-600/0 via-purple-600/40 to-purple-600 md:block"
      />

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-24 text-center text-4xl font-semibold"
      >
        Experience
      </motion.h2>

      <div className="space-y-10 px-6 md:px-12 lg:px-24">
        {EXPERIENCES.map((exp, idx) => (
          <ExperienceCard key={`${exp.company}-${idx}`} exp={exp} isLeft={idx % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
