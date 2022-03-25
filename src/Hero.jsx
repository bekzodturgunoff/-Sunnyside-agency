import React from "react";
import People from "./People";
// import People from "People";

export default function Hero() {
  return (
    <div className="main">
      <div className="hero--main">
        <h1>WE ARE CREATIVES</h1>
        <img className="arrow" src="../images/icon-arrow-down.svg" />
        <img className="header--img" src="../images/desktop/image-header.jpg" />
      </div>

      <div className="content--one">
        <div className="text--div">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service agency specializing in helping brands grow
            fast. Engage your clients through compelling visuals that do most of
            marketing for you.
          </p>
          <p>
            <a href="#">LEARN MORE</a>
          </p>
        </div>

        <div className="img--div">
          <img src="../images/desktop/image-transform.jpg" />
        </div>
      </div>

      <div className="content--two">
        <div className="img--div">
          <img src="../images/desktop/image-stand-out.jpg" />
        </div>

        <div className="text--div">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <p>
            <a href="#">LEARN MORE</a>
          </p>
        </div>
      </div>

      <div className="content--three">
        <div className="text--img--div">
          <img src="../images/desktop/image-graphic-design.jpg" />
          <h3 className="graphic-design">Graphic Design</h3>
          <p className="graphic-p">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>

        <div className="text--img--div">
          <img src="../images/desktop/image-photography.jpg" />
          <h3 className="photography">Photography</h3>
          <p className="photography-p">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>

      <div className="content--four">
        <h3 className="four-heading">CLIENT TESTIMONIALS</h3>
        <div className="people-div">
          <People
            className="people"
            img="../images/image-emily.jpg"
            description="We put trust in Sunnyside and 
          they delivered, making sure our needs were met 
          and deadlines were always hit."
            username="Emily R."
            role="Marketing Director"
          />

          <People
            className="people"
            img="../images/image-thomas.jpg"
            description="Sunntside's enthusiasm coupled with their
        keen interest in our brand's success made it a satisfying
        and enjoyable experience."
            username="Thomas S."
            role="Chief Operating Officer"
          />

          <People
            className="people"
            img="../images/image-jennie.jpg"
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
