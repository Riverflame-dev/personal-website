import React from "react";
import "./style.scss";
import { FaExternalLinkAlt, FaRegFile } from 'react-icons/fa';
//import VBproject1 from "../../../../public/assets/VBproject1.png";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-intro">
        <h1>Projects</h1>
        <p>Here i will be displaying some projects that I was involved in.</p>
      </div>
      <div className="featured-project">
        <div className="featured-content">
          <p class="project-overline">Featured Project</p>
          <h3 class="project-title">
            <a href="https://halcyon-theme.netlify.com/" rel="noopener noreferrer" target="_blank">
              Project 1
            </a>
          </h3>
          <div class="project-description">
            <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on...</p>
          </div>
          <ul class="project-tech-list">
            <li>VS Code</li>
            <li>Sublime Text</li>
            <li>Atom</li>
            <li>iTerm2</li>
            <li>Hyper</li>
          </ul>
          <div class="project-links">
            <a href="https://github.com/bchiang7/halcyon-site" aria-label="File Link" rel="noopener noreferrer" target="_blank">
              <FaRegFile className="link-icon"/>
            </a>
            <a href="https://halcyon-theme.netlify.com/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank">
              <FaExternalLinkAlt className="link-icon"/>
            </a>
          </div>
        </div>
        <div className="featured-img">
        <img aria-hidden="true" src={'/assets/VBproject1.png'} alt=""/>
        </div>
      </div>
    </div>
  );
}
