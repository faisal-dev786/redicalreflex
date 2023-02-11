import React from 'react'
import Banner from './Banner'
import Services from './Services'
import Site_design from './Site_design'
import Banner_long from './Banner_long'
import Service_offer from './Service_offer'
import Contact from './Contact'
import Slider from './Slider'
import Navbar from './Navbar'
import Footer from './Footer'


const Index = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Banner/>
    <Services/>
    <Site_design/>
    <Banner_long/>
    <Service_offer/>
   
    <Contact/>
    <Footer/>

   
    </>
  )
}

export default Index