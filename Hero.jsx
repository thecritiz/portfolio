import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/kevinRushProfile.png'

const Hero = () => {
  return (
    <div className='border-b border-transparent pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        {/* Left Side */}
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='pb-4 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl lg:pl-10'>
              Aditya Pandey
            </h1>
            <span className='text-4xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:pl-10'>
              Full Stack Developer
            </span>
            <p className='mt-8 px-4 text-center text-lg leading-relaxed text-neutral-400 lg:text-left lg:px-10 lg:max-w-2xl'>
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center '>
                <img src={profilePic} alt='Profile'/>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Hero