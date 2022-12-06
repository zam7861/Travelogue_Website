import React from "react";
import "./PlacesGallery.css";

const PlacesGallery = (props) => {
  return (
    <div className="place-card">
      <img id={props.id} src={props.url} alt={props.alt} />
      <div className="place-details">
        <h2>{props.title}</h2>
        <p>{props.description} </p>
      </div>
    </div>
  );
};

export default PlacesGallery;
