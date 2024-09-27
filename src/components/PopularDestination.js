import React from "react";
import "@/styles/PopularDestination.css";
import { BiSolidPlaneAlt } from "react-icons/bi";
import Image from "next/image";
const PopularDestination = () => {
  return (
    <section className="popular-destination">
      <div className="heading">
        <span className="small-heading">
          <BiSolidPlaneAlt color="blue" size={"25px"} />
          <h5>Most Popular Destination</h5>
        </span>
        <h1>Popular Destinations</h1>
      </div>

      <main className="gallery">
        <ul class="gallery-list">
          <li class="gallery-item">
            <figure class="gallery-image">
              <Image
                src="/assests/dharamshala.jpg"
                   layout="fill"
                objectFit="cover"
              />
              <h1>Dharamshala</h1>
            </figure>
          </li>

          <li class="gallery-item">
            <figure class="gallery-image">
              <Image
                src="/assests/dal-housie.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom center"
              />
              <h1>Dal Housie</h1>
            </figure>
          </li>

          <li class="gallery-item">
            <figure class="gallery-image">
              <Image
                src="/assests/chamba.jpg"
                layout="fill"
                objectFit="cover"
              />
              <h1>Chamba</h1>
            </figure>
          </li>

          <li class="gallery-item">
            <figure class="gallery-image">
              <Image
                src="/assests/parvati-valley.jpg"
                layout="fill"
                objectFit="cover"
              />
              <h1>Parvati Valley</h1>
            </figure>
          </li>

          <li class="gallery-item">
            <figure class="gallery-image">
              <Image
                src="/assests/leh-ladakh.jpg"
                layout="fill"
                objectFit="cover"
              />
              <h1>Leh Ladakh</h1>
            </figure>
          </li>
        </ul>
      </main>
    </section>
  );
};

export default PopularDestination;
