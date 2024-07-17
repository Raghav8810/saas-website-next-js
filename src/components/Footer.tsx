import React from 'react'
import Instaicon from '../assets/icons/insta.svg';
import Xsocial from '../assets/icons/x-social.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';


const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
        <div className='container '>
              <div className='flex flex-colsm:flex-row sm:justify-between gap-4'>
                <div className='text-center'>© 2024 saas website, Inc. All rights reserved</div>
                <ul className='flex justify-center items-center gap-2.5'>
                    <li><Xsocial/></li>
                    <li><Instaicon/></li>
                    <li><YoutubeIcon/></li>

                </ul>
              </div>
        </div>
    </footer>
  )
}

export default Footer
