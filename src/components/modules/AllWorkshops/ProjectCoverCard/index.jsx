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
  console.log(new Date(dateAndTime) < new Date() ? "past" : "future");

  useEffect(() => {
    getUserById(organiserId).then(data => {
      const { username } = data;
      setOrganiserName(username);
      setLoading(false);
    });
  }, []);

  const renderArchiveCover = () => {
    return <div className="archive-cover">This workshop has finished</div>;
  };
  return (
    <Link to={`/workshop/${id}`} className="project-link">
      <div className="project-card-container">
        <div className="project-card-image">
          <img src={image} alt={workshopTitle} onError={useErrorImage} />
        </div>
        <div className="project-card-text">
          <div className="text-col">
            <h3>
              {workshopTitle.length < 20
                ? workshopTitle
                : `${workshopTitle.slice(0, 20)}...`}
            </h3>
            <span>{loading ? "fetching..." : organiserName}</span>
          </div>
          <div className="text-row">
            <div className="language-tags">
              {topics.map((language, index) => (
                <SkillTag key={index}>{language}</SkillTag>
              ))}
            </div>
            <SkillLevel level={experienceLevel} showText={false} />
          </div>
          <div className="text-row">
            <span>{getDeliveryMethod(isOnline, isInPerson)}</span>
            <span>{new Date(dateAndTime).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      {new Date(dateAndTime) < new Date() && renderArchiveCover()}
    </Link>
  );
}
