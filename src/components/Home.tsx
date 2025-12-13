// src/components/Home.tsx
import React from "react";
import { motion } from "framer-motion";
import logo from "../images/My images/me.jpeg";
import { FaLinkedin, FaGithub, FaMedium, FaDownload } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

const Home: React.FC = () => {
  return (
    <section id="home" className="hero-shell">
      <div className="section-shell hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-copy"
        >
          <span className="eyebrow">Available for 2026 opportunities</span>
          <h1 className="headline">Hi, I'm Chamilka — crafting reliable products with a researcher's curiosity.</h1>
          <p className="lede">Software Engineer & full-stack developer blending React, TypeScript, and Python with a love for AI/ML. I ship resilient systems, thoughtful UX, and measurable impact.</p>

          <div className="action-row" style={{ marginTop: 20 }}>
            <a
              href="#projects"
              className="btn-primary-neo"
              aria-label="View projects"
            >
              Explore my work
            </a>
            <a
              href="mailto:chamilkaperera5@gmail.com"
              className="btn-ghost-neo"
              aria-label="Contact Chamilka"
            >
              Let's collaborate
            </a>
          </div>

          <div className="chip-row" aria-label="Key capabilities">
            <span className="chip">Full-stack product builds</span>
            <span className="chip">AI + ML pipelines</span>
            <span className="chip">Cloud-native shipping</span>
          </div>

          <div className="social-inline">
            <a
              href="https://www.linkedin.com/in/chamilka-mihiraj-perera2002/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="btn btn-outline-primary btn-sm social-btn"
            >
              {React.createElement(FaLinkedin as any, { style: { verticalAlign: "middle", marginRight: 6 } })}
              LinkedIn
            </a>

            <a
              href="https://github.com/ChamilkaMihiraj2002/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn btn-outline-dark btn-sm social-btn"
            >
              {React.createElement(FaGithub as any, { style: { verticalAlign: "middle", marginRight: 6 } })}
              GitHub
            </a>

            <a
              href="https://www.kaggle.com/chamilkamihiraj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaggle"
              className="btn btn-outline-info btn-sm social-btn"
            >
              {React.createElement(SiKaggle as any, { style: { verticalAlign: "middle", marginRight: 6 } })}
              Kaggle
            </a>

            <a
              href="https://medium.com/@chamilkaperera5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className="btn btn-outline-secondary btn-sm social-btn"
            >
              {React.createElement(FaMedium as any, { style: { verticalAlign: "middle", marginRight: 6 } })}
              Medium
            </a>
            <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
              className="btn btn-outline-success btn-sm social-btn"
            >
              {React.createElement(FaDownload as any, { style: { verticalAlign: "middle", marginRight: 6 } })}
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual glass"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div className="avatar-ring">
            <img
              src={logo}
              alt="Profile"
              className="avatar"
              decoding="async"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <div className="stat-grid">
            <div className="stat-card">
              <span className="stat-value">25+</span>
              <span className="stat-label">Projects shipped</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">3.57</span>
              <span className="stat-label">GPA | Research focus</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">AI/ML</span>
              <span className="stat-label">ML, NLP, OpenCv, Ollama</span>
            </div>
          </div>
          <p className="quote-fixed">"Coding is beautiful when it writes logically"</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
