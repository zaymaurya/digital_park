// ContactForm.js
import React from "react";

function ContactForm({ closeForm }) {
  // Handle form submission (you can add more logic here)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data (e.g., send to server)
    // Show success message
    // Close the form
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3 className="text-center">Talk to us</h3>
      <input type="email" placeholder="Work email*" required />
      <input type="text" placeholder="First name*" required />
      <input type="text" placeholder="Last name*" required />
      <label>
        <input type="checkbox" required /> I agree to Fyle's terms and
        conditions
      </label>
      <button type="submit" className="btn btn-danger">
        Contact Us
      </button>
    </form>
  );
}

export default ContactForm;
