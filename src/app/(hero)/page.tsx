import React from 'react'
import homeImage from '/public/images/home.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Page() {
  return (
    <Hero imgUrl={homeImage} altTxt='home' content='Welcome to Next.js' />
  )
}
