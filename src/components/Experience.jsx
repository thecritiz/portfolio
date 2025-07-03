import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

// ─── Framer-motion variant for every card ───
const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 15 },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="relative border-b border-transparent py-20">
      {/* timeline */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-12 hidden h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-gradient-to-b from-purple-600/0 via-purple-600/40 to-purple-600 md:block"
      />

      {/* heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-24 text-center text-4xl font-semibold"
      >
        Experience
      </motion.h2>

      <div className="space-y-24 px-6 md:px-12 lg:px-24">
        {EXPERIENCES.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={`${exp.company}-${idx}`}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} 
              className={`relative flex flex-col md:w-1/2 ${
                isLeft
                  ? 'md:items-end md:pr-10'
                  : 'md:ml-auto md:items-start md:pl-10'
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
              <div className="rounded-2xl bg-neutral-900/70 p-6 shadow-lg ring-1 ring-neutral-700 backdrop-blur-lg">
                <p className="mb-1 text-sm text-neutral-400">{exp.year}</p>
                <h6 className="mb-2 font-semibold text-purple-100">
                  {exp.role}{' '}
                  <span className="text-sm text-neutral-400">– {exp.company}</span>
                </h6>
                <p className="mb-4 text-neutral-300">{exp.description}</p>

                {/* tech pills */}
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
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
