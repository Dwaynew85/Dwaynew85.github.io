import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>Let’s Connect and Elevate <span className='text-cyan'>Your</span> Digital Journey</h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Drop me a line today, and let’s explore how we can turn your vision into reality!</p>
        <a
          href='mailto:dpweller85@gmail.com'
        >
          <MagicButton 
            title="Let's Connect!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <div className='flex items-center md:gap-3 lg:gap-6'>
          {socialMedia.map((profile) => (
            <a 
              key={profile.id}
              href={profile.link}
              target="nooperner noreferrer"
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg  saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
          >
              <img src={profile.img} alt={`${profile.id}`} width={20} height={20}  />
            </a>
          ))}
        </div>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Get Weller Tech Solutions</p>
      </div>
    </footer>
  )
}

export default Footer