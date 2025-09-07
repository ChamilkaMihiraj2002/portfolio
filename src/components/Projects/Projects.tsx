
import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";
import chatbot from "../../images/projects/chatbot.jpg";
import iot from "../../images/projects/iot.jpg";
import mediapp from "../../images/projects/mediapp.jpg";
import pharma from "../../images/projects/pharmacy-DPhCWBRG.jpg";
import superadmin from "../../images/projects/superadmin.jpg";
import t2s from "../../images/projects/t2s.jpg";

type Category = "fullstack" | "desktop" | "iot";

interface Project {
  title: string;
  techstack: string[];
  github: string;
  demo: string; 
  category: Category;
  image?: string;
}

const Projects: React.FC = () => {
  const GITHUB_URL = "https://www.github.com/ChamilkaMihiraj2002";
  const projects: Project[] = [
    {
      title: "EmpSync - Employee Management System",
      techstack: ["React", "Next.js", "PostgreSQL","PrismaORM", "Auth0","Firebase"],
      github: "https://github.com/ChamilkaMihiraj2002/EmpSync-V2",
      demo: "#",
      category: "fullstack",
      image: superadmin,
    },
    {
      title: "Pharmacy Queue Management System",
      techstack: ["React", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/ChamilkaMihiraj2002/Pharmacy-Queue-Management-System",
      demo: "#",
      category: "fullstack",
      image: pharma,
    },
    {
      title: "Online Medical Appointment System",
      techstack: ["React", "Axios", "Bootstrap", "Laravel", "Laravel Sanctum", "MySQL"],
      github: "https://github.com/ChamilkaMihiraj2002/Health-app",
      demo: "#",
      category: "fullstack",
      image: mediapp,
    },
    {
      title: "TutorLK - Online Tutoring Platform",
      techstack: ["React", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/ChamilkaMihiraj2002/TutorLK",
      demo: "#",
      category: "fullstack",
      image: "/logo192.png",
    },
    {
      title: "Text to Speech Application",
      techstack: ["Python", "TKinter", "pyttsx3", "Pillow"],
      github: "https://github.com/ChamilkaMihiraj2002/Text-to-Speech-Application",
      demo: "#",
      category: "desktop",
      image: t2s,
    },
    {
      title: "AI ChatBot with Python",
      techstack: ["Python", "NLTK", "TensorFlow"],
      github: "https://github.com/ChamilkaMihiraj2002/Python-Chatboat",
      demo: "#",
      category: "desktop",
      image: chatbot,
    },
    {
      title: "Finance Paysheet Emailer",
      techstack: ["Python", "SQLIte", "smtplib", "pytest", "Modern TKinter"],
      github: "#",
      demo: "#",
      category: "desktop",
      image: "/logo192.png",
    },
    {
      title: "Automatic Bottle Filling and Capping Machine",
      techstack: ["Arduino", "C", "C++", "Git", "GitHub"],
      github: "https://github.com/ChamilkaMihiraj2002/Automatic-bottle-filling-and-capping-machine",
      demo: "#",
      category: "iot",
      image: iot,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<Category>("fullstack");
  const [currentPage, setCurrentPage] = useState(1);
  const PROJECTS_PER_PAGE = 4;

  // Filter projects by category
  const filteredProjects = projects.filter((project) => project.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  // Handle category change: reset to page 1
  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        <h2 className={styles.projectsTitle}>My Projects</h2>
        
        {/* Category Tabs */}
        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${selectedCategory === "fullstack" ? styles.active : ""}`}
            onClick={() => handleCategoryChange("fullstack")}
          >
            🌐 Fullstack Projects
          </button>
          <button
            className={`${styles.tabButton} ${selectedCategory === "desktop" ? styles.active : ""}`}
            onClick={() => handleCategoryChange("desktop")}
          >
            🖥️ Desktop Applications
          </button>
          <button
            className={`${styles.tabButton} ${selectedCategory === "iot" ? styles.active : ""}`}
            onClick={() => handleCategoryChange("iot")}
          >
            🌐 IoT Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {paginatedProjects.map((project, index) => (
            <motion.div
              key={index + (currentPage - 1) * PROJECTS_PER_PAGE}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.projectCard}>
                <img
                  src={project.image || "/logo192.png"}
                  alt={`${project.title} preview`}
                  className={styles.projectImage}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.techStack}>
                    {project.techstack.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionButton}
                  >
                    <span>🔗</span>
                    View Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={{ marginRight: 8 }}
              className={styles.tabButton}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`${styles.tabButton} ${currentPage === i + 1 ? styles.active : ""}`}
                style={{ margin: "0 2px" }}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{ marginLeft: 8 }}
              className={styles.tabButton}
            >
              Next
            </button>
          </div>
        )}

        <div className="d-flex justify-content-center">
          <a
            href={GITHUB_URL}
            className="btn btn-outline-primary mt-4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more courses on LinkedIn"
          >
            {React.createElement(FaGithub as any, { style: { verticalAlign: "middle", marginRight: 6, fontSize: 24 } })}
            View more on Github
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;