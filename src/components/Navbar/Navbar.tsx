import React from "react";
import { FaMicrochip } from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <nav className="nav-shell">
      <div className="section-shell nav-inner">
        <a href="#home" className="nav-brand" aria-label="Go to home">
          {React.createElement(FaMicrochip as any, { className: "nav-brand-icon", "aria-hidden": true })}
          <span>SYS.USER_PROFILE</span>
        </a>

        <div className="nav-links" aria-label="Primary">
          <a href="#home" className="nav-link">./Home</a>
          <a href="#projects" className="nav-link">./Projects</a>
          <a href="#experience" className="nav-link">./Experience</a>
          <a href="#education" className="nav-link">./Education</a>
          <a href="#techstack" className="nav-link">./Skills</a>
          <a href="#publications" className="nav-link">./Writing</a>
          <a href="#contact" className="nav-link">./Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
