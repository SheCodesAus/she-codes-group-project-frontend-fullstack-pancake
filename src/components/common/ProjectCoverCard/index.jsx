import React from "react";
import SkillTag from "../SkillTag";
import "./ProjectCoverCard.css";
import { Link, useNavigate } from "react-router-dom";

export default function ProjectCoverCard({
  image,
  workshoptitle,
  language,
  deliverymethod,
  link,
}) {
  return (
    <Link to={link}>
      <div className="ProjectCardContainer">
        <div className="ImageDiv">
          <img className="CoverImage" src={image}></img>
        </div>
        <div className="TextDiv">
          <div className="TitleDifficulty">
            <p className="WorkshopTitle">{workshoptitle}</p>
          </div>
          <div className="LanguageLocation">
            <SkillTag>{language}</SkillTag>
            <span className="DeliveryMethod">{deliverymethod}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
