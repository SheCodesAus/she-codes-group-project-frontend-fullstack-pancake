import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SkillLevel from "../../../common/SkillLevel";
import SkillTag from "../../../common/SkillTag";
import { useErrorImage } from "../../../../utilities/error/useErrorImage";
import { getUserById } from "../../../../services/users/getUserById";
import { getDeliveryMethod } from "../../../../utilities/getDeliveryMethod";
import "./style.css";

export default function ProjectCoverCard({
  id,
  image,
  organiserId,
  workshopTitle,
  dateAndTime,
  topics,
  experienceLevel,
  isOnline,
  isInPerson,
}) {
  const [organiserName, setOrganiserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(organiserId).then(data => {
      const { username } = data;
      setOrganiserName(username);
      setLoading(false);
    });
  }, []);

  return (
    <Link to={`/workshop/${id}`}>
      <div className="project-card-container">
        <div className="project-card-image">
          <img src={image} alt={workshopTitle} onError={useErrorImage} />
        </div>
        <div className="project-card-text">
          <div className="text-row title-row">
            <h3>{workshopTitle}</h3>
            <span>{loading ? "fetching..." : organiserName}</span>
          </div>
          <div className="text-row">
            <span>{getDeliveryMethod(isOnline, isInPerson)}</span>
            <span>{new Date(dateAndTime).toLocaleDateString()}</span>
          </div>
          <div className="text-row">
            <div className="language-tags">
              {topics.map((language, index) => (
                <SkillTag key={index}>{language}</SkillTag>
              ))}
            </div>

            <SkillLevel level={experienceLevel} />
          </div>
        </div>
      </div>
    </Link>
  );
}
