import { Link } from "react-router-dom";
import { useErrorImage } from "../../../../utilities/error/useErrorImage";
import "./style.css";

export default function WorkshopSlideCard({ slide }) {
  const { id, title, description, image, date_and_time } = slide;
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
          {/* this is commented out as the Api fields are not ready yet */}
          {/* <div className="latest-workshop-slide-card-text-row">
          <SkillLevel level={slide.difficulty_level} />
          <span>{slide.location}</span>
        </div> */}
        </div>
        <p className="latest-workshop-slide-card-p">{description}</p>
      </div>
    </Link>
  );
}
