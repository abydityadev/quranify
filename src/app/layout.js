import '@/assets/styling/globals.css'
import Navbar from '@/components/UI/Navbar'
import Footer from '@/components/UI/Footer'
import { twclsx } from '@/libs/twclsx'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Quranify',
  description: 'Digital Quran Based In Indonesia',
  manifest: '/manifest.json'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={twclsx('bg-gray-950 text-gray-50 font-sofia')}>
        <Navbar />
        <main className={twclsx('max-w-2xl mx-auto pt-20 px-2 sm:px-0')}>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  )
}
