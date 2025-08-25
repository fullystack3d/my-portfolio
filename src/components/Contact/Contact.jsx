// src/components/Contact/Contact.jsx

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // State to manage the form's status (e.g., success, error)
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default page reload

    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmissionStatus("SUCCESS"))
      .catch((error) => setSubmissionStatus("ERROR"));
  };

  // If the form was submitted successfully, show a thank you message
  if (submissionStatus === "SUCCESS") {
    return (
      <section id="contact" className="contact-container">
        <h1 className="main-header">Thank You!</h1>
        <p className="contact-intro">Your message has been sent successfully. I'll get back to you soon.</p>
      </section>
    );
  }

  // If there was an error, show an error message
  if (submissionStatus === "ERROR") {
    return (
      <section id="contact" className="contact-container">
        <h1 className="main-header">Oops!</h1>
        <p className="contact-intro">Something went wrong. Please try again or email me directly.</p>
      </section>
    );
  }

  // Otherwise, show the form
  return (
    <section id="contact" className="contact-container">
      <h1 className="main-header">Contact Me</h1>
      <p className="contact-intro">
        Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
      </p>
      
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true"
        onSubmit={handleSubmit} // Use our JavaScript function
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;