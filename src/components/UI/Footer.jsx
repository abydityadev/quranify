import Path from '@/libs/data/constants/path'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='max-w-2xl mx-auto text-center my-20 border-t border-gray-800 pt-14'>
      <p className='text-blue-400 font-light mb-7'>© Copyright 2021 - 2023 Abyan Raditya</p>
      <p className="my-4 text-gray-400 mb-10">“And to Allah belongs whatever is in the heavens and whatever is on the earth. He forgives whom He wills and punishes whom He wills. And Allah is forgiving and merciful.” [Quran 3:129].</p>
      <div className='flex justify-center'>
        <ul className='flex items-center gap-7'>
          {Path.map((x) => {
            return (
              <li>
                <Link className='text-gray-200' href={x.path}>{x.label}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
