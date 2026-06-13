import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 20, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-purple-600 via-violet-400 to-cyan-500"
      style={{ scaleX }}
    />
  )
}

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 px-4 lg:px-20 py-4">
      <ScrollProgress />
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="fixed inset-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
      <NavBar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
