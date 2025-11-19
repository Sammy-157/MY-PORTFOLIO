import React, { useEffect } from "react";
import "../Styles/Contact.css";
import contactImage from "../assets/contact.jpg"; // Ensure this path is correct
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="main-div" id="contact">
      <h1 data-aos="fade-down">FEEL FREE TO CONTACT ME!</h1>

      <div className="contact-sections">
        {/* Image Section */}
        <div className="image-div" data-aos="zoom-in">
          <img src={contactImage} alt="Contact" className="image" />
        </div>

        {/* Form & Info Section */}
        <div className="contact-1" data-aos="fade-up">
          <div className="details-main">
            {/* Contact Form */}
            <div className="details-1">
              <div className="fullName">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="e.g. Samuel Amankwah"
                  required
                  className="box"
                />
              </div>

              <div className="email">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Hello, there"
                  required
                  className="box"
                  rows={4}
                ></textarea>
              </div>

              <div className="message">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="e.g. +233 555 000 000"
                  required
                  className="box"
                />
              </div>

              <div className="button-wrapper">
                <button className="contact-button">Contact Me</button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="details-2" data-aos="fade-left">
              <div className="contact-2">
                <b><FaEnvelope /> Email</b>
                <a href="mailto:samuelamakwah157@gmail.com">
                  samuelamakwah157@gmail.com
                </a>
              </div>
              <div className="location">
                <b><FaMapMarkerAlt /> Based In</b>
                Accra, Takoradi,<br />Ghana
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
