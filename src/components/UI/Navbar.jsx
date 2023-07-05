"use client"

import { twclsx } from '@/libs/twclsx'
import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'
import Path from '@/libs/data/constants/path'

export default function Navbar() {
    const pathname = usePathname()

    return (
        <header className={twclsx('fixed bg-gray-950 bg-opacity-50 z-40 w-full backdrop-blur border-b border-gray-800 border-t-4 border-t-purple-500')}>
            <nav className={twclsx('p-5')}>
                <div className={twclsx('max-w-2xl mx-auto flex justify-between')}>
                    <Link className={twclsx('font-bold text-lg')} href={'/'}>Quranify</Link>
                    <ul className={twclsx('flex items-center gap-1')}>
                        {Path.map((x) => {
                            return (
                                <li key={x.label}>
                                    <Link className={twclsx('text-slate-200 font-medium hover:bg-gray-900 px-2 py-1 rounded',
                                        pathname === x.path
                                        ? 'border border-gray-700'
                                        : null
                                    )} href={x.path}>{x.label}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
