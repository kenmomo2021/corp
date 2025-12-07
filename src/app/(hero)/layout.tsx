import Header from '@/components/header'
import React from 'react'

export default function HeroLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
