import React from 'react'
import scaleImage from '/public/images/scale.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale',
}

export default function Page() {
  return (
    <Hero imgUrl={scaleImage} altTxt='scale' content='Scale' />
  )
}
