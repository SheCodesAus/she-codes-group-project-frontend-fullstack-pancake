import React from "react";
import { Link } from "react-router-dom";
import SkillLevel from "../common/SkillLevel";
import SkillTag from "../common/SkillTag";
import "./ProjectCoverCard.css";

export default function ProjectCoverCard({
  image,
  workshoptitle,
  languages,
  difficulty,
  deliverymethod,
  link,
}) {
  return (
    <Link to={link}>
      <div className="ProjectCardContainer">
        <div className="ImageDiv">
          <img className="CoverImage" src={image} alt={workshoptitle} />
        </div>
        <div className="TextDiv">
          <div className="TitleDifficulty">
            <p className="WorkshopTitle">{workshoptitle}</p>
            <SkillLevel level={difficulty} />
          </div>
          <div className="LanguageLocation">
            <div className="language-tags">
              {languages.map((language, index) => (
                <SkillTag key={index} tagColor={language.tagColor}>
                  {language.language}
                </SkillTag>
              ))}
            </div>

            <span className="DeliveryMethod">{deliverymethod}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
