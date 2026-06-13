import React from 'react'
import { BLOGS } from '../constants'
import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <section id="blog" className="border-b border-transparent pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Blog
      </motion.h2>

      <div className="px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {BLOGS.map((post, index) => (
          <motion.div
            key={post.title + index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 shadow-lg hover:border-cyan-500/30 hover:shadow-[0_0_28px_rgba(6,182,212,0.12)] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-1 text-white">{post.title}</h3>
            <p className="text-xs text-neutral-500 mb-3 font-mono">{post.date}</p>
            <p className="text-neutral-400 mb-5 leading-relaxed">{post.description}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Read More <span aria-hidden>→</span>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Medium Profile Button */}
      <div className="mt-12 flex justify-center">
        <a
          href="https://medium.com/@thecritizz"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/10 bg-white/[0.03] backdrop-blur-sm text-white px-6 py-4 rounded-xl shadow-lg hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] transition-all duration-300"
        >
          📝 Follow My Blog on <span className="text-cyan-400">Medium</span> →
        </a>
      </div>
    </section>
  )
}

export default Blog
