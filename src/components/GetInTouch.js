import React from "react";
import "../styles/GetInTouch.css";
import Form from "./Form";
import { BiSolidPlaneAlt } from "react-icons/bi";
const GetInTouch = () => {
  return (
    <main className="get-in-touch">
      <div className="heading">
          <BiSolidPlaneAlt color="blue" size={"25px"} /> 
        <h1>
        GetInTouch
        </h1>
      </div>
      <div className="mobile-form">
          <Form />
       </div>
        
    </main>
  );
};

export default GetInTouch;
