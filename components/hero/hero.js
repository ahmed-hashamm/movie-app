import { logo } from '@/public'
import Image from 'next/image'
import React from 'react'
import SearchBar from './searchBar'

const Hero = () => {
  return (
    <section className='bg-[#111111] w-screen flex flex-col items-center justify-center gap-y-6  '>
        <div className="logo">
            <Image src={logo} width={300}/>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 w-full'>

        <h1 className='text-3xl text-[#FFE400] font-bold tracking-wider'>AndyDay</h1>
        <SearchBar/>
        </div>

    </section>
  )
}

export default Hero