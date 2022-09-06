import React from "react";
import { Link } from "react-router-dom";
import "./twocolumn.css";

export default function TwoColumn({
  heading,
  paragraph,
  button,
  image,
  link,
  direction,
}) {
  return (
    <div
      className={`columnContainer ${direction === "reverse" ? "reverse" : ""}`}
    >
      <div className="columnText">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <Link to={link}>
          <button className="primary">{button}</button>
        </Link>
      </div>
      <div className="columnImage">
        <img src={image} alt={heading} />
      </div>
    </div>
  );
}
