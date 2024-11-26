import React from 'react'
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 Your Website. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer