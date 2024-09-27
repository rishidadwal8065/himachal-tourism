import React from "react";
import "@/styles/DealAndOffers.css";
import { BiSolidPlaneAlt } from "react-icons/bi";
import Image from "next/image";
const DealAndOffers = () => {
  return (
    <section id="deals" className="deal-offers">
      <div className="heading">
        <span className="small-heading">
          <BiSolidPlaneAlt color="blue" size={"25px"} />
          <h5>Deal & Offer</h5>
        </span>
        <h1>Deals & offers</h1>
      </div>
      
      <article className="card-container">
        <div className="card-wrapper">
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
          <div className="card">
                <div className="card-image">
                    <Image
                      src="/assests/bank-offer.jpg"
                      alt="offers"
                      width={150}
                      height={200}
                      objectFit="cover"
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
          <div className="card">
                <div className="card-image">
                    <Image
                      src="/assests/bank-offer.jpg"
                      alt="offers"
                      width={150}
                      height={200}
                      objectFit="cover"
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
             <div className="card">
                <div className="card-image">
                    <Image
                      src="/assests/bank-offer.jpg"
                      alt="offers"
                      width={150}
                      height={200}
                      objectFit="cover"
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
     
          

         
        </div>
      </article>
    </section>
  );
};

export default DealAndOffers;
