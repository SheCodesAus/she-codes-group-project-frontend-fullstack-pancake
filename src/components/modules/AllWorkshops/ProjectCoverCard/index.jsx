import React from "react";
import { Link } from "react-router-dom";
import SkillLevel from "../../../common/SkillLevel";
import SkillTag from "../../../common/SkillTag";
import { useErrorImage } from "../../../../services/error/useErrorImage";
import "./ProjectCoverCard.css";

export default function ProjectCoverCard({
  id,
  image,
  organiserName,
  workshopTitle,
  dateAndTime,
  isOnline,
  isInPerson,
}) {
  const switchDeliveryMode = (isOnline, isInPerson) => {
    if (isOnline && !isInPerson) {
      return "Online";
    }
    if (!isOnline && isInPerson) {
      return "In Person";
    }
    if (isOnline && isInPerson) {
      return "Online & In Person";
    }
  };
  return (
    <Link to={`/workshop/${id}`}>
      <div className="project-card-container">
        <div className="project-card-image">
          <img src={image} alt={workshopTitle} onError={useErrorImage} />
        </div>
        <div className="project-card-text">
          <div className="text-row title-row">
            <span>{workshopTitle}</span>
            <span>{organiserName}</span>
          </div>
          <div className="text-row">
            <span>{switchDeliveryMode(isOnline, isInPerson)}</span>
            <span>{new Date(dateAndTime).toLocaleDateString()}</span>
          </div>
          {/* here will be a line of skills level and the languages, will update once backen data field is ready */}
          {/* <div className="text-row">
            <div className="language-tags">
              {languages.map((language, index) => (
                <SkillTag key={index}>{language}</SkillTag>
              ))}
            </div>

            <SkillLevel level={difficulty} />
          </div> */}
        </div>
      </div>
    </Link>
  );
}
