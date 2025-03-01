"use client";
import React, { useState } from 'react';
import "../styles/Form.css";

const Form = () => {
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
      const botToken = "7953446645:AAGMjGBx1cotqlXIWci7PraNNJZLS6nKgWk"; // Your bot token
      const chatId = "148013002"; // Your chat ID
      
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
      <form onSubmit={handleSubmit} className="form">
        <h2>Send Your Enquiry Now!</h2>
        <p>Our Travel Expert Will Call You as soon as possible.</p>

        <label htmlFor="fullName">Full Name</label><br />
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter a name"
          required
        /><br /><br />

        <label htmlFor="email">Email</label><br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter an email"
          required
        /><br /><br />

        <label htmlFor="phone">Phone Number</label><br />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter Your 10-digit mobile no."
          pattern="[0-9]{10}"
          title="Phone number must be exactly 10 digits"
          required
        /><br /><br />

        <label htmlFor="people">No of People</label><br />
        <input
          type="number"
          id="people"
          name="people"
          placeholder="10"
          min="1"
        /><br /><br />

        <label htmlFor="message">Message</label><br />
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Type here..."
        ></textarea><br /><br />

        <div className="contactButton">
          <button style={{ width: "100%", textAlign: "center" }} type="submit">Submit</button>
        </div>

        {formStatus === 'success' && <p className="success-message">Form submitted successfully!</p>}
        {formStatus === 'error' && <p className="error-message">There was an error submitting the form. Please try again later.</p>}
      </form>

      <style jsx>{`
        .success-message {
          color: green;
          margin-top: 10px;
        }

        .error-message {
          color: red;
          margin-top: 10px;
        }

        .travel-date-container {
          margin-bottom: 16px;
        }

        .travel-dates {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .travel-dates label {
          margin-right: 8px;
        }

        input[type="date"] {
          padding: 5px;
        }
      `}</style>
    </>
  );
}

export default Form;
