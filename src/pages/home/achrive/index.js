import React from "react";
import "./style.scss";
import { FaExternalLinkAlt, FaRegFile } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";

const projects = [
    {
      id: 1,
      title: "Wonder Woman",
      description: "Design, developed, and tested IoT solution for remote device monitoring and troubleshooting for a multinational industry dominant company.",
      gitlink:"https://github.com/bchiang7/halcyon-site",
      doclink:"https://verabradley.com/products/xl-campus-backpack-2845413063?variant=40445993156652"
    },
    {
      id: 2,
      name: "Poison Ivy",
      alterEgo: "Pamela Lillian Isley",
      alignment: "villain"
    },
    {
      id: 3,
      name: "Black Canary",
      alterEgo: "Dinah Drake",
      alignment: "hero"
    },
    {
      id: 4,
      name: "Catwoman",
      alterEgo: "Selina Kyle",
      alignment: "villain"
    }
  ];


export default function Achrive() {
    return (
      <div className="achrive-container">
        <div className="achrive-intro">
            
        </div>
        <ul className="achrive-grid">
            <li className="achrive-item">
                <div className="item-inner">
                    <header>
                        <div className="project-top">
                            <div className="folder"></div>
                            <div className="links">
                                <a href="https://github.com/bchiang7/halcyon-site" aria-label="File Link" rel="noopener noreferrer" target="_blank">
                                    <FiGithub className="link-icon"/>
                                </a>
                                <a href="https://verabradley.com/products/xl-campus-backpack-2845413063?variant=40445993156652" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank">
                                    <FaExternalLinkAlt className="link-icon"/>
                                </a>
                            </div>
                        </div>
                        <h3 className="project-title">
                            IoT Gateway
                        </h3>
                        <div className="project-description">
                            <p>Design, developed, and tested IoT solution for remote device monitoring and troubleshooting for a multinational industry dominant company.</p>
                        </div>
                    </header>
                    <footer>
                        <ul class="project-tech-list">
                            <li>Algolia</li><li>WordPress</li><li>PHP</li>
                        </ul>
                    </footer>
                </div>
            </li>
        </ul>
    </div>
    );
}