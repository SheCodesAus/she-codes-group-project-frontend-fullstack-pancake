import SkillLevel from "../common/SkillLevel";
import "./LatestWorkshopSlideCard.css";

export default function LatestWorkshopSlideCard({ slides, current }) {
  return (
    <div className="latest-workshop-slide-card">
      <div className="latest-workshop-slide-card-image">
        <img src={slides[current].image} alt={slides[current].title} />
      </div>
      <div className="latest-workshop-slide-card-text">
        <div className="latest-workshop-slide-card-text-row">
          <h3>{slides[current].title}</h3>
          <p>{slides[current].date_created}</p>
        </div>
        <div className="latest-workshop-slide-card-text-row">
          <SkillLevel level={slides[current].difficulty_level} />
          <span>{slides[current].location}</span>
        </div>
      </div>
      <p className="latest-workshop-slide-card-p">
        {slides[current].description}
      </p>
    </div>
  );
}
