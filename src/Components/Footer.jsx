import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="social-icons">
          <NavLink to="https://www.facebook.com/share/1AP8w2D8Mj/" target='_blank'><FaFacebook /></NavLink>
          <NavLink to="https://www.instagram.com/digginssammy/" target='_blank'><FaInstagram /></NavLink>
          <NavLink to="https://wa.me/233537387548" target='_blank'><FaWhatsapp /></NavLink>
          <NavLink to="https://www.linkedin.com/in/samuel-amankwah-785341323?" target='_blank'><FaLinkedin /></NavLink>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Samuel Amankwah. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
