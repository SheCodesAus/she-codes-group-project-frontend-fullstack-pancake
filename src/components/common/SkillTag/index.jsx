import React from "react";
import "./skillTag.css";

const selectTagColor = tagColor => {
  switch (tagColor) {
    case "tag-brand-primary":
      return "tag-brand-primary";
    case "tag-brand-secondary":
      return "tag-brand-secondary";
    default:
      return "";
  }
};
export default function SkillTag({ children, tagColor }) {
  return (
    <span className={`SkillTag ${selectTagColor(tagColor)}`}>{children}</span>
  );
}
