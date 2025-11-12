import React from "react";
import Card from "../Components/Card";
import "../Styles/Services.css";
import Reactpic from "../assets/react.svg";
import Photoshop from "../assets/photoshop.png";
import appDev from "../assets/app-development.png";
import Mentorship from "../assets/leadership-development.png";
import { motion } from "framer-motion";

const Services = () => {
  const projectData = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      image: "https://via.placeholder.com/300x200",
      liveLink: "https://samuelamankwah.netlify.app/",
      codeLink: "https://github.com/Sammy-157/MY-PORTFOLIO.git",
    },
    {
      id: 2,
      title: "E-commerce Store 1 ",
      description: "A simple online shop made using React & Firebase.",
      image: "https://via.placeholder.com/300x200",
      liveLink: "https://girlhood.netlify.app/",
      codeLink: "https://github.com/Sammy-157/Fashion-Shop.git",
    },
    {
      id: 2,
      title: "E-commerce Store 2 ", 
      description: "A simple online shop made using React & Firebase.",
      image: "https://via.placeholder.com/300x200",
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "E-commerce Store",
      description: "A simple online shop made using React & Firebase.",
      image: "https://via.placeholder.com/300x200",
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "E-commerce Store",
      description: "A simple online shop made using React & Firebase.",
      image: "https://via.placeholder.com/300x200",
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "E-commerce Store",
      description: "A simple online shop made using React & Firebase.",
      image: "https://via.placeholder.com/300x200",
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <motion.div
      className="services-div"
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="myservices-div">
        <h1>MY SERVICES 😎</h1>
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
Full-stack experience with frontend & backend technologies"
            bgColor="#FFFFFF"
          />
          <Card
            pic={appDev}
            heading="APP DEVELOPMENT"
            info="I design and develop sleek, high-performance mobile applications that bring your ideas to life.
       From concept to deployment, I build cross-platform apps using modern frameworks like React Native
        or Flutter — ensuring fast, responsive, and native-like experiences.

Whether you need a personal app, a business tool, or a full-featured product, 
Your app will be ready for both Android and iOS platforms with a single codebase.
I build fast, intuitive mobile apps tailored"
            bgColor="#EDEDED"
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
 Creating stunning visuals for brand identity and marketing."
            bgColor="#FFFFFF"
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
            bgColor="#EDEDED"
          />
        </div>
      </div>

     
      <div className="projects-section" id="projects">
        <h1 className="projects-title">MY PROJECTS 💻</h1>
        <div className="projects-grid">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-buttons">
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  Source Code
                </a>
               
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
