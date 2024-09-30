import React from "react";
import "../styles/DealCard.css";
import Image from "next/image";
const DealCard = ({offerName, description}) => {
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
                  <h5>Limited Time Offers</h5>
                  <h1>{offerName}</h1>
                  <p>{description}</p>
                  <div className="service-booking-buttons">
                    <a href="/enquirypage">
                    <div className="contactButton">
                      <button>Book Now</button>
                    </div>
                    </a>
                  </div>
                </div>
          </div>
  )
}

export default DealCard
