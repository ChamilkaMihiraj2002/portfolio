import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import "./Experience.css";

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <Container>
        <div className="section-heading">
          <div>
            <span className="section-kicker">Professional History</span>
            <h2 className="section-title">Work experience & industry exposure.</h2>
            <p className="section-copy">
              Developing practical AI solutions and gains hands-on experience in building, improving, and integrating intelligent systems into real-world products.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaBriefcase as any, {
              "aria-hidden": true,
            })}
          </div>
        </div>

        <div className="experience-timeline">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="experience-card border-0">
              <Card.Body className="p-4 p-md-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
                  <div className="company-block">
                    <div className="caslo-logo" aria-label="Caslo Company Logo">
                      CASLO
                    </div>
                    <div>
                      <h3 className="role-title">AI Engineering Intern</h3>
                      <span className="company-name">Caslo · Remote / Hybrid</span>
                    </div>
                  </div>
                  <span className="time-badge">
                    2026 - Present
                  </span>
                </div>

                <p className="experience-summary">
                  Working as an AI Engineering Intern at Caslo, contributing to production-grade AI solutions. Implemented agentic AI workflows, optimized Retrieval-Augmented Generation (RAG) pipelines, and gained hands-on expertise in wrapping open-source LLMs into API endpoints for reliable product delivery.
                </p>
              </Card.Body>
            </Card>
          </motion.article>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
