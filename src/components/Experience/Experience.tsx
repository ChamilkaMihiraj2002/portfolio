import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import "./Experience.css";
import casloLogo from "../../images/caslo_logo.png";
import nonoAiLogo from "../../images/nonoAi_logo.jpg";

const experiences = [
  {
    company: "Caslo",
    companyType: "AI product environment",
    role: "AI Engineering Intern",
    location: "Remote / Hybrid",
    period: "2026 - Present",
    logo: casloLogo,
    summary:
      "Working on production-grade AI solutions with a focus on turning open-source model capability into reliable application behavior. The work spans agentic orchestration, retrieval quality, API-facing LLM services, and shipping systems that feel usable to real teams.",
    highlights: [
      "Implemented agentic workflows for product-facing AI tasks.",
      "Improved RAG pipeline structure and retrieval quality for real use cases.",
      "Wrapped open-source LLM capabilities behind more dependable API surfaces.",
    ],
  },
  {
    company: "NONOAI",
    companyType: "Applied AI engineering team",
    role: "Intern Software Engineer - AI",
    location: "Remote / Hybrid",
    period: "Jun 2025 - Jan 2026",
    logo: nonoAiLogo,
    summary:
      "Contributed to AI-focused software engineering work across model-backed product features, implementation support, and practical delivery tasks while building stronger experience around applied LLM systems and engineering collaboration.",
    highlights: [
      "Supported AI feature implementation in a product engineering environment.",
      "Worked across software delivery tasks connected to intelligent system behavior.",
      "Strengthened practical experience in applied AI engineering before transitioning into later internship work.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Professional History</span>
            <h2 className="section-title">Real-world AI delivery, not just experimentation.</h2>
            <p className="section-copy">
              Industry work centered on practical LLM integration, retrieval systems, and
              engineering patterns that can move from prototype to product.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaBriefcase as React.ElementType, {
              "aria-hidden": true,
            })}
          </div>
        </div>

        <div className="experience-stack">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              className="experience-feature"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.08 }}
            >
              <div className="experience-topline">
                <div className="experience-mark">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="experience-logo"
                    loading="lazy"
                  />
                  <span className="experience-mark-type">{experience.companyType}</span>
                </div>

                <div className="experience-meta">
                  <span className="experience-role">{experience.role}</span>
                  <span className="experience-company">
                    {experience.company} · {experience.location}
                  </span>
                </div>

                <span className="experience-period">{experience.period}</span>
              </div>

              <div className="experience-body">
                <p className="experience-summary">{experience.summary}</p>

                <div className="experience-highlights">
                  {experience.highlights.map((item) => (
                    <div key={item} className="experience-highlight">
                      <span className="experience-bullet" aria-hidden="true" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
