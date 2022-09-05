import React from "react";
import { Link } from "react-router-dom";
import SkillLevel from "../../../common/SkillLevel";
import SkillTag from "../../../common/SkillTag";
import { useErrorImage } from "../../../../services/error/useErrorImage";
import "./ProjectCoverCard.css";

export default function ProjectCoverCard({
  id,
  image,
  orgniserName,
  workshopTitle,
  date_and_time,
  is_online,
  is_in_person,
}) {
  return (
    <Link to={`/workshop/${id}`}>
      <div className="project-card-container">
        <div className="project-card-image">
          <img src={image} alt={workshopTitle} onError={useErrorImage} />
        </div>
        <div className="project-card-text">
          <div className="text-row title-row">
            <span>{workshopTitle}</span>
            <span>{orgniserName}</span>
          </div>
          <div className="text-row">
            <span>
              {is_online && !is_in_person
                ? "Online"
                : is_in_person && !is_online
                ? "In Person"
                : is_online && is_in_person
                ? "Online & In Person"
                : ""}
            </span>
            <span>{new Date(date_and_time).toLocaleDateString()}</span>
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
