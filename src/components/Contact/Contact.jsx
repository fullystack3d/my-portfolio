// src/components/Contact/Contact.jsx

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h1 className="main-header">Contact Me</h1>
      <p className="contact-intro">
        Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
      </p>
      
      {/* This is a Netlify-enhanced HTML form */}
      <form name="contact" method="POST" data-netlify="true">
        {/* This hidden input is required for Netlify to identify the form */}
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