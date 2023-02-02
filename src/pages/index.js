import React from 'react'
import Banner from './Banner'
import Services from './Services'
import Site_design from './Site_design'
import Banner_long from './Banner_long'
import Service_offer from './Service_offer'
import Contact from './Contact'
import Tabs from './tabs'
import Slider from './Slider'

const Index = () => {
  return (
    <>
    <Slider/>
    <Banner/>
    <Services/>
    <Site_design/>
    <Banner_long/>
    <Contact/>
    <Service_offer/>
    {/* <Tabs/> */}
   
    </>
  )
}

export default Index