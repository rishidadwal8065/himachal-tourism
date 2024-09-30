"use client"
import React, {useState, useEffect} from "react";
import "../styles/GetInTouch.css";
const GetInTouch = () => {
  const [isWindowBelow768, setIsWindowBelow768] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowBelow768(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    // Check window size on mount
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [formStatus, setFormStatus] = useState(null); // Track form status

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append access key for Web3Forms
    formData.append("access_key", "652de30f-937e-4626-9dbd-e62c44ee6254");

    // Convert FormData to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      // 1. Send form data to Web3Forms (for email)
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await emailResponse.json();

      if (emailResponse.ok && result.success) {
        console.log(result);
        setFormStatus('success'); // Set success status
        event.target.reset(); // Reset the form fields
      } else {
        console.error(result);
        setFormStatus('error'); // Set error status
        return;
      }

      // 2. Send form data to Telegram bot
      const botToken = "7637463866:AAEEHPp71Z2DkRZR0jksqACzOrqqUQ5tFWU"; // Your bot token
      const chatId = "1340393784"; // Your chat ID
      
      // Create the message text for Telegram
      const telegramMessage = `
      New Form Submission:
      Name: ${object.fullName}
      Email: ${object.email}
      Phone: ${object.phone}
      People: ${object.people}
      Message: ${object.message}
      `;

      // Send message to Telegram
      const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
      });

      if (!telegramResponse.ok) {
        console.error("Failed to send message to Telegram.");
        setFormStatus('error'); // Handle Telegram error
      }

      // Automatically clear the success message after 20 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 20000); // 20 seconds

    } catch (error) {
      console.error("Error submitting form:", error.message);
      setFormStatus('error'); // Handle network or fetch errors
    }
  }
  return (
    <>
      {/* Contact Section */}
      <main id="get-in-touch" className="get-in-touch" style={{ flexDirection: isWindowBelow768 ? 'column' : 'row' }}>
        <div className="content">
          <p>
            Interested in our product? <br />
            We are just a call away! <br />
            Please reach out to us at:
          </p>
          <span className="email">
            <h5>EMAIL</h5>
            <a target="_blank" href="mailto:+91 7836098136">
              <li>
                  1990rishi@gmail.com
              </li>
            </a>  
          </span>
          <span className="phone-whatsapp">
            <h5>PHONE/WHATSAPP</h5>
           <a target="_blank" href="tel:+91 7836098136"><li>+91 9876543210</li></a> 
          </span>
        </div>

        <form onSubmit={handleSubmit}
          className="input"
          style={isWindowBelow768 ? { width: '100%', padding: '5% 0 0 10%' } : { width: '50%', padding: '0' }}
        >
          <div className="input-content">
            <h2>Get in touch</h2>
            <p>We would love to hear from you.</p>
          </div>

          <div className="full-input half-input">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter a name"
            required
          />
          </div>

          <div className="full-input half-input">
            <label htmlFor="people">No of People</label>
            <input
              type="number"
              id="people"
              name="people"
              placeholder="10"
              min="1"
              required
            />
          </div>

          <div className="full-input">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter an email"
                required
              />
          </div>

          <div className="full-input">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Your 10-digit mobile no."
              pattern="[0-9]{10}"
              title="Phone number must be exactly 10 digits"
              required
            />
          </div>

          <div className="full-input message">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type here..."
              required
            ></textarea>
          </div>

          <div className="contactButton">
          <button style={{ width: "100%", textAlign: "center" }} type="submit">Submit</button>
          </div>
          
          {formStatus === 'success' && <p style={{margin:"5px 0 0 2px"}}  className="success-message">Form submitted successfully!</p>}
          {formStatus === 'error' && <p  style={{margin:"5px 0 0 2px"}} className="error-message">There was an error submitting the form. Please try again later.</p>}

        </form>
      </main>

      {/* Map Section */}
    
      <style jsx>{`
        .green-btn {
          background-color: green;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .full-input {
          margin-bottom: 15px;
        }
        .full-input label {
          display: block;
          margin-bottom: 5px;
        }
        .content,
        .input-content {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
};

export default GetInTouch;
