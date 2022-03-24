import React from "react";

export default function Hero() {
  return (
    <div className="main">
      <div className="hero--main">
        <h1>WE ARE CREATIVES</h1>
        <img src="../images/desktop/image-header.jpg" alt=" " />
      </div>

      <div className="content--one">
        <div className="text--div">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service agency specializing in helping brands grow
            fast. Engage your clients through compelling visuals that do most of
            marketing for you.
          </p>
          <bold>
            <a href="#">LEARN MORE</a>
          </bold>
        </div>

        <div className="img--div">
          <img src="../images/desktop/image-transform.jpg" alt="" />
        </div>
      </div>

      <div className="content--two">
        <div className="img--div">
          <img src="../images/desktop/image-stand-out.jpg" alt="" />
        </div>

        <div className="text--div">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <bold>
            <a href="#">LEARN MORE</a>
          </bold>
        </div>
      </div>

      <div className="content-three">
        <div className="text--img--div">
          <img src="../images/desktop/image-graphic-design.jpg" alt="" />
          <h3>Graphic Design</h3>
          <p>
            Great design makes you memorable. we deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>

        <div className="text--img--div">
          <img src="../images/desktop/image-photography.jpg" alt="" />
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
}
