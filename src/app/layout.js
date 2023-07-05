import '@/assets/styling/globals.css'
import Navbar from '@/components/UI/Navbar'
import Footer from '@/components/UI/Footer'
import { twclsx } from '@/libs/twclsx'
import Head from 'next/head'

export const metadata = {
  title: 'Quranify',
  description: 'Indonesian Language Based Digital Quran',
  manifest: '/manifes.json'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={twclsx('bg-gray-950 text-gray-50 font-sofia')}>
        <Navbar />
        <main className='max-w-2xl mx-auto pt-20 px-2 sm:px-0'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
