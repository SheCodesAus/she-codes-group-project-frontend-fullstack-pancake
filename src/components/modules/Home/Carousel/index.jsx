import React, { useState } from "react";
import WorkshopSlideCard from "../WorkshopSlideCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
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
              : setCurrentSlideIndex(slides.length - 1);
          }}
        >
          <MdKeyboardArrowLeft />
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
          <MdKeyboardArrowRight />
        </span>
      </div>
    </div>
  );
}
