import React from 'react'
import performanceImage from '/public/images/performance.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance',
}

export default function Page() {
  return (
    <Hero imgUrl={performanceImage} altTxt='performance' content='Performance' />
  )
}
