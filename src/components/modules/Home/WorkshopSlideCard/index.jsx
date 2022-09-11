import { Link } from "react-router-dom";
import SkillTag from "../../../common/SkillTag";
import SkillLevel from "../../../common/SkillLevel";
import { useErrorImage } from "../../../../utilities/error/useErrorImage";
import "./style.css";

export default function WorkshopSlideCard({ slide }) {
  const { id, title, image, date_and_time, topics, experience_level } = slide;
  return (
    <Link to={`workshop/${id}`} className="latest-workshop-slide-card">
      <div>
        <div className="latest-workshop-slide-card-image">
          <img src={image} alt={title} onError={useErrorImage} />
        </div>
        <div className="latest-workshop-slide-card-text">
          <div className="latest-workshop-slide-card-text-row">
            <h3>{title}</h3>
            <p>{new Date(date_and_time).toLocaleDateString()}</p>
          </div>
          <div className="latest-workshop-slide-card-text-row">
            <div className="language-tags">
              {topics.map((language, index) => (
                <SkillTag key={index}>{language}</SkillTag>
              ))}
            </div>
            <SkillLevel level={experience_level} />
          </div>
        </div>
      </div>
    </Link>
  );
}
