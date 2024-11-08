"use client"
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { VscChevronRight } from 'react-icons/vsc'
import {
  motion,
} from "framer-motion";

const Hero = () => {
  return (
    <div className='pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='-top-10 left-[85%] h-[80vh] w-[50vw]' fill='cyan' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-cyan max-w-80'>Get Weller Tech Solutions</h2>

          <motion.div
            animate={{
              textShadow: [
                '0 0 8px rgba(0, 191, 255, 0.8)',
                '0 0 16px rgba(0, 191, 255, 0.4)',
                '0 0 8px rgba(0, 191, 255, 0.8)',
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          >
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Crafting Ideas into Engaging Digital Journeys"
            />
          </motion.div>

          <p className='text-center md:trackin-wider mb-4 text-sm md:text-lg lg:text-1xl'>
            Hi, I&apos;m Dwayne, a Full Stack developer passionate about creating digital solutions that bring your ideas to life. I&apos;m here to help turn your vision into reality.
          </p>

          <a href='#experience'>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <MagicButton
              title="My History"
              icon={<VscChevronRight />}
              position="right"
            />
          </motion.div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero