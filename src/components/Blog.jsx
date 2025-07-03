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
            className="border border-neutral-800 rounded-xl p-6 bg-neutral-900 shadow-md"
          >
            <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
            <p className="text-sm text-neutral-400 mb-3">{post.date}</p>
            <p className="text-neutral-300 mb-4">{post.description}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Read More →
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
          className="bg-neutral-900 border border-neutral-800 text-white px-6 py-4 rounded-xl shadow-md hover:bg-neutral-800 transition-all"
        >
          📝 Follow My Blog on <span className="text-cyan-400">Medium</span> →
        </a>
      </div>
    </section>
  )
}

export default Blog
