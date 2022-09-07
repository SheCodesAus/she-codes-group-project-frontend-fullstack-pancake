import React, { useState } from "react";
import WorkshopSlideCard from "../WorkshopSlideCard";
import "./style.css";

export default function Carousel({ title, subTitle, slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className="slider-container">
      <div className="slider-title-group">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
      <div className="slider-slides">
        <span
          className="slide-control"
          onClick={() => {
            currentSlideIndex !== 0
              ? setCurrentSlideIndex(currentSlideIndex - 1)
              : setCurrentSlideIndex(slides.currentSlideIndex - 1);
          }}
        >
          {/* this is to show a symbol of <<  to indicate this is a button functioning as `go to previous slide`. This will be updated later to an icon, just want to check if we're allowed to use an Icon library before I install it */}
          &#8810;
        </span>
        <WorkshopSlideCard slide={slides[currentSlideIndex]} />
        <span
          className="slide-control"
          onClick={() => {
            currentSlideIndex !== slides.length - 1
              ? setCurrentSlideIndex(currentSlideIndex + 1)
              : setCurrentSlideIndex(0);
          }}
        >
          {/* this is to show a symbol of >>  to indicate this is a button functioning as `go to next slide`. This will be updated later to an icon, just want to check if we're allowed to use an Icon library before I install it */}
          &#8811;
        </span>
      </div>
    </div>
  );
}
