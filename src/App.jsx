import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"; 
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Home />      {/* Home Section */}
        <Services />  {/* Services Section */}
        <About />     {/* About Section */}
        <Contact />   {/* Contact Section */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
