"use client";
import Image from 'next/image'
import React from 'react'
import acme from '../assets/images/acme.png'
import quantumLogo from '../assets/images/quantum.png'
import echoLogo from '../assets/images/echo.png'
import celestiaLogo from '../assets/images/celestial.png'
import pulseLogo from '../assets/images/pulse.png'
import apexLogo from '../assets/images/apex.png'
import {motion} from 'framer-motion'
import { Inika } from 'next/font/google';


const images = [
    {
        src: acme,
        alt: "acme logo"
    },
    {
        src: quantumLogo,
        alt: "quantum Logo"
    },
    {
        src: celestiaLogo,
        alt: "celestia Logo"

    },
    {
        src: pulseLogo,
            alt: " pulse Logo"
        },
    {
        src: apexLogo,
        alt: "apex Logo"
    },
]


const LogoTicker = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
        <div className="container ">
            <h2 className='text-xl text-center text-white/70'>Trusted by the world most innovative teams</h2>
            <div className="overflow-hidden  w-[70%] mx-auto  flex  justify-center mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 md:after:right-[0px] before:left-0 md:before:left-[0px] before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))]">
                <motion.div
                  transition={{
                    duration: 10,
                    ease: 'linear',
                    repeat: Infinity,
                    
                }}
                initial={{translateX: 0}}
                animate={{translateX: "-50%"}}
              
                className='flex gap-16 '>
                {images.map(({src,alt}) => (
                    <Image src={src}
                     alt={alt} 
                     key={alt} 
                     className='flex-none h-8 w-auto' />
                ))}
                 {images.map(({src,alt}) => (
                    <Image
                     src={src} 
                     alt={alt} 
                     key={alt} 
                     className='flex-none h-8 w-auto' />
                ))}
                
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default LogoTicker
