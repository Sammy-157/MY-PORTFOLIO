import React from "react";
import Card from "../Components/Card";
import "../Styles/Services.css";
import Reactpic from "../assets/react.svg";
import Photoshop from "../assets/photoshop.png";
import appDev from "../assets/app-development.png";
import Mentorship from "../assets/leadership-development.png";

const Services = () => {
  return (
   
      <div className="services-div" id="services">
        <div className="myservices-div">
        <h1>MY SERVICES!</h1>
      </div>

      <div className="all-devs">
        <div className="devs-1">
          <Card
            pic={Reactpic}
            heading="WEB DEVELOPMENT"
            info="I specialize in building responsive, user-friendly websites that help brands stand out online. 
    From landing pages to full-stack web applications,
     I deliver clean, efficient, and scalable code tailored to your needs.

My focus is on performance, accessibility, and seamless user experience across all devices and browsers. 
Whether it's a portfolio, e-commerce platform, or a business site,
I bring your vision to life with modern tools and frameworks.
Full-stack experience with frontend & backend technologies."
            bgColor="#FFC22E"
          />
          <Card
            pic={appDev}
            heading="APP DEVELOPMENT"
            info="I design and develop sleek, high-performance mobile applications that bring your ideas to life.
       From concept to deployment, I build cross-platform apps using modern frameworks like React Native
        or Flutter — ensuring fast, responsive, and native-like experiences.

Whether you need a personal app, a business tool, or a full-featured product, 
Your app will be ready for both Android and iOS platforms with a single codebase.
I build fast, intuitive mobile apps tailored "
            bgColor="#FF6018"
          />
        </div>

        <div className="devs-2">
          <Card
            pic={Photoshop}
            heading="GRAPHIC DESIGNING"
            info="I create visually compelling designs that elevate your brand and communicate your message clearly.
       From logos and social media graphics to posters and marketing materials, 
       every design is crafted with creativity and purpose.

I combine aesthetics with strategy to ensure your visuals not only look great but also connect with your audience.
 Whether you need a full brand identity or a one-off design, I’ve got you covered.
 Creating stunning visuals for brand identity and marketing.
"
            bgColor="#B4D772"
          />

          <Card
            pic={Mentorship}
            heading="MENTORSHIP"
            info="I offer impactful mentorship that empowers individuals to grow their skills
       and reach their goals with clarity and confidence.
       From beginners seeking guidance to professionals refining their craft,
        every session is tailored with intention and purpose.

I combine hands-on experience with personalized strategy to ensure you gain both knowledge and direction. 
Whether you're navigating your first project or building a career path, 
I’m here to support and guide you every step of the way."
            bgColor="#FFC2F1"
          />
        </div>
      </div>
      </div>
   
  );
};

export default Services;
