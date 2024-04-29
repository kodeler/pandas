'use client'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import ComponentServices from '@/components/ComponentServices'
import DescriptionService from '@/components/DescriptionService'
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
      <DescriptionService/>
      <ComponentServices/>
      <Footer/>
    </div>
  )
}