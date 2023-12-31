import { twclsx } from '@/libs/twclsx'
import React from 'react'

export default function Banner({ children }) {
  return (
    <header className={twclsx('mx-auto mb-8 max-w-5xl')}>
      <div className={twclsx('bg-gradient-to-r from-gray-800 to-gray-900 py-16 text-center rounded-md mx-2 lg:mx-0')}>
        {children}
      </div>
    </header>
  )
}
