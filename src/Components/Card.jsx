import React from "react";
import "../Styles/Card.css";

const Card = (props) => {
  return (
    
    
      <div className="main-card" style={{ backgroundColor: props.bgColor }}>
        <div className="title">
          <div className="card-image">
            <img src={props.pic} alt="react" />
          </div>
          <h1>{props.heading}</h1>
        </div>
        <div className="information">{props.info}</div>
      </div>

  );
};

export default Card;
