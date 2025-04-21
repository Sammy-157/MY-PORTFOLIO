import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home-main">
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
          <img src="src/assets/sammy.jpg" alt="myself"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
