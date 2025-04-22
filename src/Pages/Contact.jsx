import React from "react";
import "../Styles/Contact.css";
import  contactImage from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div className="main-div" id="contact">
      <h1>FEEL FREE TO CONTACT ME!</h1>
      <div className="contact-sections">
        <div className="image-div">
          <img src={contactImage}  alt="contact pic" className="image"></img>
        </div>
        <div className="contact-1">
          <div className="me">
            <h2>Contact Me</h2>
          </div>

          <div className="details-main">
            <div className="details-1">
              <div className="fullName">
                <label htmlFor="First Name"> Full Name</label>
                <input
                  type="text"
                  id="First Name"
                  required
                  className="box"
                ></input>
              </div>

              <div className="email">
                <label htmlFor="email"> E-mail</label>
                <input type="email" id="email" required className="box"></input>
              </div>

              <div className="message">
                <label htmlFor="Message"> Phone Number</label>
                <input
                  type="Phone"
                  id="Phone"
                  required
                  className="box"
                ></input>
              </div>
              <div className="button-wrapper">
                <button>Contact me</button>
              </div>
            </div>

            <div className="details-2">
              <div className="contact-2">
                <b>Contact</b>
                <a href="mailto:samuelamakwah157gmail.com">
                  samuelamakwah157gmail.com
                </a>
              </div>
              <div className="location">
                <b>Based in</b>
                Accra, Takoradi,<br></br> Ghana
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
