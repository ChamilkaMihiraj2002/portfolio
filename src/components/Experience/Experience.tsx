import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import "../Education/Education.css";
import "./Experience.css";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-5">
      <Container>
        <div className="section-heading">
          <div>
            <span className="section-kicker">CURRENT_MISSION</span>
            <h2 className="section-title">Work experience and industry exposure.</h2>
            <p className="section-copy">
              The professional work I am doing right now while growing deeper in AI engineering and product delivery.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaBriefcase as any, {
              "aria-hidden": true,
            })}
          </div>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="shadow-sm border-0 projects-card">
            <Card.Body className="p-4 p-md-5">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-4">
                <div className="experienceHeader">
                  <div className="companyBlock">
                    <div className="casloWordmark" aria-label="Caslo logo">
                      CASLO
                    </div>
                    <div className="companyMeta">
                      <Card.Title className="fw-bold mb-1">AI Engineering Intern</Card.Title>
                      <Card.Subtitle className="text-muted">Caslo</Card.Subtitle>
                    </div>
                  </div>
                </div>
                <time className="text-muted" dateTime="2026-Present">
                  2026 - Present
                </time>
              </div>

              <Card.Text className="mb-0 experienceSummary">
                Working as an AI Engineering Intern at Caslo, contributing to practical AI solutions and gaining
                hands-on experience in building, improving, and integrating intelligent systems into real-world products.
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.article>
      </Container>
    </section>
  );
};

export default Experience;
