import SkillLevel from "../../../common/SkillLevel";
import "./LatestWorkshopSlideCard.css";

export default function LatestWorkshopSlideCard({ slide }) {
  return (
    <div className="latest-workshop-slide-card">
      <div className="latest-workshop-slide-card-image">
        <img src={slide.image} alt={slide.title} />
      </div>
      <div className="latest-workshop-slide-card-text">
        <div className="latest-workshop-slide-card-text-row">
          <h3>{slide.title}</h3>
          <p>{slide.date_created}</p>
        </div>
        <div className="latest-workshop-slide-card-text-row">
          <SkillLevel level={slide.difficulty_level} />
          <span>{slide.location}</span>
        </div>
      </div>
      <p className="latest-workshop-slide-card-p">{slide.description}</p>
    </div>
  );
}
