import { Navbar, Nav, Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

interface NavBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => {
    const cls = "theme-dark";
    const root = document.documentElement;
    if (darkMode) root.classList.add(cls);
    else root.classList.remove(cls);
    // cleanup not needed — class removal handled on change
  }, [darkMode]);

  return (
    <Navbar expand="lg" fixed="top" className={darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}>
      <Container>
        <Navbar.Brand href="#home">MyPortfolio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#techstack">Tech Stack</Nav.Link>
            <Nav.Link href="#publications">Publications</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link
              onClick={toggleDarkMode}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleDarkMode();
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={darkMode ? "Light mode" : "Dark mode"}
              style={{ cursor: "pointer" }}
            >
              {
                // choose icon and render (cast to any to avoid react-icons TS typing mismatch)
                (() => {
                  const ModeIcon: any = darkMode ? FiSun : FiMoon;
                  return <ModeIcon size={18} />;
                })()
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
