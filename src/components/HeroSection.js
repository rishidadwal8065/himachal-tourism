"use client"
import React, {useState, useEffect} from 'react'
import '@/styles/HeroSection.css'
import Image from 'next/image'
import Form from "../components/Form"
import { FaVideo } from 'react-icons/fa'
import Carousel from './Carousel'
const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="carousel-hero-section">
          <Carousel/>
        </div>
        <div className="form-in-hero-section">
        <Form/>
        </div>
   </section></>
 
  )
  
}

export default HeroSection
