import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function TwoColumn({
  heading,
  paragraph,
  buttonText,
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
          <button
            className={`${
              buttonText === "Learn more about Ashleigh"
                ? "button-founder"
                : "button-primary"
            } `}
          >
            {buttonText}
          </button>
        </Link>
      </div>
      <div className="columnImage">
        <div
          className={`image-overlay  ${
            buttonText === "Learn more about Ashleigh" ? "no-overlay" : ""
          }`}
        ></div>
        <img src={image} alt={heading} />
      </div>
    </div>
  );
}
