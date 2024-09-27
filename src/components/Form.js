"use client"
import React,{useState} from 'react'
import "@/styles/Form.css"
const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    people: '',
    fromDate: '',
    toDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/submit-enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert('Your enquiry has been submitted!');
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <h2>Send Your Enquiry Now!</h2>
      <p>Our Travel Expert Will Call You as soon as possible.</p>

      <label htmlFor="fullName">Full Name</label><br />
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Enter a name"
        value={formData.fullName}
        onChange={handleChange}
        required
      /><br /><br />

      <label htmlFor="email">Email</label><br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter an email"
        value={formData.email}
        onChange={handleChange}
        required
      /><br /><br />

      <label htmlFor="phone">Phone Number</label><br />
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="+91 9876543210"
        value={formData.phone}
        onChange={handleChange}
        required
      /><br /><br />

      <label htmlFor="people">No of People</label><br />
      <input
        type="number"
        id="people"
        name="people"
        placeholder="10"
        value={formData.people}
        onChange={handleChange}
        min="1"
        required
      /><br /><br />



      <label htmlFor="message">Message</label><br />
      <textarea
        id="message"
        name="message"
        rows="4"
        placeholder="Type here..."
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea><br /><br />

      <div className="contactButton">
          <button style={{width:"100%", textAlign:"center"}} type="submit">Submit</button>
      </div>

      {/* Add styling in JSX or external CSS */}
      <style jsx>{`
        .travel-date-container {
          margin-bottom: 16px;
        }

        .travel-dates {
          display: flex;
          gap: 16px; /* Adjust gap between inputs */
          align-items: center;
          @media screen and (max-width: 900px) {
              flex-direction: column;
          }
        }

        .travel-dates label {
          margin-right: 8px;
        }

        input[type="date"] {
          padding: 5px;
        }
      `}</style>
    </form>
    </>
  )
}

export default Form
