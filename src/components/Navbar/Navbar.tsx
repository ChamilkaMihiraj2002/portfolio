import React from "react";

const navItems = [
  { href: "#home", label: "Index" },
  { href: "#projects", label: "Selected Work" },
  { href: "#experience", label: "Experience" },
  { href: "#techstack", label: "Capabilities" },
  { href: "#publications", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

const NavBar: React.FC = () => {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav-inner">
        <a href="#home" className="site-mark" aria-label="Go to home">
          <span className="site-mark-name">CHAMILKA</span>
          <span className="site-mark-role">AI / LLM / Systems</span>
        </a>

        <div className="site-nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
