import React from "react";
import "./style.scss";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

import AboutMe from "./aboutme";
import Projects from "./projects";
import Achrive from "./achrive";
import { Contact } from "./contact";
import Text3D from "../../components/text3d/Text3D";
import FourierDraw from "../../components/fourierdraw/FourierDraw";

const url =
  "https://www.thesprucepets.com/thmb/N7k7EFMi1xuZ57sYd_Nk9JZKIYc=/4005x3004/smart/filters:no_upscale()/facts-about-siamese-cats-4173491-hero-5a607df9e57b40a58c803a76859b6694.jpg";
export default function Home() {
  return (
    <>
    <div className="page-container">
      <section id="FD" className="FD-name">
      <div className="grid-container">
        <div className="title">Hi, I am</div>
        <div className="name">
          <FourierDraw />
        </div>
      </div>

      </section>

      <section id="home" className="home">
        <div className="home-content">
          <div className="welcome"><Text3D/></div>
          <div className="intro">
            <h3>Hi I am <span>Yilei Li</span></h3>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10
                }}
              />
            </h1>
            <p>{introdata.description}</p>
            <div className="btn-container">
            <Link className="resume-btn" to="/files/myfile.pdf" target="_blank" download>
                Download Resume
            </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about-section">
        <AboutMe />
      </section>
      <section id="project-section">
        <Projects />
      </section>
      <section id="achrive-section">
        <Achrive />
      </section>
      <section id="contact-section">
        <Contact />
      </section>
      </div>
    </>
  );
}
