import React from "react";
import Link from "next/link";
import "../styles/Footer.css";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <main className="footer-content left">
        <div className="logo">
          <Image src="/assests/logo.png" alt="Logo" width={40} height={40} />
        </div>
        <div className="content">
          <h1>Himachal Tourism</h1>
          <p>
              address: near stop n shop, Kelti, Himachal Pradesh 171003
          </p>
        </div>
        <div className="social-icon">
          <a target="_blank" href="https://www.facebook.com/mybharattrips/">
            <span className="icon">
              <FaFacebookF color="white" size={"15px"} />
            </span>
          </a>
          <a target="_blank" href="https://www.instagram.com/mybharattrips/">
          <span className="icon">
            <FaInstagram color="white" size={"15px"} />
          </span>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/my-bharat-trips-023a73222/?originalSubdomain=in">
            <span className="icon">
              <FaLinkedinIn color="white" size={"15Px"} />
            </span>
          </a>
          
          <a target="_blank"  href={`https://wa.me/+917836098136`}>
            <span className="icon">
              <FaWhatsapp color="white" size={"15px"} />
            </span>
          </a>
        
        </div>
      </main>

      <main className="footer-content middle">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#packages">Packages</Link>
          </li>
          <li>
            <Link href="#destinations">Destination</Link>
          </li>
          <li>
            <Link href="#deals">Deals</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#services">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#expertise">Contact Us</Link>
          </li>
          <li>
            <Link href="/contact">Discounts</Link>
          </li>
        </ul>
      </main>
      <main className="footer-content right">
        <div className="content">
          <h1>Subscribe Newsletter</h1>
          <p>Subscribe to get exciting deals and offers</p>
        </div>
        <div className="container">
          <input type="text" placeholder="Enter Email" />
          <input type="submit" value="Subscribe" />
        </div>
      </main>
    </footer>
  );
};

export default Footer;
