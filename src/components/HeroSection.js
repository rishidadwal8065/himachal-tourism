"use client"
import React from 'react'
import '../styles/HeroSection.css'
import Form from "../components/Form"
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
      </section>
    </>
 
  )
  
}

export default HeroSection
