import React from "react";
import "./style.scss";

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
                            This is a project title
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