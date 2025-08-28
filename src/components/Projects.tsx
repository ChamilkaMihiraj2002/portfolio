// src/components/Projects.tsx
import { useState } from "react";
import { Container, Row, Col, Card, Button, ButtonGroup } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Projects.css";

type Category = "fullstack" | "desktop";

type Project = {
  title: string;
  description: string;
  github: string;
  demo: string;
  category: Category;
  image?: string; // optional image url (public/ path ok)
};

const Projects: React.FC = () => {
  // projects with categories
  const projects: Project[] = [
    {
      title: "Meal Token App",
      description:
        "A full-stack web app with React, Next.js, and PostgreSQL to manage meal tokens with HR integration.",
      github: "https://github.com/yourusername/meal-token",
      demo: "https://mealtoken.live",
      category: "fullstack",
      image: "/logo512.png",
    },
    {
      title: "Student Marks Tracker",
      description: "Python Tkinter + MySQL desktop app for tracking student marks with dashboards & CRUD.",
      github: "https://github.com/yourusername/student-tracker",
      demo: "#",
      category: "desktop",
      image: "/logo192.png",
    },
    {
      title: "Expense Tracker",
      description: "JavaScript + LocalStorage single-page app to track expenses and visualize data.",
      github: "https://github.com/yourusername/expense-tracker",
      demo: "#",
      category: "fullstack",
      image: "/logo192.png",
    },
  ];

  const [selected, setSelected] = useState<Category>("fullstack");

  const filtered = projects.filter((p) => p.category === selected);

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Projects</h2>

        <div className="d-flex justify-content-center mb-4 projects-tabs">
          <ButtonGroup aria-label="project categories">
            <Button
              className="projects-tab-btn"
              variant={selected === "fullstack" ? "primary" : "outline-primary"}
              onClick={() => setSelected("fullstack")}
              aria-pressed={selected === "fullstack"}
            >
              <span className="me-2" role="img" aria-label="fullstack">🌐</span> Fullstack
            </Button>
            <Button
              className="projects-tab-btn"
              variant={selected === "desktop" ? "primary" : "outline-primary"}
              onClick={() => setSelected("desktop")}
              aria-pressed={selected === "desktop"}
            >
              <span className="me-2" role="img" aria-label="desktop">🖥️</span> Desktop
            </Button>
          </ButtonGroup>
        </div>

        <Row className="projects-grid">
          {filtered.map((proj, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <motion.div whileHover={{ scale: 1.02 }}>
                {/* modern card: image at top, uniform height, actions pinned to bottom */}
                <Card className="h-100 shadow-sm projects-card">
                  {/* image wrapper - keeps consistent aspect and crops */}
                  <div className="project-img-wrapper">
                    <img
                      src={proj.image || "/logo192.png"}
                      alt={`${proj.title} screenshot`}
                      className="project-img"
                    />
                  </div>

                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex align-items-start mb-2">
                      <Card.Title className="project-title">{proj.title}</Card.Title>
                    </div>

                    <Card.Text className="project-desc">{proj.description}</Card.Text>

                    <div className="mt-auto d-flex gap-2 actions">
                      <Button
                        variant="outline-dark"
                        size="sm"
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="d-flex align-items-center"
                      >
                        <span className="me-2" role="img" aria-label="code">📂</span> Code
                      </Button>

                      <Button
                        variant="primary"
                        size="sm"
                        href={proj.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="d-flex align-items-center"
                      >
                        <span className="me-2" role="img" aria-label="demo">🔗</span> Demo
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
