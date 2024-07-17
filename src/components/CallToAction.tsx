"use client";
import React from 'react'
import helixImg  from '../assets/images/helix2.png'
import emojiStar from '../assets/images/emojistar.png'
import Image from 'next/image'

const CallToAction = () => {
  return (
    <div className='bg-black text-white py-[72px] text-center'>
      <div className="container max-w-xl relative ">
        <Image src={helixImg} className='hidden sm:inline absolute top-6 left-[calc(100%+36px)] ' alt='' />
        <Image src={emojiStar} className='hidden sm:inline absolute -top-[120px] right-[calc(100%+24px)]' alt='' />
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Get instant access</h2>
        <p className='text-xl text-white/70 mt-5'>Celebrate the joy of accomplishment with an app desgined to track your progress and motivate your efforsts</p>
      </div>
      <form action="#" className='mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row'>
          <input className='h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-white ' type="email" placeholder='your@email.com'/>
          <button className='bg-white text-black rounded-lg h-12 px-3 py-5 sm:px-5 sm:py-2'>Get access</button>
      </form>
    </div>
  )
}

export default CallToAction
