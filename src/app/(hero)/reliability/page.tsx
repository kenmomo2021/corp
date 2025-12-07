import React from 'react'
import reliabilityImage from '/public/images/reliability.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reliability',
}

export default function Page() {
  return (
    <Hero imgUrl={reliabilityImage} altTxt='reliability' content='Super high reliability hosting' />
  )
}
