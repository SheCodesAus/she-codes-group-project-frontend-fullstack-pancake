import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useErrorImage } from "../../../../utilities/error/useErrorImage";
import "./style.css";
import CarolineImage from "../../../../assets/images/Caroline_Headshot.jpeg";
import DonnaImage from "../../../../assets/images/Donna-Mari_Headshot.jpeg";
import EmilyImage from "../../../../assets/images/Emily_Headshot.jpeg";
import MiaoImage from "../../../../assets/images/Miao_Headshot.jpeg";
import RosieImage from "../../../../assets/images/Rosie_Headshot.jpeg";
import VanessaImage from "../../../../assets/images/Vanessa_Headshot.jpeg";

const AboutUsFields = [
  {
    image: CarolineImage,
    title: "Caroline Birch",
    text: "Caroline helped to build the back end of Thinkle",
  },
  {
    image: RosieImage,
    title: "Rosie Kizil",
    text: "Rosie helped to build the back end of Thinkle",
  },
  {
    image: VanessaImage,
    title: "Vanessa Kim",
    text: "Vanessa helped to build the back end of Thinkle",
  },
  {
    image: MiaoImage,
    title: "Miao Zhao",
    text: "Miao helped to build the front end of Thinkle",
  },
  {
    image: EmilyImage,
    title: "Emily Conaghan",
    text: "Emily helped to build the front end of Thinkle",
  },
  {
    image: DonnaImage,
    title: "Donna-Mari van Schalkwyk",
    text: "Donna-Mari helped to build the front end of Thinkle",
  },
];

export default function MeetTheTeamCard() {
  return AboutUsFields.map((field, index) => {
    const { image, title, text } = field;

    return (
      <div className="meet-the-team-container">
        <div className="meet-the-team-image">
          <img src={image} />
        </div>

        <div className="meet-the-team-text">
          <div className="text-row title-row">
            <h3>{title}</h3>
          </div>
          <div className="text-row">
            <h6>{text} </h6>
          </div>
        </div>
      </div>
    );
  });
}
