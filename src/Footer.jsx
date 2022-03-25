import React from "react";
import FooterImgOne from "../images/desktop/image-gallery-milkbottles.jpg";
import FooterImgTwo from "../images/desktop/image-gallery-orange.jpg";
import FooterImgThree from "../images/desktop/image-gallery-cone.jpg";
import FooterImgFour from "../images/desktop/image-gallery-sugarcubes.jpg";

import IconOne from "../images/icon-facebook.svg";
import IconTwo from "../images/icon-instagram.svg";
import IconThree from "../images/icon-twitter.svg";
import IconFour from "../images/icon-pinterest.svg";

export default function Footer() {
  return (
    <div>
      <div className="content-five">
        <img src={FooterImgOne} />
        <img src={FooterImgTwo} />
        <img src={FooterImgThree} />
        <img src={FooterImgFour} />
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
            <img src={IconOne} />
          </a>
          <a href="#">
            <img src={IconTwo} />
          </a>
          <a href="#">
            <img src={IconThree} />
          </a>
          <a href="#">
            <img src={IconFour} />
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
