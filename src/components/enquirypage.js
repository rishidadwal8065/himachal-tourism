import React from 'react'
import "../styles/enquirypage.css"
import { BiArrowToBottom } from 'react-icons/bi'
const enquirypage = () => {
  return (
    <section className="enquiry-page">
        <div className="content">
            <h1>Fill Below Form For Enquiry</h1>
            <p>Fill The Form And Get all information regarding the packages and discounts</p>
        </div>
        <a href="#get-in-touch">
            <span className="form-navigator">
                <BiArrowToBottom color='black' size={50}/>
            </span>
        </a>
    </section>
  )
}

export default enquirypage;
