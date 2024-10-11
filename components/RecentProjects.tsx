import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3D-Pin'
import { LuArrowUpRight } from "react-icons/lu";

const RecentProjects = () => {
  return (
    <div className='py-5' id='projects'>
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-cyan'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-2 sm:gap-14 gap-x-24 gap-y-8'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className='sm:h-[20rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] lg:w-96 md:w-80 w-[95vw]'>
            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center sm:w-[570px] lg:w-96 md:w-80 overflow-hidden s:h-[40vh] h-[45vh]' >
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]'>
                  <img src='/bg.png' alt='bg-img' />
                </div>
                <img src={img} alt={title} className='z-10 absolute bottom-0' />
              </div>

              <h1 className='font-bold text-cyan lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>

              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div key={index}
                      className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{transform: `translateX(-${5 * index}px)`}}
                    >
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-xl md:text-xs text-sm'>Check Live Site</p>
                  <LuArrowUpRight className='ms-.5' color='#00BFFF'/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects