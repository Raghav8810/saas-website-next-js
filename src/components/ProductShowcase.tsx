'use client';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import appscreen from '../assets/images/app-screen.png'
import {motion,useScroll, useTransform} from 'framer-motion'

const ProductShowcase = () => {
   const appImage = useRef<HTMLImageElement>(null);
  const {scrollYProgress} = useScroll({
  target: appImage,
  offset: ['start end', 'end end'],
  
});

// useEffect(() =>{
//   scrollYProgress.on('change', (latestvalue) => console.log('latestvalue', latestvalue))
// },[])

const rotateX = useTransform(scrollYProgress, [0,1], [35,0])
const opacity = useTransform(scrollYProgress,[0,1], [.5, 1])

  return (
    <div className='bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24'>
      <div className="container">
          <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter '>Intuitive interface</h2>
          <div className='max-w-xl mx-auto'>
          <p className='text-xl text-center text-white/70 mt-5'>Celebrate the joy of accomplishment with an app desgined to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
          </div>
         <motion.div
          className='flex justify-center'
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
              
          }}
          
          >
         <Image className='mt-14' ref={appImage} src={appscreen} alt='product images'/>
         </motion.div>
      </div>
    </div>
  )
}

export default ProductShowcase
