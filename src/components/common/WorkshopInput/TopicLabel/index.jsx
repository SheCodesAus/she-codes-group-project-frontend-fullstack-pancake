import "./style.css";

export default function TopicLabel({ value, onClick, labelsSelected }) {
  return (
    <input
      type="button"
      value={value}
      onClick={onClick}
      className={`input-button ${
        labelsSelected.includes(value) ? "selected-topic" : ""
      }`}
    />
  );
}
