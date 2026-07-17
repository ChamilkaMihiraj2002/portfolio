import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCodeBranch, FaLayerGroup } from "react-icons/fa";
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

const categories: { id: Category; label: string; summary: string }[] = [
  {
    id: "fullstack",
    label: "Full-Stack Architecture",
    summary: "Products spanning frontend systems, APIs, auth, and operational workflows.",
  },
  {
    id: "aiml",
    label: "AI / LLM Engineering",
    summary: "RAG assistants, agentic tooling, and practical applied machine learning builds.",
  },
  {
    id: "desktop",
    label: "Desktop Utilities",
    summary: "Local-first tools focused on accessibility, automation, and dependable workflows.",
  },
  {
    id: "iot",
    label: "IoT & Embedded",
    summary: "Physical systems where firmware, hardware logic, and automation meet.",
  },
];

const Projects: React.FC = () => {
  const allProjects: Project[] = useMemo(
    () => [
      {
        title: "EmpSync - Employee Management System",
        description:
          "Employee operations platform with modern auth, admin workflows, and scalable data handling.",
        techstack: ["React", "Next.js", "PostgreSQL", "PrismaORM", "Auth0", "Firebase"],
        github: "https://github.com/ChamilkaMihiraj2002/EmpSync-V2",
        demo: "#",
        category: "fullstack",
        image: superadmin,
      },
      {
        title: "Pharmacy Queue Management System",
        description:
          "Queue orchestration system that reduces waiting friction and improves patient flow visibility.",
        techstack: ["React", "Express.js", "Node.js", "MongoDB"],
        github: "https://github.com/ChamilkaMihiraj2002/Pharmacy-Queue-Management-System",
        demo: "#",
        category: "fullstack",
        image: pharma,
      },
      {
        title: "Online Medical Appointment System",
        description:
          "Full-stack appointment booking experience for doctors and patients with secure scheduling flows.",
        techstack: ["React", "Axios", "Bootstrap", "Laravel", "Laravel Sanctum", "MySQL"],
        github: "https://github.com/ChamilkaMihiraj2002/Health-app",
        demo: "#",
        category: "fullstack",
        image: mediapp,
      },
      {
        title: "EduLanka - Online Tutoring Platform",
        description:
          "Tutoring platform designed for course discovery, learner engagement, and instructor management.",
        techstack: ["React", "Express.js", "Node.js", "MongoDB"],
        github: "https://github.com/ChamilkaMihiraj2002/TutorLK",
        demo: "#",
        category: "fullstack",
        image: edulk,
      },
      {
        title: "Text to Speech Application",
        description:
          "Desktop utility focused on accessible text-to-speech conversion with a simple local workflow.",
        techstack: ["Python", "TKinter", "pyttsx3", "Pillow"],
        github: "https://github.com/ChamilkaMihiraj2002/Text-to-Speech-Application",
        demo: "#",
        category: "desktop",
        image: t2s,
      },
      {
        title: "AI ChatBot with Python",
        description:
          "Conversational AI project exploring intent handling, training pipelines, and response generation.",
        techstack: ["Python", "NLTK", "TensorFlow"],
        github: "https://github.com/ChamilkaMihiraj2002/Python-Chatboat",
        demo: "#",
        category: "aiml",
        image: chatbot,
      },
      {
        title: "Finance Paysheet Emailer",
        description:
          "Automation tool for preparing and distributing payroll-related communication reliably.",
        techstack: ["Python", "SQLite", "smtplib", "pytest", "Modern TKinter"],
        github: "#",
        demo: "#",
        category: "desktop",
        image: emailler,
      },
      {
        title: "AI Web Scraper",
        description:
          "Agentic workflow for scraping, structuring, and extracting value from live website content.",
        techstack: ["Python", "LangChain", "Ollama", "Selenium", "Llama 3.2", "Embeddings"],
        github: "https://github.com/ChamilkaMihiraj2002/ai-scraper",
        demo: "#",
        category: "aiml",
        image: localRAG,
      },
      {
        title: "Local AI Agent (RAG)",
        description:
          "Private local assistant powered by retrieval, embeddings, and open-source language models.",
        techstack: ["Python", "Streamlit", "LangChain", "ChromaDB", "Ollama", "Llama 3.2"],
        github:
          "https://github.com/ChamilkaMihiraj2002/Local-AI-Agent-With-Python-Ollama-LangChain-RAG-",
        demo: "#",
        category: "aiml",
        image: localRAG,
      },
      {
        title: "Automatic Bottle Filling & Capping Machine",
        description:
          "IoT and embedded systems build combining hardware logic with automation for industrial tasks.",
        techstack: ["Arduino", "C", "C++", "Git", "GitHub"],
        github:
          "https://github.com/ChamilkaMihiraj2002/Automatic-bottle-filling-and-capping-machine",
        demo: "#",
        category: "iot",
        image: iot,
      },
    ],
    []
  );

  const [selectedCategory, setSelectedCategory] = useState<Category>("fullstack");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const filteredProjects = allProjects.filter(
    (project) => project.category === selectedCategory
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );
  const featuredProject = paginatedProjects[0];
  const secondaryProjects = paginatedProjects.slice(1);
  const activeCategory = categories.find((item) => item.id === selectedCategory);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className={styles.section}>
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Selected Work</span>
            <h2 className="section-title">Projects shaped with the same restraint as the interface.</h2>
            <p className="section-copy">
              A curated view of full-stack systems, AI engineering experiments, automation tooling,
              and embedded builds presented through a cleaner bento-style portfolio structure.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaLayerGroup as React.ElementType, {
              "aria-hidden": true,
            })}
          </div>
        </div>

        <div className={styles.toolbar}>
          <div className={styles.filterRail}>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`${styles.filterButton} ${
                  selectedCategory === category.id ? styles.filterButtonActive : ""
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className={styles.categorySummary}>
            <p className={styles.summaryLabel}>Current lens</p>
            <p className={styles.summaryText}>{activeCategory?.summary}</p>
          </div>
        </div>

        {featuredProject && (
          <div className={styles.bentoGrid}>
            <motion.article
              className={styles.featuredCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <div className={styles.featuredMedia}>
                <img
                  src={featuredProject.image || "/logo192.png"}
                  alt={`${featuredProject.title} preview`}
                  className={styles.featuredImage}
                  loading="lazy"
                />
              </div>

              <div className={styles.featuredContent}>
                <span className={styles.eyebrow}>{activeCategory?.label}</span>
                <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
                <p className={styles.featuredDescription}>{featuredProject.description}</p>

                <div className={styles.techRow}>
                  {featuredProject.techstack.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryLink}
                >
                  {React.createElement(FaCodeBranch as React.ElementType, {
                    "aria-hidden": true,
                  })}
                  View repository
                </a>
              </div>
            </motion.article>

            <div className={styles.sideGrid}>
              {secondaryProjects.map((project, index) => (
                <motion.article
                  key={`${project.title}-${index}`}
                  className={styles.projectCard}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    delay: index * 0.07,
                  }}
                >
                  <img
                    src={project.image || "/logo192.png"}
                    alt={`${project.title} preview`}
                    className={styles.projectImage}
                    loading="lazy"
                  />
                  <div className={styles.projectContent}>
                    <span className={styles.eyebrow}>{project.category.replace("aiml", "AI / ML")}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.techRow}>
                      {project.techstack.slice(0, 4).map((tech) => (
                        <span key={tech} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              Previous
            </button>

            <div className={styles.paginationIndex}>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  type="button"
                  onClick={() => setCurrentPage(index + 1)}
                  className={`${styles.paginationDot} ${
                    currentPage === index + 1 ? styles.paginationDotActive : ""
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
            >
              Next
            </button>
          </div>
        )}

        <a
          href="https://www.github.com/ChamilkaMihiraj2002"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.archiveLink}
        >
          Browse the full code archive
          {React.createElement(FaArrowRight as React.ElementType, {
            "aria-hidden": true,
          })}
        </a>
      </div>
    </section>
  );
};

export default Projects;
