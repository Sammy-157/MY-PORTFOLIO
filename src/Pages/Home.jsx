import React from "react";
import "../Styles/Home.css";
import sammy from  "../assets/sammy.jpg";

const Home = () => {
  return (
    <div className="home-main" id="home">
      <h1>HOMEPAGE</h1>
      <div className="home-sections">
        <div className="home-left">
          <b>HELLO,</b>
          <p>I AM SAMUEL KOFI NTEM AMANKWAH,</p>
          <p> A JUNIOR SOFTWARE DEVELOPER</p>
          <b>WELCOME</b>
          <p>THIS IS MY PORTFOLIO</p>
          <div className="resume">
            <b>DOWNLOAD RESUME HERE 👇</b>
            
            <button className="button-wrapper">DOWNLOAD</button>
            
          </div>
        </div>

          
        <div className="home-right">
          <img src={sammy} alt="myself"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
