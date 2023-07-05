"use client"

import { AiOutlinePlusCircle } from 'react-icons/ai'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function page() {
    const [tasbeeh, setTasbeeh] = useState(0)

    return (
        <section className='text-center mt-11'>
            <h1 className='text-4xl text-gray-300 font-bold'>
                Tasbeeh
            </h1>
            <p className='text-7xl font-bold'>{tasbeeh}</p>

            <div>
                <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className='bg-violet-900 p-10 rounded-full mt-16' onClick={() => { setTasbeeh(tasbeeh + 1) }}><AiOutlinePlusCircle className="text-7xl text-gray-300" /></motion.button>
                <br />
                <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className='mt-3 underline text-gray-200' onClick={() => setTasbeeh(0)}>reset</motion.button>
            </div>
        </section>
    )
}
