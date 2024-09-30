import React from 'react'
import "../styles/HappyCustomerCard.css"
import Image from 'next/image'

const HappyCustomerCard = ({ icon="/assests/customer-icon.png", heading="happy", para="this is details "}) => {
  return (
    <main className="customer-card">
      <span className="icon">
        <Image
          src={icon} // Use the icon passed as a prop
          alt="Customer Icon" // Always include alt text for accessibility
          width={80}
          height={80}
          layout="responsive"
        />
      </span>
      <h1>{heading}</h1> {/* Render the heading passed as a prop */}
      <p>{para}</p> {/* Render the paragraph text passed as a prop */}
    </main>
  )
}

export default HappyCustomerCard
