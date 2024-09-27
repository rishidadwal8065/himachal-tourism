import React from 'react'
import '@/styles/HeroSection.css'
import Form from "../components/Form"
const HeroSection = () => {
  return (
   <section className="hero-section">
        <main className="content">
              <h1>Discover the Majestic Beauty of Himachal Pradesh</h1>
              <p>Explore stunning landscapes and thrilling adventures in the heart of the Himalayas.</p>
              <div className="contactButton">
                <button>Plan Your Trip</button>
              </div>
        </main>
        <div className="form-in-hero-section">
        <Form/>
        </div>
   </section>
  )
}

export default HeroSection
