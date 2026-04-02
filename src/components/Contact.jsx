import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section container contact-section">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="label">Get in Touch</span>
        <h2 className="section-title">Let's build something <br /> remarkable together.</h2>
        
        <div className="contact-methods">
          <motion.a 
            href="mailto:tyefrankel@gmail.com" 
            className="email-link-large"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            tyefrankel@gmail.com
          </motion.a>

          <div className="social-grid">
            <a href="https://github.com" className="social-item" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              <span>Github</span>
            </a>
            <a href="https://linkedin.com" className="social-item" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://instagram.com" className="social-item" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
