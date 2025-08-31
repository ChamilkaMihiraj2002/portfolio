// src/components/Projects.tsx
import { useState } from "react";
import { Container, Row, Col, Card, Button, ButtonGroup } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

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
      title: "EmpSync - ",
      description: "A full-stack web app with React, Next.js, and PostgreSQL to Organization management.",
      github: "https://github.com/ChamilkaMihiraj2002/EmpSync-V2",
      demo: "#",
      category: "fullstack",
      image: "/logo192.png",
    },
    {
      title: "Pharmacy Queue Management System",
      description: "A full-stack web app with React, Express.js, Node.js, and MongoDB to manage pharmacy queues.",
      github: "https://github.com/ChamilkaMihiraj2002/Pharmacy-Queue-Management-System",
      demo: "#",
      category: "fullstack",
      image: "/logo192.png",
    },
    {
      title: "Online Medical Appointment System",
      description: "A full-stack web app with React, Axios, Bootstrap, Laravel, Laravel Sanctum and MySQL to manage Medical Appointments.",
      github: "https://github.com/ChamilkaMihiraj2002/Health-app",
      demo: "#",
      category: "fullstack",
      image: "/logo192.png",
    },
    {
      title: "Text to speech application",
      description: "A desktop app with python, TKinter, pyttsx3, and PIL (Pillow) create a text-to-speech application.",
      github: "https://github.com/ChamilkaMihiraj2002/Text-to-Speech-Application",
      demo: "#",
      category: "desktop",
      image: "/logo192.png",
    },
    {
      title: "TutorLK",
      description: "A full-stack web app with React, Express.js, Node.js, and MongoDB to manage TutorLK.",
      github: "https://github.com/ChamilkaMihiraj2002/TutorLK",
      demo: "#",
      category: "fullstack",
      image: "/logo192.png",
    },
    {
      title: "AI ChatBot with Python",
      description: "A desktop app with Python, NLTK, and TensorFlow to create an AI-powered chatbot.",
      github: "https://github.com/ChamilkaMihiraj2002/Python-Chatboat",
      demo: "#",
      category: "desktop",
      image: "/logo192.png",
    },
    {
      title: "Expense Tracker",
      description: "A full-stack web app with React, Next.js, and PostgreSQL to manage meal tokens with HR integration.",
      github: "https://github.com/yourusername/expense-tracker",
      demo: "#",
      category: "fullstack",
      image: "/logo192.png",
    },
    {
      title: "Expense Tracker",
      description: "A full-stack web app with React, Next.js, and PostgreSQL to manage meal tokens with HR integration.",
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

  <div className={`d-flex justify-content-center mb-4 ${styles.projectsTabs}`}>
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

        <Row className={styles.projectsGrid}>
          {filtered.map((proj, idx) => (
            <Col key={idx} xs={12} sm={6} md={6} lg={3} className="mb-4">
              <motion.div whileHover={{ scale: 1.02 }}>
                {/* modern card: image at top, uniform height, actions pinned to bottom */}
                <Card className={`h-100 shadow-sm ${styles.projectsCard}`}>
                  {/* image wrapper - keeps consistent aspect and crops */}
                  <div className={styles.projectImgWrapper}>
                    <img
                      src={proj.image || "/logo192.png"}
                      alt={`${proj.title} screenshot`}
                      className={styles.projectImg}
                    />
                  </div>

                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex align-items-start mb-2">
                      <Card.Title className={styles.projectTitle}>{proj.title}</Card.Title>
                    </div>

                    <Card.Text className={styles.projectDesc}>{proj.description}</Card.Text>

                    <div className="mt-auto d-flex gap-2 actions">
                      <Button
                        variant="primary"
                        size="sm"
                        href={proj.demo}
                        target="_blank"
                        rel="noreferrer"
                        className={`d-flex align-items-center ${styles.actions ?? ""}`}
                      >
                        <span className="me-2" role="img" aria-label="demo">🔗</span> Goto repository
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