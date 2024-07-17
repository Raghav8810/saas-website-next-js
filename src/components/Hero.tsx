"use client";
import React from 'react'
import ArrowIcon from '../assets/icons/arrow-w.svg'
import CursorImg from '../assets/images/cursor.png'
import messageImg from '../assets/images/message.png'
import Image from 'next/image'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
      <div className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip'>
          <div className='absolute h-[135px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'>
          </div>
          <div className="container relative">
              <div className='flex items-center justify-center'>
                  <a href="#" className='inline-flex gap-2 border py-1 px-2 rounded-lg border-white/30'>
                      <span className='bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text '>Version 2.0 is here</span>
                      <span className='flex items-center gap-1'>
                          <span>Read More</span>
                          <ArrowIcon />
                      </span>
                  </a>
              </div>

              <div className='flex justify-center  mt-8'>
                  <div className='inline-flex relative'>
                      <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center  inline-flex'>One Task <br /> at a Time</h1>
                  </div>
                  <motion.div className='absolute lg:left-[330px] lg:top-[190px] left-[0px] top-[210px]  hidden sm:inline'
                  drag
                  dragSnapToOrigin
                  >
                     <Image src={CursorImg} draggable='false' alt="cursor" height="200" width="200" className='' />
                  </motion.div>

                  <motion.div className='absolute lg:top-[130px] lg:right-[320px] top-[130px] right-[0px] hidden sm:inline'
                  drag
                  dragSnapToOrigin
                  >
                     <Image src={messageImg} draggable='false' alt='message' height="200" width="200" className='' />
                  </motion.div>
                 
                  

              </div>
              <div className='flex justify-center'>
                  <p className='text-center text-xl mt-8 max-w-md'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam incidunt voluptates ipsum totam dolorum harum officiis.

                  </p>
              </div>
              <div className='flex justify-center mt-8'>
                  <button className='bg-white text-black py-3 px-5 font-medium rounded-lg'>Get for free</button>
              </div>
          </div>

      </div>
  )
}

export default Hero
