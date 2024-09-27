import React from "react";
import Link from "next/link";
import "@/styles/Footer.css";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque fringilla faucibus consectetur in. Curabitur eu, nunc
            suspe
          </p>
        </div>
        <div className="social-icon">
          <a target="_blank" href="https://www.instagram.com/__rishi_dadwal/">
            <span className="icon">
              <FaFacebookF color="white" size={"15px"} />
            </span>
          </a>
          <a target="_blank" href="https://www.instagram.com/__rishi_dadwal/">
          <span className="icon">
            <FaInstagram color="white" size={"15px"} />
          </span>
          </a>
          <span className="icon">
            <FaLinkedinIn color="white" size={"15Px"} />
          </span>
          <span className="icon">
            <FaTwitter color="white" size={"15px"} />
          </span>
        </div>
      </main>

      <main className="footer-content middle">
        <ul>
          <li>
            <Link href="#about">Home</Link>
          </li>
          <li>
            <Link href="#services">Destination</Link>
          </li>
          <li>
            <Link href="#expertise">Services</Link>
          </li>
          <li>
            <Link href="/contact">About</Link>
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
            <Link href="#expertise">Conatact Us</Link>
          </li>
          <li>
            <Link href="/contact">Discounts</Link>
          </li>
        </ul>
      </main>
      <main className="footer-content right">
        <div className="content">
          <h1>Subscribe Newsletter</h1>
          <p>Lorem ipsum dolor sit amet, consectetur doler adipiscing elit.</p>
        </div>
        <div className="container">
          <input type="text" placeholder="Enter Email" />
          <input type="submit" value="Subcribe" />
        </div>
      </main>
    </footer>
  );
};

export default Footer;
