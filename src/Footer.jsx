import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="content-five">
        {/* <img src={FooterImgOne} />
        <img src={FooterImgTwo} />
        <img src={FooterImgThree} />
        <img src={FooterImgFour} /> */}
      </div>

      <div className="footer">
        <h2>sunnyside</h2>

        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>
        {/* 
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
        </div> */}
      </div>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://github.com/bekzodturgunoff">Bekzod Turgunov</a>.
      </div>
    </footer>
  );
}
