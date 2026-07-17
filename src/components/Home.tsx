import React from "react";
import { motion, type Variants } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import portrait from "../images/My images/me.png";

const focusAreas = [
  {
    title: "AI/ML Research",
    copy: "Designing evaluation-first experiments, retrieval workflows, and model-backed product behavior that can be measured and improved.",
  },
  {
    title: "LLM Engineering",
    copy: "Building grounded assistants, RAG pipelines, and agentic tools with a strong emphasis on reliability, orchestration, and UX.",
  },
  {
    title: "ComfyUI Automations",
    copy: "Crafting repeatable node-based pipelines and creative automation systems that bridge prompt design, image generation, and deployment.",
  },
  {
    title: "Full-Stack Architecture",
    copy: "Shipping end-to-end systems across frontend, APIs, and data layers with performance, clarity, and maintainability in mind.",
  },
];

const heroMetrics = [
  { value: "25+", label: "Systems and product builds delivered" },
  { value: "3.57", label: "Current GPA in IT & Management" },
  { value: "UoM", label: "University of Moratuwa foundation" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/chamilka-mihiraj-perera2002/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/ChamilkaMihiraj2002/",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.kaggle.com/chamilkamihiraj",
    label: "Kaggle",
    icon: SiKaggle,
  },
  {
    href: "https://medium.com/@chamilkaperera5",
    label: "Medium",
    icon: FaMedium,
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.4, 0, 0.2, 1],
      delay,
    },
  }),
};

const Home: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-wrap">
        <motion.div
          className="hero-intro"
          initial="hidden"
          animate="show"
          variants={reveal}
          custom={0}
        >
          <div className="hero-intro-rail">
            <span className="hero-kicker">Portfolio 2026</span>
            <span className="hero-presence">
              Based in Sri Lanka, building globally relevant AI products.
            </span>
          </div>

          <div className="hero-copy-stack">
            <motion.p className="hero-label" variants={reveal} custom={0.05}>
              AI engineer, research-driven builder, and full-stack architect
            </motion.p>

            <motion.h1 className="hero-title" variants={reveal} custom={0.1}>
              Pure systems thinking for intelligent software.
            </motion.h1>

            <motion.p className="hero-summary" variants={reveal} custom={0.15}>
              I design and ship elegant digital products at the intersection of
              machine learning, LLM infrastructure, automation, and frontend
              craft. The work is technical at its core and minimal in its
              presentation.
            </motion.p>
          </div>

          <motion.div className="hero-actions" variants={reveal} custom={0.2}>
            <a href="#projects" className="hero-cta hero-cta-primary">
              View selected work
              {React.createElement(FaArrowRight as React.ElementType, {
                "aria-hidden": true,
              })}
            </a>
            <a href="#contact" className="hero-cta hero-cta-secondary">
              Start a conversation
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-bento"
          initial="hidden"
          animate="show"
          variants={reveal}
          custom={0.1}
        >
          <motion.article
            className="hero-panel hero-panel-statement"
            variants={reveal}
            custom={0.15}
          >
            <div className="hero-identity">
              <div className="hero-portrait-wrap">
                <img
                  src={portrait}
                  alt="Chamilka Mihiraj Perera"
                  className="hero-portrait"
                  decoding="async"
                  fetchPriority="high"
                  loading="eager"
                />
              </div>

              <div className="hero-identity-copy">
                <p className="hero-panel-label">Current direction</p>
                <p className="hero-panel-copy">
                  Reframing portfolios as product surfaces: quieter, sharper,
                  and built to foreground high-leverage engineering work over
                  visual noise.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            className="hero-panel hero-panel-focus"
            variants={reveal}
            custom={0.22}
          >
            <div className="hero-panel-heading">
              <p className="hero-panel-label">Core practice</p>
              <a href="/cv.pdf" download className="inline-link">
                Download CV
              </a>
            </div>

            <div className="focus-grid" aria-label="Technical focus areas">
              {focusAreas.map((area) => (
                <div key={area.title} className="focus-item">
                  <h2>{area.title}</h2>
                  <p>{area.copy}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            className="hero-panel hero-panel-metrics"
            variants={reveal}
            custom={0.3}
          >
            <p className="hero-panel-label">Signals</p>
            <div className="metrics-list">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="metric-row">
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            className="hero-panel hero-panel-links"
            variants={reveal}
            custom={0.36}
          >
            <p className="hero-panel-label">Elsewhere</p>
            <div className="social-list">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                  aria-label={label}
                >
                  <span className="social-item-label">{label}</span>
                  {React.createElement(Icon as React.ElementType, {
                    "aria-hidden": true,
                  })}
                </a>
              ))}
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
