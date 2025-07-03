import React, { useState } from 'react'
import { PROJECTS } from '../constants'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="border-b border-transparent pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>

      <div className="px-4">
        {PROJECTS.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="mb-12 flex flex-wrap items-start lg:justify-center cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="w-full mb-4 lg:mb-0 lg:w-1/4 flex justify-center"
            >
              <motion.img
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12 }}
                className="rounded shadow-md"
                src={project.image}
                alt={project.title}
                width={180}
                height={180}
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-xl">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={`${tech}-${techIndex}`}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {/* Modal */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        className="relative max-w-lg w-full bg-neutral-900 text-white rounded-xl p-8 shadow-lg mx-4"
        initial={{ rotateY: 90, scale: 0.8, opacity: 0 }}
        animate={{ rotateY: 0, scale: 1, opacity: 1 }}
        exit={{ rotateY: 90, scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-neutral-400 hover:text-red-500"
          onClick={() => setSelectedProject(null)}
        >
          <FaTimes />
        </button>

        <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
        <p className="mb-4 text-sm text-neutral-300">
          {selectedProject.fullDescription || selectedProject.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {selectedProject.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-neutral-800 px-2 py-1 text-sm text-purple-400 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {selectedProject.github && (
          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            🔗 Go to GitHub Repo
          </a>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  )
}

export default Projects
