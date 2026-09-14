import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCodeBranch } from "react-icons/fa";
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
const categories: {
    id: Category;
    label: string;
    summary: string;
}[] = [
    {
        id: "fullstack",
        label: "Full-stack",
        summary: "Products spanning frontend systems, APIs, auth, and operational workflows.",
    },
    {
        id: "aiml",
        label: "AI & Machine Learning",
        summary: "RAG assistants, agentic tooling, and practical applied machine learning builds.",
    },
    {
        id: "desktop",
        label: "Desktop",
        summary: "Local-first tools focused on accessibility, automation, and dependable workflows.",
    },
    {
        id: "iot",
        label: "IoT & Embedded",
        summary: "Physical systems where firmware, hardware logic, and automation meet.",
    },
];
const Projects: React.FC = () => {
    const allProjects: Project[] = useMemo(() => [
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
            techstack: ["Python", "SQLite", "smtplib", "pytest", "Modern TKinter"],
            github: "#",
            demo: "#",
            category: "desktop",
            image: emailler,
        },
        {
            title: "AI Web Scraper",
            description: "Agentic workflow for scraping, structuring, and extracting value from live website content.",
            techstack: ["Python", "LangChain", "Ollama", "Selenium", "Llama 3.2", "Embeddings"],
            github: "https://github.com/ChamilkaMihiraj2002/ai-scraper",
            demo: "#",
            category: "aiml",
            image: localRAG,
        },
        {
            title: "Local AI Agent (RAG)",
            description: "Private local assistant powered by retrieval, embeddings, and open-source language models.",
            techstack: ["Python", "Streamlit", "LangChain", "ChromaDB", "Ollama", "Llama 3.2"],
            github: "https://github.com/ChamilkaMihiraj2002/Local-AI-Agent-With-Python-Ollama-LangChain-RAG-",
            demo: "#",
            category: "aiml",
            image: localRAG,
        },
        {
            title: "Automatic Bottle Filling & Capping Machine",
            description: "IoT and embedded systems build combining hardware logic with automation for industrial tasks.",
            techstack: ["Arduino", "C", "C++", "Git", "GitHub"],
            github: "https://github.com/ChamilkaMihiraj2002/Automatic-bottle-filling-and-capping-machine",
            demo: "#",
            category: "iot",
            image: iot,
        },
    ], []);
    const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 4;
    const filteredProjects = allProjects.filter((project) => selectedCategory === "all" || project.category === selectedCategory);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const paginatedProjects = filteredProjects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);
    const handleCategoryChange = (category: Category | "all") => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };
    return (<section id="projects" className={styles.section}>
      <div className="section-shell">
        <div className={styles.heading}>
          <div className="section-heading">
            <span className="section-kicker">01 / Selected work</span>
            <h2 className="section-title">Ideas into reality<span className={styles.accent}>.</span></h2>
            <p className="section-copy">A selection of things I’ve built — from intelligent assistants to everyday tools that make a difference.</p>
          </div>
          <a href="https://github.com/ChamilkaMihiraj2002" target="_blank" rel="noopener noreferrer" className={styles.archiveLink}>More on GitHub <span aria-hidden="true">↗</span></a>
        </div>

        <div className={styles.toolbar}>
          <div className={styles.filterRail} role="group" aria-label="Filter projects">
            {[{ id: "all" as const, label: "All projects" }, ...categories].map(category => (<button key={category.id} type="button" aria-pressed={selectedCategory === category.id} className={`${styles.filterButton} ${selectedCategory === category.id ? styles.filterButtonActive : ""}`} onClick={() => handleCategoryChange(category.id)}>{category.label}</button>))}
          </div>
          <span className={styles.resultCount} role="status">{String(filteredProjects.length).padStart(2, "0")} projects</span>
        </div>

        <div className={styles.projectGrid}>
          {paginatedProjects.map((project, index) => (<motion.article key={project.title} className={styles.projectCard} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.35 }}>
              <div className={`${styles.projectMedia} ${styles[project.category]}`}>
                <span className={styles.projectNumber}>{String((currentPage - 1) * projectsPerPage + index + 1).padStart(2, "0")} / PROJECT</span>
                <img src={project.image} alt={`${project.title} preview`} className={styles.projectImage} loading="lazy"/>
                {project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.imageLink} aria-label={`View ${project.title} on GitHub`}><span aria-hidden="true">↗</span></a>}
              </div>
              <div className={styles.projectContent}>
                <span className={styles.eyebrow}>{categories.find(category => category.id === project.category)?.label}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techRow}>{project.techstack.map(tech => <span key={tech} className={styles.techBadge}>{tech}</span>)}</div>
                {project.github !== "#" ? <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.primaryLink}>
                  {React.createElement(FaCodeBranch as React.ElementType, { "aria-hidden": true })} View repository <span aria-hidden="true">↗</span>
                </a> : <span className={styles.privateNote}>Private repository</span>}
              </div>
            </motion.article>))}
        </div>

        {totalPages > 1 && (<div className={styles.pagination}>
            <button type="button" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className={styles.paginationButton}>
              Previous
            </button>

            <div className={styles.paginationIndex}>
              {Array.from({ length: totalPages }, (_, index) => (<button key={index + 1} type="button" onClick={() => setCurrentPage(index + 1)} className={`${styles.paginationDot} ${currentPage === index + 1 ? styles.paginationDotActive : ""}`} aria-label={`Go to page ${index + 1}`} aria-current={currentPage === index + 1 ? "page" : undefined}>
                  {String(index + 1).padStart(2, "0")}
                </button>))}
            </div>

            <button type="button" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className={styles.paginationButton}>
              Next
            </button>
          </div>)}

        <a href="https://www.github.com/ChamilkaMihiraj2002" target="_blank" rel="noopener noreferrer" className={styles.archiveLink}>
          Browse the full code archive
          {React.createElement(FaArrowRight as React.ElementType, {
            "aria-hidden": true,
        })}
        </a>
      </div>
    </section>);
};
export default Projects;
