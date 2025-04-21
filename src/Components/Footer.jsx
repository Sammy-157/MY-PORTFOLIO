import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="image-icons">
      <NavLink to="https://www.facebook.com/share/1AP8w2D8Mj/"><FaFacebook /></NavLink>
        <NavLink to="https://www.instagram.com/digginssammy/"><FaInstagram /></NavLink>
        <NavLink to="https://wa.me/233537387548"><FaWhatsapp /></NavLink> 
        <NavLink to="https://www.linkedin.com/in/samuel-amankwah-785341323?"><FaLinkedin /></NavLink>
      </div>
      <b>Copyright ©{new Date().getFullYear()} All rights reserved</b>
    </div>
  );
};

export default Footer;
