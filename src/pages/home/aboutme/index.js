import React from "react";
import "./style.scss";
import "../../../fonts/Exwayer-X3eqa.ttf";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div class="h-initial">About Me</div>
      <div className="info-tab">
        <div className="tab-content">
        <input
          type="radio"
          name="tabset"
          id="tab1"
          aria-controls="tabone"
          checked
        ></input>
          <label className="label-font" for="tab1">
            <div>:// start</div>
          </label>

          <input
            type="radio"
            name="tabset"
            id="tab2"
            aria-controls="tabtwo"
          ></input>
          <label className="label-font" for="tab2">
            <div>:// extras</div>
          </label>
          <div className="tab-panels">
          <div className="overlay"></div>
            <section className="panel">
              <h2>
                <span>
                  <span
                    class="iconify"
                    data-icon="mdi:virus-outline"
                    data-inline="false"
                  ></span>{" "}
                  Intro
                </span>
              </h2>
              <p>
                <strong>Welcome to the future.</strong> Viral is a
                cyberpunk turned supernatural rp set in the fictional
                NeoCity, in the year 2305. For the past century, our
                high-tech low-lives have been dealing with what they
                call "the Glitches" - beings with powers that span a
                little broader than the cybernetics they're used to.
                Nobody knows where they came from or how they came to
                be, but one thing is for certain: they don't have a
                place in NeoCity and the locals aren't shy about showing
                it.
              </p>
            </section>
            <section className="panel">
              <h2>
                <span>
                  <span
                    class="iconify"
                    data-icon="mdi:virus-outline"
                    data-inline="false"
                  ></span>{" "}
                  Some info
                </span>
              </h2>
              <p>
                This is a paragraph of information
              </p>
              <div className="panel-image border blue"></div>
            </section>
          </div>
        </div>
      </div>

    </div>
  );
}
