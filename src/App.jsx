import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan300 selection:text-cyan-900 px-4 lg:px-20 py-4">
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="fixed inset-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
      
      <div className='container mx-auto px-8'></div>
      <NavBar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </div>
  )
}

export default App
