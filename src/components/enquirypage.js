import React from 'react'
import "../styles/enquirypage.css"
import Form from './Form'
const enquirypage = () => {
  return (
    <section className="enquiry-page">
        <div className="content">
            <h1>Fill Below Form For Enquiry</h1>
            <p>Fill The Form And Get all information regarding the packages and discounts</p>
        </div>
        <div className="form-in-hero-section">
        <Form/>
        </div>
    </section>
  )
}

export default enquirypage;
