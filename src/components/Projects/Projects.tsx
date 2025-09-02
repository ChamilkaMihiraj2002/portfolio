import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";

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
      image: "/logo192.png",
    },
    {
      title: "Pharmacy Queue Management System",
      techstack: ["React", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/ChamilkaMihiraj2002/Pharmacy-Queue-Management-System",
      demo: "#",
      category: "fullstack",
      image: "/logo192.png",
    },
    {
      title: "Online Medical Appointment System",
      techstack: ["React", "Axios", "Bootstrap", "Laravel", "Laravel Sanctum", "MySQL"],
      github: "https://github.com/ChamilkaMihiraj2002/Health-app",
      demo: "#",
      category: "fullstack",
      image: "/logo192.png",
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
      image: "/logo192.png",
    },
    {
      title: "AI ChatBot with Python",
      techstack: ["Python", "NLTK", "TensorFlow"],
      github: "https://github.com/ChamilkaMihiraj2002/Python-Chatboat",
      demo: "#",
      category: "desktop",
      image: "/logo192.png",
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
      image: "/logo192.png",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<Category>("fullstack");

  const filteredProjects = projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        <h2 className={styles.projectsTitle}>My Projects</h2>
        
        {/* Category Tabs */}
        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${selectedCategory === "fullstack" ? styles.active : ""}`}
            onClick={() => setSelectedCategory("fullstack")}
          >
            🌐 Fullstack Projects
          </button>
          <button
            className={`${styles.tabButton} ${selectedCategory === "desktop" ? styles.active : ""}`}
            onClick={() => setSelectedCategory("desktop")}
          >
            🖥️ Desktop Applications
          </button>
          <button
            className={`${styles.tabButton} ${selectedCategory === "iot" ? styles.active : ""}`}
            onClick={() => setSelectedCategory("iot")}
          >
            🌐 IoT Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
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