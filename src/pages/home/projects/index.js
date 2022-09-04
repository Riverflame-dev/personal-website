import React from "react";
import "./style.scss";
import { FaExternalLinkAlt, FaRegFile } from 'react-icons/fa';
//import VBproject1 from "../../../../public/assets/VBproject1.png";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-intro">
        <h1>Projects</h1>
      </div>
      <ul className="featured-list">
        <li className="featured-project">
          <div className="featured-content">
            <p class="project-overline">Featured Project</p>
            <h3 class="project-title">
              <a href="https://halcyon-theme.netlify.com/" rel="noopener noreferrer" target="_blank">
                Project 1
              </a>
            </h3>
            <div class="project-description">
              <p>Design and implement changes to the Product Detail Page, in an attempt to provide efficient product information and improve  customer experience.</p>
            </div>
            <ul class="project-tech-list">
              <li>jQuary</li>
              <li>Backbone.js</li>
              <li>SCSS</li>
              <li>HTML5</li>
              <li>Shopify</li>
            </ul>
            <div class="project-links">
              <a href="https://github.com/bchiang7/halcyon-site" aria-label="File Link" rel="noopener noreferrer" target="_blank">
                <FaRegFile className="link-icon"/>
              </a>
              <a href="https://verabradley.com/products/xl-campus-backpack-2845413063?variant=40445993156652" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank">
                <FaExternalLinkAlt className="link-icon"/>
              </a>
            </div>
          </div>
          <div className="featured-img">
            <img aria-hidden="true" src={'/assets/VBproject1.png'} alt=""/>
          </div>
        </li>
        <li className="featured-project">
          <div className="featured-content">
            <p class="project-overline">Featured Project</p>
            <h3 class="project-title">
              <a href="https://halcyon-theme.netlify.com/" rel="noopener noreferrer" target="_blank">
                VB Live
              </a>
            </h3>
            <div class="project-description">
              <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on...</p>
            </div>
            <ul class="project-tech-list">
              <li>jQuary</li>
              <li>Backbone.js</li>
              <li>SCSS</li>
              <li>HTML5</li>
              <li>Shopify</li>
            </ul>
            <div class="project-links">
              <a href="https://github.com/bchiang7/halcyon-site" aria-label="File Link" rel="noopener noreferrer" target="_blank">
                <FaRegFile className="link-icon"/>
              </a>
              <a href="https://verabradley.com/products/xl-campus-backpack-2845413063?variant=40445993156652" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank">
                <FaExternalLinkAlt className="link-icon"/>
              </a>
            </div>
          </div>
          <div className="featured-img">
            <img aria-hidden="true" src={'/assets/VBproject2.png'} alt=""/>
          </div>
        </li>
      </ul>
    </div>
  );
}
