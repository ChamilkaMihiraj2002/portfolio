import React, { useState } from "react";

const navItems = [
  { href: "#home", label: "Index" },
  { href: "#projects", label: "Selected Work" },
  { href: "#experience", label: "Experience" },
  { href: "#techstack", label: "Capabilities" },
  { href: "#publications", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((current) => !current);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav-inner">
        <a href="#home" className="site-mark" aria-label="Go to home" onClick={handleClose}>
          <span className="site-mark-name">CHAMILKA</span>
          <span className="site-mark-role">AI / LLM / Systems</span>
        </a>

        <button
          type="button"
          className="site-nav-toggle"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="site-nav-menu"
          onClick={handleToggle}
        >
          <span className={`site-nav-toggle-line ${isOpen ? "site-nav-toggle-line-top-open" : ""}`} />
          <span className={`site-nav-toggle-line ${isOpen ? "site-nav-toggle-line-middle-open" : ""}`} />
          <span className={`site-nav-toggle-line ${isOpen ? "site-nav-toggle-line-bottom-open" : ""}`} />
        </button>

        <div
          id="site-nav-menu"
          className={`site-nav-links ${isOpen ? "site-nav-links-open" : ""}`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-nav-link"
              onClick={handleClose}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
