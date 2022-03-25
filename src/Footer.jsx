import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="content-five">
        <img src="../images/desktop/image-gallery-milkbottles.jpg" />
        <img src="../images/desktop/image-gallery-orange.jpg" />
        <img src="../images/desktop/image-gallery-cone.jpg" />
        <img src="../images/desktop/image-gallery-sugarcubes.jpg" />
      </div>

      <div className="footer">
        <h2>sunnyside</h2>

        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>

        <div className="footer-icons">
          <a href="#">
            <img src="../images/icon-facebook.svg" />
          </a>
          <a href="#">
            <img src="../images/icon-instagram.svg" />
          </a>
          <a href="#">
            <img src="../images/icon-twitter.svg" />
          </a>
          <a href="#">
            <img src="../images/icon-pinterest.svg" />
          </a>
        </div>
      </div>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://github.com/bekzodturgunoff">Bekzod Turgunov</a>.
      </div>
    </div>
  );
}
