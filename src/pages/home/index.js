import React from "react";
import "./style.scss";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

import AboutMe from "./aboutme";
import Projects from "./projects";
//import { Contact } from "./contact";
import { Contact } from "./contact";
import Text3D from "../../components/text3d/Text3D";

const url =
  "https://www.thesprucepets.com/thmb/N7k7EFMi1xuZ57sYd_Nk9JZKIYc=/4005x3004/smart/filters:no_upscale()/facts-about-siamese-cats-4173491-hero-5a607df9e57b40a58c803a76859b6694.jpg";
export default function Home() {
  return (
    <>
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
            <Link to="/files/myfile.pdf" target="_blank" download>
              <div id="button_p" className="ac_btn">
                Resume
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </Link>
            <Link to="/files/myfile.pdf" target="_blank" download>
              <div className="resume_btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
                Download Resume
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="about-section">
        <AboutMe />
      </section>
      <section id="project-section">
        <Projects />
      </section>
      <section id="contact-section">
        <Contact />
      </section>
    </>
  );
}
