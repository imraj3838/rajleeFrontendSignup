import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a leading provider of high-quality Courses and training programs. Our mission is to empower individuals and organizations through knowledge and skill development.
          </p>
        </div>
        <div className="footer-section">
          <h3>Join Us</h3>
          <form className="join-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
  <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
</div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Rajlee Webinars. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;