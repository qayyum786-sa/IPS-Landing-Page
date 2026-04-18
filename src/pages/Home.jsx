import React from 'react'
import Hero from '../components/Hero.jsx'
import Achievements from '../components/Achievements.jsx'
import Stats from '../components/Stats.jsx'
import Highlights from '../components/Highlights.jsx'
import MediaSection from '../components/MediaSection.jsx'
import Gallery from '../components/Gallery.jsx'
import Branches from '../components/Branches.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <Achievements />
      <Stats />
      <Highlights />
      
      <Gallery />
      <Branches />
      <Footer />
    </main>
  )
}
