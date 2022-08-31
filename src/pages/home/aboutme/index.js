import React from "react";
import "./style.scss";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="overlay"></div>
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
          <label for="tab1">
            <div>:// start</div>
          </label>

          <input
            type="radio"
            name="tabset"
            id="tab2"
            aria-controls="tabtwo"
          ></input>
          <label for="tab2">
            <div>:// extras</div>
          </label>
          <div className="tab-panels">
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
          </div>
        </div>
      </div>

    </div>
  );
}
