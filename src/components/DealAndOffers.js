import React from "react";
import "../styles/DealAndOffers.css";
import { BiSolidPlaneAlt } from "react-icons/bi";
import DealCard from "./DealCard";
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
       <DealCard offerName="MANALI VOLVO PACKAGE" description="Get discount on MANALI VOLVO PACKAGE, hotels and holiday packages" />
        <DealCard  offerName="SHIMLA MANALI TOUR" description="Get discount on SHIMLA MANALI TOUR, hotels and holiday packages" />
        <DealCard  offerName="HIMACHAL HONEYMOON PACKAGE" description="Get discount on HIMACHAL HONEYMOON PACKAGE, hotels and holiday packages" />
        <DealCard  offerName="Shimla tour Package" description="Get discount on Shimla tour Package, hotels and holiday packages" />
        </div>
      </article>
    </section>
  );
};

export default DealAndOffers;
