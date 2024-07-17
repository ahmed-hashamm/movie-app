import HomeHero from '@/components/homeHero/hero'
import { HomeNav } from '@/components/navbars/homeNav'
import React from 'react'

const Home = () => {
  return (
    <>
    <HomeNav/>
    <HomeHero/>
    </>
  )
}

export default Home