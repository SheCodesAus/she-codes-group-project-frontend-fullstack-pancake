import React from "react";
import "./style.css";

export default function SkillLevel({ level }) {
  return (
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
  );
}
