import React from "react";
import "./SkillCard.css";
import ProgressBar from "@ramonak/react-progress-bar";

const SkillCard = (props) => {
  const experience = props.experience;
  const theme = props.theme;

  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience["color"]}`,
        width: "50%",
      }}
    >
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: theme.text }}>
              {experience["title"]}
            </h3>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          <ProgressBar
            completed={experience["percent"]}
            bgColor={experience["color"]}
            animateOnRender={true}
          />
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
