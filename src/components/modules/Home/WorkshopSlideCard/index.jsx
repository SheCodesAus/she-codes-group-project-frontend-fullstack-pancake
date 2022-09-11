import { Link } from "react-router-dom";
import SkillTag from "../../../common/SkillTag";
import SkillLevel from "../../../common/SkillLevel";
import { useErrorImage } from "../../../../utilities/error/useErrorImage";
import "./style.css";

export default function WorkshopSlideCard({ slide }) {
  const {
    id,
    title,
    description,
    image,
    date_and_time,
    topics,
    experience_level,
  } = slide;
  return (
    <Link to={`workshop/${id}`} className="latest-workshop-slide-card">
      <div>
        <div className="latest-workshop-slide-card-image">
          <img src={image} alt={title} onError={useErrorImage} />
        </div>
        <div className="latest-workshop-slide-card-text">
          <div className="latest-workshop-slide-card-text-left">
            <h3>{title}</h3>
            <p>{new Date(date_and_time).toLocaleDateString()}</p>
            <div className="language-tags">
              {topics.map((language, index) => (
                <SkillTag key={index}>{language}</SkillTag>
              ))}
            </div>
            <SkillLevel level={experience_level} showText={true} />
          </div>
          <div className="latest-workshop-slide-card-text-right">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
