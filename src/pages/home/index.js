import React from "react";
import "./style.css";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

import Skills from "./skills";
import Quote from "./quote";
//import { Contact } from "./contact";
import { Contact } from "./contact";

// <img src={url} className="bg_imag" alt=""></img>

const url =
  "https://www.thesprucepets.com/thmb/N7k7EFMi1xuZ57sYd_Nk9JZKIYc=/4005x3004/smart/filters:no_upscale()/facts-about-siamese-cats-4173491-hero-5a607df9e57b40a58c803a76859b6694.jpg";
export default function Home() {
  return (
    <>
      <section id="home" className="home">
        <div className="home-content">
          <div className="my-image"></div>
          <div className="intro">
            <h2>{introdata.title}</h2>
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
            <p className="mb-1x">{introdata.description}</p>
            <Link to="/files/myfile.pdf" target="_blank" download>
              <div id="button_p" className="ac_btn">
                Resume
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="skills">
        <Skills />
      </section>
      <section id="quote">
        <Quote />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
