import React from 'react'
import HeroSection from '../components/Hero-Section/Hero-Section'
import Co1 from '../components/Co-1/Co-1'
import Co2 from '../components/Co-2/Co-2'
// import Co3 from '../components/Co-3/Co-3'
// import ChatBot from '../components/ChatBot/ChatBot'
import Co4 from '../components/Co-4/Co-4'
import Co5 from '../components/Co-5/Co-5'
import Footer from '../components/Footer/Footer'
import Co6 from '../components/Co-6/Co-6'

function HomePage() {
  return (
    <>
    <HeroSection />
    <Co1 />
    <Co6 />
    <Co5 />
    <Co2 />
    {/* <Co3 /> */}
    <Co4 />
    <Footer />
    {/* <ChatBot /> */}
    </>
  )
}

export default HomePage