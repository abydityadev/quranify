import React from 'react'
import Banner from '@/components/Extra/Banner'
import getSuraDetail from '@/libs/data/getSuraDetail'
import { twclsx } from '@/libs/twclsx'
import Link from 'next/link'

export default async function page({ params: { nomor } }) {
    const getSura = await getSuraDetail(nomor)
    return (
        <>
            <Banner>
                <h1 className='text-2xl font-medium leading-tight sm:text-3xl text-gray-50 font-arab'>{getSura.data.nama} . {getSura.data.namaLatin}</h1>
                <p>({getSura.data.arti}) . {getSura.data.jumlahAyat} Verses</p>
            </Banner>
            <div className='flex justify-center'>
                <audio className='h-8 mb-8' controls >
                    <source src={getSura.data.audioFull['02']} type="audio/ogg" />
                </audio>
            </div>
            <ul>
                {getSura.data.ayat.map((x) => {
                    return (
                        <li key={x.teksLatin} className='mb-7'>
                            <div className='p-6 border-l-2 shadow border-l-gray-800'>
                                <h1 className='text-lg font-light'><span className='text-gray-300 mr-3'>{getSura.data.nomor} : {x.nomorAyat}</span> <span className={twclsx('font-arabic')}>{x.teksArab}</span></h1>
                                <p className='text-right'>{x.teksLatin}</p>
                                <p className='text-right text-xs font-thin'>{x.teksIndonesia}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <section>
                <div className='flex justify-between'>
                    {getSura.data.suratSebelumnya === false
                        ? <div></div>
                        : <Link href={`/surah/${getSura.data.suratSebelumnya.nomor}`} className={twclsx('border border-gray-700 px-5 py-3 rounded')}>
                            ⬅️ {getSura.data.suratSebelumnya.namaLatin} - {getSura.data.suratSebelumnya.nama}
                        </Link>
                    }
                    {getSura.data.suratSelanjutnya === false
                        ? <div></div>
                        : <Link href={`/surah/${getSura.data.suratSelanjutnya.nomor}`} className={twclsx('border border-gray-700 px-5 py-3 rounded')}>
                            {getSura.data.suratSelanjutnya.namaLatin} - {getSura.data.suratSelanjutnya.nama} ➡️
                        </Link>
                    }
                </div>
            </section>
        </>
    )
}
