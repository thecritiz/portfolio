import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub } from "react-icons/fa";

const Projects = () => {
const [selectedProject, setSelectedProject] = useState(null);

return ( <section
   id="projects"
   className="border-b border-transparent pb-20"
 >
<motion.h2
whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: -50 }}
transition={{ duration: 0.6 }}
className="my-20 text-center text-4xl font-semibold"
>
Projects
</motion.h2>

```
  <div className="px-4 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {PROJECTS.map((project, index) => (
        <motion.div
          key={`${project.title}-${index}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          whileHover={{
            y: -10,
          }}
          viewport={{ once: true }}
          onClick={() => setSelectedProject(project)}
          className="group cursor-pointer"
        >
          <div
            className="
              relative
              h-[430px]
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              transition-all
              duration-500
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
              hover:border-purple-500/40
              hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
            "
          >
            {/* Glow Layer */}
            <div
              className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                bg-gradient-to-br
                from-purple-500/10
                via-transparent
                to-cyan-500/10
              "
            />

            {/* Image */}
            <div className="relative z-10 flex justify-center pt-8">
              <motion.img
                src={project.image}
                alt={project.title}
                className="
                  h-56
                  object-contain
                  select-none
                  pointer-events-none
                  drop-shadow-[0_10px_25px_rgba(168,85,247,0.35)]
                "
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                }}
              />
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p
                className="
                  text-sm
                  text-neutral-300
                  opacity-0
                  translate-y-4
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-500
                "
              >
                {project.description}
              </p>

              <div
                className="
                  flex flex-wrap gap-2 mt-4
                  opacity-0
                  translate-y-4
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-500
                  delay-100
                "
              >
                {project.technologies
                  .slice(0, 4)
                  .map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="
                        px-3 py-1
                        rounded-full
                        text-xs
                        border
                        border-purple-500/20
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
                  mt-4
                  text-sm
                  text-purple-400
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              >
                Click to view details →
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  <AnimatePresence>
    {selectedProject && (
      <motion.div
        className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-black/70
          backdrop-blur-md
          p-4
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          className="
            relative
            max-w-2xl
            w-full
            rounded-3xl
            border
            border-white/10
            bg-neutral-900/95
            backdrop-blur-xl
            p-8
            shadow-2xl
          "
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.85,
            y: 30,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="
              absolute
              top-5
              right-5
              text-neutral-400
              hover:text-red-400
              transition-colors
            "
          >
            <FaTimes size={18} />
          </button>

          <h3 className="text-3xl font-bold mb-4">
            {selectedProject.title}
          </h3>

          <p className="text-neutral-300 leading-relaxed mb-6">
            {selectedProject.fullDescription ||
              selectedProject.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {selectedProject.technologies.map(
              (tech, index) => (
                <span
                  key={index}
                  className="
                    px-3 py-1
                    rounded-full
                    bg-purple-500/10
                    border border-purple-500/20
                    text-purple-300
                    text-sm
                  "
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-purple-600
                px-5
                py-3
                hover:bg-purple-700
                transition-colors
              "
            >
              <FaGithub />
              View Repository
            </a>
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>


);
};

export default Projects;
