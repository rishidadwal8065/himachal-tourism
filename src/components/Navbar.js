"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import "@/styles/Navbar.css";

const Navbar = () => {
  const [check, setCheck] = useState(false);
  const toggleAnimation = () => {
    setCheck(!check);    
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <Image src='/assests/logo.png' alt="Logo"
            width={50}            
            height={50}  />
        </Link>
      </div>
      <div className={`${check ? "nav-hidden" : "right-side"}`}>
        <ul className="navLinks">
          
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#expertise">Expertise</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="contactButton">
          <button>
            (91) 9876543210
          </button>
            <FaPhoneAlt color="white" />
        </div>
      </div>
      <div className="nav-mobile">
        <div onClick={toggleAnimation} className={`nav-icon ${check ? "hidden" : ""}`}>
          <IoReorderThreeOutline size={"40px"} color="white"/>
        </div>
        <div onClick={toggleAnimation} className={`nav-icon ${!check ? "hidden" : ""}`}>
          <IoMdClose size={"40px"}  color="white"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
