import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0a0a0f, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0a0a0f, transparent)" }}
        />

        {/* Ticker track */}
        <div
          className="flex w-max"
          style={{ animation: "ticker 35s linear infinite", willChange: "transform" }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = "running"}
        >
          {doubled.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group flex-shrink-0 mr-4"
              style={{ width: "280px" }}
            >
              {/* Glassy card */}
              <div
                className="
                  relative rounded-2xl overflow-hidden
                  border border-white/[0.08]
                  bg-white/[0.04]
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-purple-500/50
                  hover:bg-white/[0.07]
                  hover:shadow-[0_8px_40px_rgba(168,85,247,0.25)]
                "
              >
                {/* Glass sheen overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none opacity-40"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
                  }}
                />

                {/* Image — fills the card, no description */}
                <div className="relative w-full h-56 overflow-hidden">
                  {/* Ambient glow behind image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "radial-gradient(ellipse at 50% 60%, rgba(168,85,247,0.12) 0%, transparent 70%)",
                    }}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      relative z-10 w-full h-full object-contain p-6
                      select-none pointer-events-none
                      transition-transform duration-500
                      group-hover:scale-105
                      drop-shadow-[0_4px_24px_rgba(168,85,247,0.35)]
                      group-hover:drop-shadow-[0_6px_32px_rgba(168,85,247,0.6)]
                    "
                  />
                </div>

                {/* Thin separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Title only */}
                <div className="px-4 py-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white/90 truncate">
                    {project.title}
                  </h3>
                  <span className="text-neutral-600 text-xs shrink-0 ml-2">
                    {project.technologies.length} techs
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Modal — no image */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-lg w-full rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 30 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Glass sheen */}
              <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)",
                }}
              />

              {/* Top accent bar */}
              <div className="h-[2px] w-full bg-gradient-to-r from-purple-600 via-violet-400 to-cyan-500" />

              <div className="relative z-10 p-7">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>

                {/* Tech pills — staggered */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-3 py-1 rounded-full text-xs bg-purple-500/10 border border-purple-500/25 text-purple-300"
                    >
                      {tech}
                    </motion.span>
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
                className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-neutral-400 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-200 z-20"
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
