import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../images/My images/me.png";
import { FaDownload, FaGithub, FaLinkedin, FaMedium, FaTerminal } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

const TYPEWRITER_TEXT = "AI Engineering Intern | Full-Stack Developer | IT Undergraduate";

const TypewriterLine: React.FC = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      if (index < TYPEWRITER_TEXT.length) {
        setDisplayText((current) => current + TYPEWRITER_TEXT.charAt(index));
        index += 1;
      } else {
        window.clearInterval(timer);
      }
    }, 40);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="typewriter-line">
      {displayText}
      <span className="typewriter-caret" />
    </span>
  );
};

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
          <span className="status-pill">
            <span className="status-dot" />
            Active AI Engineering Intern
          </span>

          <h1 className="headline">
            Engineering dependable software with intelligent systems.
          </h1>

          <div className="terminal-line">
            <TypewriterLine />
          </div>

          <p className="lede">
            BSc (Hons) IT&M undergraduate at University of Moratuwa and AI engineering intern focused on turning machine intelligence,
            automation, and modern web engineering into polished, high-performance software.
          </p>

          <div className="action-row">
            <a href="#projects" className="btn-primary-neo" aria-label="View projects">
              Explore Projects
            </a>
            <a href="#contact" className="btn-ghost-neo" aria-label="Contact Chamilka">
              Get in Touch
            </a>
          </div>

          <div className="chip-row" aria-label="Key capabilities">
            <span className="chip">AI Agentic Workflows</span>
            <span className="chip">React + TypeScript</span>
            <span className="chip">Python & Automation</span>
            <span className="chip">RAG & LLM Integration</span>
          </div>

          <div className="social-inline">
            <a
              href="https://www.linkedin.com/in/chamilka-mihiraj-perera2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              {React.createElement(FaLinkedin as any, { "aria-hidden": true })}
              LinkedIn
            </a>
            <a
              href="https://github.com/ChamilkaMihiraj2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              {React.createElement(FaGithub as any, { "aria-hidden": true })}
              GitHub
            </a>
            <a
              href="https://www.kaggle.com/chamilkamihiraj"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Kaggle"
            >
              {React.createElement(SiKaggle as any, { "aria-hidden": true })}
              Kaggle
            </a>
            <a
              href="https://medium.com/@chamilkaperera5"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Medium"
            >
              {React.createElement(FaMedium as any, { "aria-hidden": true })}
              Medium
            </a>
            <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Download CV"
            >
              {React.createElement(FaDownload as any, { "aria-hidden": true })}
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual hero-panel"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          <div className="profile-panel">
            <div className="profile-spotlight">
              <span className="profile-badge profile-badge-top">AI-first Builder</span>
              <div className="avatar-ring">
                <img
                  src={logo}
                  alt="Chamilka Mihiraj Perera"
                  className="avatar"
                  decoding="async"
                  fetchPriority="high"
                  loading="eager"
                />
              </div>
              <span className="profile-badge profile-badge-bottom">District 1st A/L</span>
            </div>

            <div className="profile-meta">
              <div>
                <p className="profile-eyebrow">Featured Profile</p>
                <h2 className="profile-name">Chamilka Mihiraj Perera</h2>
              </div>
              <span className="profile-availability">Available</span>
            </div>

            <div className="stat-grid">
              <div className="stat-card">
                <span className="stat-value">25+</span>
                <span className="stat-label">Projects Shipped</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">3.57</span>
                <span className="stat-label">Current GPA</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">Moratuwa</span>
                <span className="stat-label">University</span>
              </div>
            </div>
          </div>

          <div className="terminal-card">
            <div className="terminal-topbar">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-amber" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="terminal-file">profile_agent.py</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-header">
                {React.createElement(FaTerminal as any, { "aria-hidden": true })}
                <span>root@chamilka:~/portfolio</span>
              </div>
              <pre className="terminal-code">
                <code>
                  <span className="code-keyword">class</span> <span className="code-function">AIEngineer</span>:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">def</span> <span className="code-function">__init__</span>(self):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="code-string">"Chamilka Mihiraj Perera"</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.role = <span className="code-string">"AI Engineering Intern"</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.gpa = <span className="code-number">3.57</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.focus = [<span className="code-string">"RAG"</span>, <span className="code-string">"AI Agents"</span>, <span className="code-string">"Fullstack"</span>]<br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">def</span> <span className="code-function">deploy_intelligent_system</span>(self):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment"># Turning research into dependably shipped code</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> self.focus
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
