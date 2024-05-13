// import React from 'react';
// const Contact = () => {
//   return (
//     <div className="contact-container">
//       <h1>Contact Us</h1>
//       <div className="contact-info">
//         <p><strong>Company:</strong> Rajlee Innovation Pvt Ltd</p>
//         <p><strong>Address:</strong> Westren Aqua ,5th Floor ,Hitech-City,Hyderabad</p>
//         <p><strong>Email:</strong> pankaj@rajlee.com</p>
//         <p><strong>Phone:</strong> +91 9074451965</p>
//       </div>
//       <form className="contact-form">
//         <input type="text" placeholder="Your Name" />
//         <input type="email" placeholder="Your Email" />
//         <textarea placeholder="Your Message"></textarea>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://3.111.37.163:8080/epankaj/v.0/users/contact', {
        name,
        email,
        message,
      });
      setName('');
      setEmail('');
      setMessage('');
      setMessageSent(true);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleBackClick = () => {
    setMessageSent(false);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>
          <strong>Company:</strong> Rajlee Innovation Pvt Ltd
        </p>
        <p>
          <strong>Address:</strong> Westren Aqua ,5th Floor ,Hitech-City,Hyderabad
        </p>
        <p>
          <strong>Email:</strong> pankaj@rajlee.com
        </p>
        <p>
          <strong>Phone:</strong> +91 9074451965
        </p>
      </div>
      {!messageSent ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      ) : (
        <div>
          <p>Message sent to the owner.</p>
          <button onClick={handleBackClick}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Contact;