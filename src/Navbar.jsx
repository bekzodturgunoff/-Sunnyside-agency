import React from "react";
import images from "./constants/images";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={images.logo} alt="" />
        </div>
        <ul className="links">
          <li>
            <a href="#" className="link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Projects
            </a>
          </li>

          <button className="nav--btn">Contact</button>
        </ul>
      </nav>
      <div className="hero">
        <h1>WE ARE CREATIVES</h1>
        <img className="arrow" src={images.iconArrowDown} />
      </div>
    </header>
  );
}
