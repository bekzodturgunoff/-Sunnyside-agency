import React from "react";

import images from "./constants/images";
import People from "./People";

export default function Content() {
  return (
    <div className="content">
      <div className="content--one one" id="about">
        <div className="content-one-text">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service agency specializing in helping brands grow
            fast. Engage your clients through compelling visuals that do most of
            marketing for you.
          </p>
          <p>
            <span className="yellow">
              <a href="#">LEARN MORE</a>
            </span>
          </p>
        </div>

        <div className="img--div">
          <img src={images.transform} />
        </div>
      </div>

      <div className="content--one two">
        <div className="img--div">
          <img src={images.stand} />
        </div>

        <div className="content-one-text">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <p>
            <span className="red">
              <a href="#">LEARN MORE</a>
            </span>
          </p>
        </div>
      </div>

      <div className="content--two" id="services">
        <div className="graphic-img">
          <h3>Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>

        <div className="photography-img">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>

      <div className="content--three">
        <h2 className="content-three-heading">CLIENT TESTIMONIALS</h2>
        <div className="people-div">
          <People
            className="people"
            img={images.emily}
            description="We put trust in Sunnyside and 
          they delivered, making sure our needs were met 
          and deadlines were always hit."
            username="Emily R."
            role="Marketing Director"
          />

          <People
            className="people"
            img={images.thomas}
            description="Sunntside's enthusiasm coupled with their
        keen interest in our brand's success made it a satisfying
        and enjoyable experience."
            username="Thomas S."
            role="Chief Operating Officer"
          />

          <People
            className="people"
            img={images.jennie}
            description="Incredible end result! Our sales increased 
        over 400% when we worked with Sunnyside. Highly recommended!"
            username="Jennie F."
            role="Business Owner"
          />
        </div>
      </div>
    </div>
  );
}
