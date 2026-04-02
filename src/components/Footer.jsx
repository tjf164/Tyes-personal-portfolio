import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container container">
      <div className="footer-content">
        <p className="copyright">&copy; {new Date().getFullYear()} Tye Frankel. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
