import React from 'react';
const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p><strong>Company:</strong> Rajlee Innovation Pvt Ltd</p>
        <p><strong>Address:</strong> Westren Aqua ,5th Floor ,Hitech-City,Hyderabad</p>
        <p><strong>Email:</strong> pankaj@rajlee.com</p>
        <p><strong>Phone:</strong> +91 9074451965</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;