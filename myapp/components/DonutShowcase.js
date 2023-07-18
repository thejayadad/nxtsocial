import React from 'react'
import SingleDonut from './SingleDonut'

const DonutShowcase = () => {
  return (
    <section className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
        <SingleDonut />
        <SingleDonut />
        <SingleDonut />
        <SingleDonut />
        <SingleDonut />
        <SingleDonut />
        <SingleDonut />
        <SingleDonut />
        <SingleDonut />
        <SingleDonut />
        <SingleDonut />

    </section>
  )
}

export default DonutShowcase