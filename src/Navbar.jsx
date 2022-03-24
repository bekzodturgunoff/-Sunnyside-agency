import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Sunnyside</div>
      <div className="links">
        <a href="#" className="link">
          About
        </a>
        <a href="#" className="link">
          Services
        </a>
        <a href="#" className="link">
          Projects
        </a>
        <button className="nav--btn">Contact</button>
      </div>
    </nav>
  );
}
