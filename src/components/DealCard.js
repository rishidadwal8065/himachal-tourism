import React from "react";
import "@/styles/DealCard.css";
import Image from "next/image";
const DealCard = () => {
  return (
    <div className="card">
                <div className="card-image">
                    <Image
                      src="/assests/bank-offer.jpg"
                      alt="offers"
                      width={150}
                      height={200}
                      objectPosition="center center"
                    />
                </div>

                <div className="card-content">
                  <h5>Bank Offers</h5>
                  <h1>Get upto 30% instant discount</h1>
                  <p>Get discount on flights, hotels and holiday packages with HDFC bank credit card.</p>
                  <div className="service-booking-buttons">
                    <div className="contactButton">
                      <button>Book Now</button>
                    </div>
                  </div>
                </div>
          </div>
  )
}

export default DealCard
