import React from "react";
import "@/styles/DealAndOffers.css";
import { BiSolidPlaneAlt } from "react-icons/bi";
import Image from "next/image";
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
       <DealCard/>
        <DealCard/>
        <DealCard/>
        <DealCard/>
        </div>
      </article>
    </section>
  );
};

export default DealAndOffers;
