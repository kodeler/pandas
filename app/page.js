'use client'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import HowWeWork from '@/components/ComponentServices'
import Diagram from '@/components/Diagram'
import Services from '@/components/ServicesPandas'
import Pricing from '@/components/Pricing'
import PricingVarible from '@/components/PricingVariable'
import Footer from '@/components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


export default function Home() {

  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="main overflow-x-hidden container mx-auto my-4">
      <Navbar/>
      <Header/>
      <Diagram/>
      <Services/>
      <HowWeWork/>
      <Pricing/>
      <PricingVarible/>
      <Footer/>
    </div>
  )
}