import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Duplicate for seamless infinite loop
  const doubled = [...PROJECTS, ...PROJECTS];

  return (
    <section id="projects" className="border-b border-transparent pb-20 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>

      {/* Edge fade masks */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg-fade, #0a0a0f), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--bg-fade, #0a0a0f), transparent)" }}
        />

        {/* Ticker track */}
        <div
          className="flex gap-5 w-max"
          style={{
            animation: "ticker 35s linear infinite",
            willChange: "transform",
          }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = "running"}
        >
          {doubled.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group flex-shrink-0"
              style={{ width: "260px" }}
            >
              <div
                className="
                  relative rounded-2xl overflow-hidden
                  border border-white/10
                  bg-white/[0.04]
                  transition-all duration-300
                  hover:border-purple-500/40
                  hover:shadow-[0_0_32px_rgba(168,85,247,0.2)]
                "
              >
                {/* Image zone with whitish radial glow */}
                <div
                  className="relative flex items-center justify-center h-48 overflow-hidden"
                  style={{
                    background: "radial-gradient(ellipse at 50% 55%, rgba(245,242,255,0.13) 0%, rgba(200,190,255,0.06) 45%, transparent 72%)",
                  }}
                >
                  {/* Inner soft white glow that intensifies on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(ellipse at 50% 55%, rgba(255,252,255,0.18) 0%, transparent 65%)",
                    }}
                  />

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      relative z-10
                      w-28 h-28 object-contain
                      select-none pointer-events-none
                      transition-all duration-500
                      group-hover:scale-110
                      drop-shadow-[0_4px_20px_rgba(200,190,255,0.4)]
                      group-hover:drop-shadow-[0_6px_28px_rgba(200,190,255,0.65)]
                    "
                  />
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white mb-1.5 truncate">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-full text-[10px] border border-purple-500/20 bg-purple-500/8 text-purple-300/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] text-neutral-600">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe injected via style tag */}
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-lg w-full rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 30 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-[2px] w-full bg-gradient-to-r from-purple-600 via-violet-400 to-cyan-500" />

              {/* Modal image header */}
              <div
                className="relative flex items-center justify-center h-36"
                style={{
                  background: "radial-gradient(ellipse at 50% 60%, rgba(245,242,255,0.12) 0%, rgba(200,190,255,0.05) 50%, transparent 75%)",
                }}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="relative z-10 w-20 h-20 object-contain drop-shadow-[0_4px_20px_rgba(200,190,255,0.5)]"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{selectedProject.title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full text-xs bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-2.5 text-sm font-medium hover:from-purple-500 hover:to-violet-500 transition-all duration-200 shadow-[0_4px_16px_rgba(168,85,247,0.3)]"
                  >
                    <FaGithub size={14} />
                    View Repository
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-neutral-400 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-200"
              >
                <FaTimes size={11} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;