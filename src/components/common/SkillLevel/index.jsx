import React from "react";
import "./SkillLevel.css";

export default function SkillLevel({ level }) {
  return (
    <div className="skill-level-group">
      <div
        className={`skill-level level-easy ${
          level === "easy" ? "level-selected" : ""
        }`}
      ></div>
      <div
        className={`skill-level level-middle ${
          level === "middle" ? "level-selected" : ""
        }`}
      ></div>
      <div
        className={`skill-level level-advanced ${
          level === "advanced" ? "level-selected" : ""
        }`}
      ></div>
    </div>
  );
}
