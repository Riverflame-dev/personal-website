import React from "react";
import "./style.scss";
import { FaExternalLinkAlt, FaRegFile } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";


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
                            <div className="links"></div>
                        </div>
                        <h3 className="project-title">
                            Project 3
                        </h3>
                        <div className="project-description">
                            <p>This is a paragraph of description text.</p>
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