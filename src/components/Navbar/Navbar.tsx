import React from "react";
import { FaTerminal } from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <nav className="nav-shell">
      <div className="section-shell nav-inner">
        <a href="#home" className="nav-brand" aria-label="Go to home">
          {React.createElement(FaTerminal as any, { className: "nav-brand-icon", "aria-hidden": true })}
          <span>CHAMILKA.DEV</span>
        </a>

        <div className="nav-links" aria-label="Primary navigation menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#techstack" className="nav-link">Skills</a>
          <a href="#publications" className="nav-link">Publications</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
