import React from 'react'
import Header from '../components/layouts/Header'
import Main from '../components/layouts/Main'
import GetStart from '../components/layouts/GetStart'
import FeaturesCards from '../components/layouts/FeaturesCards'
import Footer from '../components/layouts/footer'

function Home() {
  return (
    <>
        <Header/>
        <Main/>
        <GetStart/>
        <FeaturesCards/>
        <Footer/>
        
    </>
  )
}

export default Home
