import React from "react";
import images from "./constants/images";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="#home">
            <img src={images.logo} alt="" />
          </a>
        </div>
        <ul className="links">
          <li>
            <a href="#about" className="link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="link">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="link">
              Projects
            </a>
          </li>

          <button className="nav--btn">Contact</button>
        </ul>
        <div className="hamburger">
          <img src={images.hamburger} alt="" />
        </div>
      </nav>
      <div className="hero" id="home">
        <h1>WE ARE CREATIVES</h1>
        <img className="arrow" src={images.iconArrowDown} />
      </div>
    </header>
  );
}
