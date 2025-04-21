import React from "react";
import "../Styles/About.css";
import kofiImage from "../assets/kofi.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-2">
        <div className="about-sections">
          <div className="about-left">
            <div className="about-image">
              <img src={kofiImage} alt="picture1"></img>
            </div>
          </div>
          <div className="about-right">
            <h1>ABOUT ME</h1>
            <div className="paragraph-wrapper">
            <p>
              I'm Samuel Amankwah, a Level 200 student at the University of
              Ghana. As a passionate software developer, I'm driven by a desire
              to create innovative solutions that make a real impact. With a
              strong foundation in computer science and a keen interest in
              software development, I'm committed to continuously improving my
              skills and expanding my knowledge in the field.
            </p>
            <hr></hr>
            <p>
              I'm excited to showcase my projects and experiences on this
              portfolio, which highlights my journey as a software developer.
              Through this platform, I aim to demonstrate my capabilities, share
              my ideas, and connect with like-minded individuals who share my
              passion for technology.
            </p>
            <hr></hr>
            <p>
              With a strong work ethic and a willingness to learn, I'm dedicated
              to pushing myself to new heights and achieving excellence in
              software development. I'm looking forward to collaborating with
              others, taking on new challenges, and contributing to exciting
              projects that showcase my skills and creativity.
            </p>
            <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
