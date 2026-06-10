import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="border-b border-transparent pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>

      <div className="px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div
                className="
                  relative
                  h-[420px]
                  overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all duration-500
                  shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                  hover:border-purple-500/50
                  hover:shadow-[0_0_48px_rgba(168,85,247,0.3)]
                "
              >
                {/* Ambient glow layer on hover */}
                <div
                  className="
                    absolute inset-0 z-0
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10
                  "
                />

                {/* Image area */}
                <div className="relative z-10 flex items-center justify-center h-[220px] pt-6 px-6">
                  {/* Soft circular glow behind image */}
                  <div
                    className="
                      absolute
                      w-44 h-44
                      rounded-full
                      bg-purple-500/15
                      blur-2xl
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                    "
                  />

                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="
                      relative z-10
                      w-full
                      max-w-[180px]
                      max-h-[180px]
                      object-contain
                      select-none
                      pointer-events-none
                      drop-shadow-[0_8px_24px_rgba(168,85,247,0.45)]
                    "
                    whileHover={{ scale: 1.07, rotate: 1.5 }}
                    transition={{ type: "spring", stiffness: 180, damping: 14 }}
                  />
                </div>

                {/* Subtle divider */}
                <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>

                  <p
                    className="
                      text-sm text-neutral-400 leading-relaxed
                      opacity-0 translate-y-3
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-400
                    "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                      flex flex-wrap gap-1.5 mt-3
                      opacity-0 translate-y-3
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-500 delay-75
                    "
                  >
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="
                          px-2.5 py-0.5
                          rounded-full text-xs
                          border border-purple-500/25
                          bg-purple-500/10
                          text-purple-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className="
                      mt-3 flex items-center gap-1
                      text-xs text-purple-400/80
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500 delay-100
                    "
                  >
                    <span>View details</span>
                    <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="
              fixed inset-0 z-50
              flex items-center justify-center
              bg-black/75 backdrop-blur-md p-4
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="
                relative max-w-2xl w-full
                rounded-3xl
                border border-white/10
                bg-neutral-900/95 backdrop-blur-xl
                shadow-2xl overflow-hidden
              "
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 30 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500" />

              <div className="p-8">
                {/* Top row: image + title */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-purple-500/15 blur-md" />
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="
                        relative z-10 w-12 h-12 object-contain
                        drop-shadow-[0_4px_12px_rgba(168,85,247,0.5)]
                      "
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-neutral-300 leading-relaxed mb-6 text-sm">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        px-3 py-1 rounded-full text-xs
                        bg-purple-500/10 border border-purple-500/20
                        text-purple-300
                      "
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
                    className="
                      inline-flex items-center gap-2
                      rounded-xl
                      bg-gradient-to-r from-purple-600 to-violet-600
                      px-5 py-2.5 text-sm font-medium
                      hover:from-purple-500 hover:to-violet-500
                      transition-all duration-200
                      shadow-[0_4px_16px_rgba(168,85,247,0.35)]
                    "
                  >
                    <FaGithub size={15} />
                    View Repository
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="
                  absolute top-5 right-5
                  w-8 h-8 rounded-full
                  flex items-center justify-center
                  bg-white/5 border border-white/10
                  text-neutral-400 hover:text-red-400
                  hover:bg-red-500/10 hover:border-red-500/20
                  transition-all duration-200
                "
              >
                <FaTimes size={13} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;