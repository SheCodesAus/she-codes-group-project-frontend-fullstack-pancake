import React, { useState } from "react";
import LatestWorkshopSlideCard from "./LatestWorkshopSlideCard";
import "./index.css";

export default function LatestWorkshopSlider({ title, subTitle, slides }) {
  const [current, setCurrent] = useState(0);

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
            current !== 0
              ? setCurrent(current - 1)
              : setCurrent(slides.length - 1);
          }}
        >
          &#8810;
        </span>
        <LatestWorkshopSlideCard slides={slides} current={current} />
        <span
          className="slide-control"
          onClick={() => {
            current !== slides.length - 1
              ? setCurrent(current + 1)
              : setCurrent(0);
          }}
        >
          &#8811;
        </span>
      </div>
    </div>
  );
}
