import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaCodeBranch, FaGithub, FaLayerGroup } from "react-icons/fa";
import styles from "./Projects.module.css";
import chatbot from "../../images/projects/chatbot.jpg";
import iot from "../../images/projects/iot.jpg";
import mediapp from "../../images/projects/mediapp.jpg";
import pharma from "../../images/projects/pharmacy-DPhCWBRG.jpg";
import superadmin from "../../images/projects/superadmin.jpg";
import t2s from "../../images/projects/t2s.jpg";
import edulk from "../../images/projects/edulk.png";
import emailler from "../../images/projects/logo.png";
import localRAG from "../../images/projects/loaclRAG.jpg";

type Category = "fullstack" | "desktop" | "iot" | "aiml";

interface Project {
  title: string;
  description: string;
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
      description: "Employee operations platform with modern auth, admin workflows, and scalable data handling.",
      techstack: ["React", "Next.js", "PostgreSQL", "PrismaORM", "Auth0", "Firebase"],
      github: "https://github.com/ChamilkaMihiraj2002/EmpSync-V2",
      demo: "#",
      category: "fullstack",
      image: superadmin,
    },
    {
      title: "Pharmacy Queue Management System",
      description: "Queue orchestration system that reduces waiting friction and improves patient flow visibility.",
      techstack: ["React", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/ChamilkaMihiraj2002/Pharmacy-Queue-Management-System",
      demo: "#",
      category: "fullstack",
      image: pharma,
    },
    {
      title: "Online Medical Appointment System",
      description: "Full-stack appointment booking experience for doctors and patients with secure scheduling flows.",
      techstack: ["React", "Axios", "Bootstrap", "Laravel", "Laravel Sanctum", "MySQL"],
      github: "https://github.com/ChamilkaMihiraj2002/Health-app",
      demo: "#",
      category: "fullstack",
      image: mediapp,
    },
    {
      title: "EduLanka - Online Tutoring Platform",
      description: "Tutoring platform designed for course discovery, learner engagement, and instructor management.",
      techstack: ["React", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/ChamilkaMihiraj2002/TutorLK",
      demo: "#",
      category: "fullstack",
      image: edulk,
    },
    {
      title: "Text to Speech Application",
      description: "Desktop utility focused on accessible text-to-speech conversion with a simple local workflow.",
      techstack: ["Python", "TKinter", "pyttsx3", "Pillow"],
      github: "https://github.com/ChamilkaMihiraj2002/Text-to-Speech-Application",
      demo: "#",
      category: "desktop",
      image: t2s,
    },
    {
      title: "AI ChatBot with Python",
      description: "Conversational AI project exploring intent handling, training pipelines, and response generation.",
      techstack: ["Python", "NLTK", "TensorFlow"],
      github: "https://github.com/ChamilkaMihiraj2002/Python-Chatboat",
      demo: "#",
      category: "aiml",
      image: chatbot,
    },
    {
      title: "Finance Paysheet Emailer",
      description: "Automation tool for preparing and distributing payroll-related communication reliably.",
      techstack: ["Python", "SQLIte", "smtplib", "pytest", "Modern TKinter"],
      github: "#",
      demo: "#",
      category: "desktop",
      image: emailler,
    },
    {
      title: "AI Web Scraper (LangChain, Ollama, Selenium)",
      description: "Agentic workflow for scraping, structuring, and extracting value from live website content.",
      techstack: ["Python", "LangChain", "Ollama", "Selenium", "Llama 3.2", "Vector Embeddings"],
      github: "https://github.com/ChamilkaMihiraj2002/ai-scraper",
      demo: "#",
      category: "aiml",
      image: localRAG,
    },
    {
      title: "Local AI Agent with Python, Ollama, LangChain & RAG",
      description: "Private local assistant powered by retrieval, embeddings, and open-source language models.",
      techstack: ["Python", "Streamlit", "LangChain", "ChromaDB", "Ollama", "Llama 3.2", "Vector Embeddings"],
      github: "https://github.com/ChamilkaMihiraj2002/Local-AI-Agent-With-Python-Ollama-LangChain-RAG-",
      demo: "#",
      category: "aiml",
      image: localRAG,
    },
    {
      title: "Automatic Bottle Filling and Capping Machine",
      description: "IoT and embedded systems build combining hardware logic with automation for industrial tasks.",
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

  const filteredProjects = projects.filter((project) => project.category === selectedCategory);
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        <div className="section-heading">
          <div>
            <span className="section-kicker">DEPLOYED_MODELS</span>
            <h2 className="section-title">Projects engineered for real use.</h2>
            <p className="section-copy">
              Product builds across full-stack apps, automation tools, AI workflows, and embedded systems.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaLayerGroup as any, { "aria-hidden": true })}
          </div>
        </div>

        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${selectedCategory === "fullstack" ? styles.active : ""}`}
            onClick={() => handleCategoryChange("fullstack")}
          >
            Full-stack
          </button>
          <button
            className={`${styles.tabButton} ${selectedCategory === "desktop" ? styles.active : ""}`}
            onClick={() => handleCategoryChange("desktop")}
          >
            Desktop
          </button>
          <button
            className={`${styles.tabButton} ${selectedCategory === "aiml" ? styles.active : ""}`}
            onClick={() => handleCategoryChange("aiml")}
          >
            AI / ML
          </button>
          <button
            className={`${styles.tabButton} ${selectedCategory === "iot" ? styles.active : ""}`}
            onClick={() => handleCategoryChange("iot")}
          >
            IoT
          </button>
        </div>

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
                  <span className={styles.cardCategory}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
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
                    {React.createElement(FaCodeBranch as any, { "aria-hidden": true })}
                    View Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={styles.tabButton}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`${styles.tabButton} ${currentPage === i + 1 ? styles.active : ""}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={styles.tabButton}
            >
              Next
            </button>
          </div>
        )}

        <div className={styles.moreWrap}>
          <a
            href={GITHUB_URL}
            className="btn-ghost-neo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more projects on GitHub"
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
