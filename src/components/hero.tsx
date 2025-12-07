import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface IProps {
  imgUrl: StaticImageData;
  altTxt: string;
  content: string;
}

export default function Hero(props: IProps) {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image className='w-full h-full object-cover' src={props.imgUrl} alt={props.altTxt} />
        <div className='absolute inset-0 bg-gradient-to-r from-black/50 to-transparent'></div>
      </div>
      <div className='flex justify-center pt-48'>
        <h1 className='text-6xl text-white'>{props.content}</h1>
      </div>
    </div>
  )
}
