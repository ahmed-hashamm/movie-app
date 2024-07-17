import MoviesButton from '@/components/buttons/moviesButton'
import ShowsButton from '@/components/buttons/showsButton'
import HomeHero from '@/components/homeHero/hero'
import MoviesSection from '@/components/moviesSection/moviesSection'
import { HomeNav } from '@/components/navbars/homeNav'
import Socials from '@/components/socials/socials'
import React from 'react'

const Home = ({pageNo}) => {
  return (
    <>
    <HomeNav/>
    <HomeHero/>
    <section className='bg-[#1F1F1F] h-max lg:bg-[#111111] py-2 lg:py-16 px-4 '>
        <Socials/>
        <div className='flex gap-6 p-6'>
        <h2 className='text-3xl text-white'>Trending</h2>
        <div className='flex gap-2'>

        <MoviesButton pa/>
        <ShowsButton/>
        </div>
        </div>
        <MoviesSection pageNO={1}/>
        
        <h2 className='text-3xl m-6 mb-0 text-white'>Latest Movies</h2>
        
        <MoviesSection pageNO={2}/>
        <h2 className='text-3xl m-6 mb-0 text-white'>Latest TV Shows</h2>
        
        <MoviesSection pageNO={4}/>
        <h2 className='text-3xl m-6 mb-0 text-white'>Coming Soon</h2>
        
        <MoviesSection pageNO={7}/>
    </section>
    </>
  )
}

export default Home