import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import SkillCard from "../../components/SkillsCard/SkillCard.js";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
          {props.sections.map((section, index) => {
            if (index % 2 === 0) {
              return (
                <Panel
                  className="accord-panel"
                  title={section["title"]}
                  key={section["title"]}
                >
                  {section["experiences"].map((experience) => {
                    return (
                      <ExperienceCard experience={experience} theme={theme} />
                    );
                  })}
                </Panel>
              );
            } else {
              return (
                <Panel
                  className="accord-panel"
                  title={section["title"]}
                  key={section["title"]}
                >
                  {section["experiences"].map((experience) => {
                    return <SkillCard experience={experience} theme={theme} />;
                  })}
                </Panel>
              );
            }
          })}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
