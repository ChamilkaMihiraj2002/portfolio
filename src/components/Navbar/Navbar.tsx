import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="nav-glass navbar-dark"
    >
      <Container>
        <Navbar.Brand href="#home">CHAMILKA MIHIRAJ PERERA</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#techstack">Tech Stack</Nav.Link>
            <Nav.Link href="#publications">Publications</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
