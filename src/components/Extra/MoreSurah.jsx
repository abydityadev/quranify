import getSura from '@/libs/data/getSura'
import { twclsx } from '@/libs/twclsx'
import Link from 'next/link'

export default async function MoreSurah({search}) {
    const sura = await getSura()

    return (
        <section>
            <h1 className={twclsx('text-3xl font-bold')}>Surah 📖</h1>
            <div className={twclsx("grid grid-cols-2 lg:grid-cols-3 gap-2 my-3")}>
                {sura.data.map((q) => {
                    return (
                        <Link key={q.namaLatin} href={`/surah/${q.nomor}`} className={twclsx('max-w-sm p-6 border rounded-lg shadow-md transition border-gray-700 hover:-translate-y-1')}>
                            <div>
                                <h1><span className={twclsx('font-medium')}>{q.nomor}. {q.namaLatin}</span> 	&#40;{q.arti}&#41;</h1>
                                <p className={twclsx('text-right font-lateef font-semibold text-3xl')}>{q.nama}</p>
                                <p className={twclsx("text-right text-sm mt-3")}>{q.tempatTurun} ; {q.jumlahAyat} Verses</p>
                            </div>
                        </Link >
                    )
                })}
            </div>
        </section>
    )
}
