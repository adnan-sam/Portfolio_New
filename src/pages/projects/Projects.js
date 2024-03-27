import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import {
  projectsHeader,
  softwareProjects,
  socialMediaLinks,
  hardwareProjects,
} from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";

function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const [activeTab, setActiveTab] = useState("software");

  const handleToggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      {/* Toggle Button */}
      <div className="slider-container" style={{ backgroundColor: theme.dark }}>
        <div className={`slider-handle ${activeTab}`} />
        <div
          className={`slider-button software ${
            activeTab === "software" ? "active" : ""
          }`}
          style={{
            backgroundColor:
              activeTab === "software" ? theme.accentColor : theme.dark,
            color: activeTab === "software" ? theme.body : theme.accentBright,
          }}
          onClick={() => handleToggle("software")}
        >
          Software
        </div>
        <div
          className={`slider-button hardware ${
            activeTab === "hardware" ? "active" : ""
          }`}
          style={{
            backgroundColor:
              activeTab === "hardware" ? theme.accentColor : theme.dark,
            color: activeTab === "hardware" ? theme.body : theme.accentBright,
          }}
          onClick={() => handleToggle("hardware")}
        >
          Hardware
        </div>
      </div>
      {/* Project Cards */}
      {activeTab === "software" ? (
        <div className="repo-cards-div-main">
          {softwareProjects.data.map((repo) => {
            return <ProjectCard repo={repo} theme={theme} type="software" />;
          })}
        </div>
      ) : (
        <div className="repo-cards-div-main">
          {hardwareProjects.data.map((repo) => {
            return <ProjectCard repo={repo} theme={theme} type="hardware" />;
          })}
        </div>
      )}
      <br />
      <br />
      <br />
      <a
        {...styles}
        className="general-btn"
        href={socialMediaLinks.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        More Projects (Github)
      </a>
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
