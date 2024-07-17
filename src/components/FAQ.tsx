'use client';
import React, { useState } from 'react'
import PlusIcon from '../assets/icons/plus.svg'
import clsx from 'clsx'
import MinusIcon from '../assets/icons/minus.svg'
import { AnimatePresence, motion } from 'framer-motion'

const Faqitems = [
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, paypal, and various other payment method. please contact our support team for more information on accepted payment method.',
    },
    {
        question: 'How does the pricing work for teams?',
        answer: 'Our pricing is per user, per month. This means only pay for the number of team members you have on your account, Discount are avialable for larger teams and annual subscription.',
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Yes, you can upgrade or downgrade you plans at any time. changes to your plan will be prorated and refelected in your billing cycle.',
    },
    {
        question: 'Is my data secure?',
        answer: 'Security is the top priority, we use state of the encryption and comply with the best industry practise to ensure that stored security and accesed only by authorised users.',
    }

]

const AccordianItem = ({ question, answer }: { question: string; answer: string; }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <div key={question} className='py-7 border-b border-white/30' onClick={() => setIsOpen(!isOpen)}>
            <div className='flex items-center '>
                <span className='flex-1 text-lg font-bold'>{question}</span>
                {isOpen ? <MinusIcon /> : <PlusIcon />}
            </div>
            <AnimatePresence>
            {isOpen && (
                <motion.div className={clsx("mt-4", {
                    hidden: !isOpen,
                    "": isOpen === true,
                })}
                
                initial={{
                    opacity: 0,
                    height: 0,
                }}
                animate={{
                    opacity: 1,
                    height: 'auto',
                }}
                exit={{
                    opacity: 0,
                    height: 0,
                }}
                >{answer}</motion.div>
            )}
     </AnimatePresence>
        </div>
    )
}

const FAQ = () => {
    return (
        <div className='bg-black text-white bg-gradient-to-b from-[#5D2CAB] to-black py-[72px] '>
            <div className="container">
                <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>Frequently asked questions</h2>
                <div className='mt-12 max-w-[648px]  lg:max-w-[748px] mx-auto'>
                    {Faqitems.map(({ question, answer }) => (
                        <AccordianItem key={question} question={question} answer={answer} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ
