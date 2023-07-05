import Banner from '@/components/Extra/Banner'
import Sura from '@/components/Extra/Sura'
import { twclsx } from '@/libs/twclsx'
import React from 'react'

export default async function page() {
  return (
    <>
      <Banner>
        <h1 className={twclsx('text-2xl font-medium leading-tight sm:text-3xl text-gray-50 font-arabic')}>بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْ</h1>
      </Banner>
      <Sura />
    </>
  )
}
