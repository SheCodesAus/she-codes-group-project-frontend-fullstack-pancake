import React from "react";
import "./style.css";

export default function SkillLevel({ level, showText }) {
  const switchLevel = level => {
    if (level === "EL" || level === "Entry-level") {
      return "Entry Level";
    }
    if (level === "Intermediate") {
      return "Intermediate";
    }
    if (level === "Advanced") {
      return "Advanced";
    }
  };
  return (
    <div className="skill-level-container">
      <div className="skill-level-group">
        <div
          className={`skill-level level-easy ${
            level === "EL" || level === "Entry-level" ? "level-selected" : ""
          }`}
        ></div>
        <div
          className={`skill-level level-middle ${
            level === "Intermediate" ? "level-selected" : ""
          }`}
        ></div>
        <div
          className={`skill-level level-advanced ${
            level === "Advanced" ? "level-selected" : ""
          }`}
        ></div>
      </div>
      {showText && (
        <span className="skill-level-text">{switchLevel(level)}</span>
      )}
    </div>
  );
}
