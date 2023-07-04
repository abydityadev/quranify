import { twclsx } from '@/libs/twclsx'
import React from 'react'
import getSura from '@/libs/data/getSura'
import MoreSurah from '@/components/Extra/MoreSurah';

export default function page() {
    const data = getSura();
    return (
        <section>
            <MoreSurah />
        </section>
    )
}
