import React, { useMemo } from "react";
import "./Education.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

import uomlog from "../../images/Education/uom.png";
import ssclog from "../../images/Education/ssc.png";
import vtalog from "../../images/Education/thurunushakthi.png";
import hcmilog from "../../images/Education/hcmi.png";
import ditlogo from "../../images/Education/dit.png";

type EducationItem = {
  degree: string;
  school: string;
  year: string;
  details?: string;
  logoUrl?: string;
};

const educationData: EducationItem[] = [
  {
    degree: "BSc. (Hons) in Information Technology and Management",
    school: "University of Moratuwa, Sri Lanka",
    year: "2023 – Present",
    details: "Currently focusing on Software Engineering, Intelligent Systems, and Data Science. Maintaining a current GPA of 3.57.",
    logoUrl: uomlog,
  },
  {
    degree: "GCE A/L - 3A's District 1st",
    school: "Sri Sangabodhi National College",
    year: "2021 – 2022",
    details: "Achieved 3A's with the highest district rank, specializing in Physical Sciences.",
    logoUrl: ssclog,
  },
  {
    degree: "Graphic Design Diploma",
    school: "Thurunu Shakthi (TSVTP)",
    year: "2018 - 2019",
    details: "Learned vector illustration, UI layouts, and brand visual guidelines.",
    logoUrl: vtalog,
  },
  {
    degree: "Human Resource Diploma",
    school: "HCMI",
    year: "2018",
    details: "Comprehensive study in people operations and organizational psychology.",
    logoUrl: hcmilog,
  },
  {
    degree: "Information Technology Diploma",
    school: "DIT",
    year: "2018",
    details: "Foundational training in algorithmic structures, database schemas, and networking.",
    logoUrl: ditlogo,
  },
  {
    degree: "GCE O/L - 6A's 2B's C",
    school: "Sri Sangabodhi National College",
    year: "2017 – 2018",
    logoUrl: ssclog,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as any } },
};

const Education: React.FC = () => {
  const education = useMemo(() => educationData, []);

  return (
    <section id="education">
      <Container>
        <div className="section-heading">
          <div>
            <span className="section-kicker">Academic History</span>
            <h2 className="section-title">Education & milestones.</h2>
            <p className="section-copy">
              The academic background and foundational learning behind my engineering and software architecture patterns.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaGraduationCap as any, {
              "aria-hidden": true,
            })}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Row className="g-4">
            {education.map((edu, idx) => (
              <Col key={`${edu.school}-${edu.year}-${idx}`} xs={12} md={6} lg={4}>
                <motion.article variants={itemVariants as any} className="h-100">
                  <Card className="edu-card border-0">
                    <Card.Body className="p-4 d-flex flex-column h-100">
                      <div className="d-flex align-items-center mb-3">
                        {edu.logoUrl && (
                          <img
                            src={edu.logoUrl}
                            alt={`${edu.school} logo`}
                            className="edu-logo-img me-3"
                          />
                        )}
                        <div>
                          <h3 className="edu-title">{edu.degree}</h3>
                          <span className="edu-school">{edu.school}</span>
                        </div>
                      </div>

                      <div className="mt-auto">
                        {edu.details && <p className="edu-details">{edu.details}</p>}
                        <span className="edu-year">
                          {edu.year}
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.article>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Education;
