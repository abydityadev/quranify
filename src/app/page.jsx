import Banner from '@/components/Extra/Banner'
import Sura from '@/components/Extra/Sura'
import React from 'react'

export default function page() {
  return (
    <>
      <Banner>
        <h1 className='text-2xl font-medium leading-tight sm:text-3xl text-gray-50 font-arabic'>بِسْــــــــــــــــــمِ اللهِ الرمِ</h1>
      </Banner>
      <Sura />
    </>
  )
}
