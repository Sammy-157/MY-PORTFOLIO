import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-menu ${isOpen ? "show" : ""}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>

      <Link to="/contact" className="nav-link">Lets link up</Link>
    </nav>
  );
};

export default Navbar;
