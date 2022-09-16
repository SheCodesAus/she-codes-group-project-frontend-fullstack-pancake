import TopicLabel from "./TopicLabel";
import "./style.css";

export default function TopicsSelection({
  workshopInputDetails,
  setWorkshopInputDetails,
}) {
  const topics = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Django",
    "DRF",
    "React",
    "PHP",
    "AWS",
    "Testing",
    "Other",
  ];

  const handleTopicClick = topic => {
    if (workshopInputDetails.topics.includes(topic)) {
      const newTopics = workshopInputDetails.topics.filter(
        val => val !== topic
      );
      setWorkshopInputDetails({
        ...workshopInputDetails,
        topics: newTopics,
      });
    } else {
      setWorkshopInputDetails({
        ...workshopInputDetails,
        topics: [...workshopInputDetails.topics, topic],
      });
    }
  };

  return (
    <div className="form-field">
      <label>What topics will be covered?</label>
      <div className="topics-selection-field">
        {topics.map((topic, index) => {
          return (
            <TopicLabel
              key={index}
              value={topic}
              onClick={() => handleTopicClick(topic)}
              labelsSelected={workshopInputDetails.topics}
            />
          );
        })}
      </div>
    </div>
  );
}
