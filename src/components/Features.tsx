
import React from 'react'
import EcosystemIcon from '../assets/icons/ecosystem.svg'
import {motion} from 'framer-motion'
import Feture from './Feture'


const features = [
    {
        title: 'integration Ecosystem',
        description: 'Enhance your profuctivity by connecting with your tools, keeping your essentials in one place',
    },
    {
        title: 'Goal Setting and Tracking',
        description: 'Enhance your profuctivity by connecting with your tools, keeping your essentials in one place',
    },
    {
        title: 'Secure Data Encryption',
        description: 'Enhance your profuctivity by connecting with your tools, keeping your essentials in one place',
    },
]

const Features = () => {
    return (
        <div className='bg-black text-white py-[72px] sm:py-24'>
            <div className="container w-10/12 " >
                <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Everything you need</h2>
            <div className='max-w-xl mx-auto'>
            <p className='text-center mt-5 text-xl text-white/70'>Enjoy customizable lists, team work tools, and smart tracking all in one place.
                    Set tasks, get reminders, and see your progress simply and quickly.
                </p>
            </div>
                <div className='mt-16 flex flex-col sm:flex-row gap-4'>
                     {features.map(({title,description}) => (
                        <Feture key={title} title={title} description={description}/>
                     ))}
                </div>
            </div>
        </div>
    )
}

export default Features
