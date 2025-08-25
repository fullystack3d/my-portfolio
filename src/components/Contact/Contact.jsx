// src/components/Contact/Contact.jsx

import React from 'react';
import { useForm } from '@formspree/react';
import './Contact.css';

const Contact = () => {
  const [state, formspreeHandleSubmit] = useForm("mpwlvyqk"); // Use your actual ID

  // --- Start of New Code ---
  // Create a wrapper function to manually prevent the page reload
  const handleSubmit = (e) => {
    e.preventDefault(); // This line explicitly stops the page from reloading
    console.log("Form submission handled by JavaScript!"); // You can see this in the browser console
    formspreeHandleSubmit(e); // Now, let Formspree handle the submission
  };
  // --- End of New Code ---


  if (state.succeeded) {
    return (
      <section id="contact" className="contact-container">
        <h1 className="main-header">Thank You!</h1>
        <p className="contact-intro">Your message has been sent successfully. I'll get back to you soon.</p>
      </section>
    );
  }

  const isFormDisabled = state.errors && state.errors.some(err => err.code === 'FORM_DISABLED');
  if (isFormDisabled) {
    return (
      <section id="contact" className="contact-container">
        <h1 className="main-header">Thanks for Your Interest!</h1>
        <p className="contact-intro">
          This form is currently receiving a lot of messages. Please try again later or email me directly.
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-container">
      <h1 className="main-header">Contact Me</h1>
      <p className="contact-intro">
        Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
      </p>
      
      {/* The form now calls our new wrapper function */}
      <form onSubmit={handleSubmit} className="contact-form">
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
        
        <button type="submit" className="submit-button" disabled={state.submitting}>
          {state.submitting ? 'Submitting...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;