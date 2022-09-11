import React from "react";
import SkillLevel from "../../common/SkillLevel";
import SkillTag from "../../common/SkillTag";
import { useErrorImage } from "../../../utilities/error/useErrorImage";
import { MdCalendarToday, MdLocationPin } from "react-icons/md";
import { getDeliveryMethod } from "../../../utilities/getDeliveryMethod";
import "./style.css";

export default function WorkshopDetail({ payload }) {
  const { organiserName, workshopData } = payload;
  const {
    title,
    description,
    image,
    workshop_link,
    topics,
    experience_level,
    date_and_time,
    is_in_person,
    is_online,
    physical_location,
  } = workshopData;

  return (
    <div className="workshop-detail-card">
      <div className="workshop-detail-image">
        <img src={image} alt={title} onError={useErrorImage} />
      </div>
      <div className="workshop-detail-text">
        <div className="workshop-detail-text-row">
          <h2>{title}</h2>
          <h3>{organiserName}</h3>
        </div>
        <div className="workshop-detail-text-row">
          <div className="language-tags">
            {topics.map((language, index) => (
              <SkillTag key={index}>{language}</SkillTag>
            ))}
          </div>

          <SkillLevel level={experience_level} showText={true} />
        </div>
        <div className="workshop-detail-text-row">
          <div className="workshop-detail-text-with-icon">
            <MdCalendarToday className="workshop-detail-icon" />
            <span>{new Date(date_and_time).toLocaleDateString()}</span>
          </div>
          <div className="workshop-detail-text-with-icon">
            <MdLocationPin className="workshop-detail-icon" />
            <span>{getDeliveryMethod(is_online, is_in_person)}</span>
            <span>
              {is_in_person || is_in_person === "true" ? physical_location : ""}
            </span>
          </div>
        </div>
        <div className="workshop-detail-text-col">
          <h4>Workshop Details</h4>
          <p>{description}</p>
        </div>
        <div className="workshop-detail-text-row">
          <a
            href={workshop_link}
            target="_blank"
            rel="noreferrer"
            className="full"
          >
            <button className="button-primary full">
              Go to workshop official page
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
