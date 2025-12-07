"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linkData = [
  { name: 'Performance', href: '/performance' },
  { name: 'Reliability', href: '/reliability' },
  { name: 'Scale', href: '/scale' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="absolute z-10 w-full">
      <div className="container flex justify-between items-center text-white mx-auto p-8">
        <Link className={`text-3xl font-bold ${pathname === '/' ? 'text-purple-500' : ''}`} href="/">Home</Link>
        <div className="text-xl space-x-4">
          {linkData.map(item => (
            <Link key={item.href} className={pathname === item.href ? 'text-purple-500' : ''} href={item.href}>{item.name}</Link>
          ))}
        </div>
      </div>
    </header>
  )
}
