// src/components/Courses.tsx
import React, { useMemo } from "react";
import "./Courses.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLinkedin } from "react-icons/fa";

import ibm from "../../images/Certifications/ibm.png";
import dpl from "../../images/Certifications/dpl.png";
import cisco from "../../images/Certifications/cisco.png";
import meta from "../../images/Certifications/meta.png";
import opeanCv from "../../images/Certifications/opeancv.png";
import sliit from "../../images/Certifications/sliit.png";
import um from "../../images/Certifications/um.png";

type CourseItem = {
  degree: string;
  school: string;
  year: string;
  details?: string;
  logoUrl?: string;
};

const educationData: CourseItem[] = [
  {
    degree: "Machine Learning Specialization",
    school: "DeepLearning.AI",
    year: "2025 - August",
  logoUrl: dpl,
  },
  {
    degree: "Mathematics for Machine Learning and Data Science Specialization",
    school: "DeepLearning.AI",
    year: "2025 - April",
  logoUrl: dpl,
  },
  {
    degree: "Python Specialization",
    school: "University of Michigan",
    year: "2025 - March",
  logoUrl: um,
  },
  {
    degree: "Version Control",
    school: "Meta",
    year: "2024 - May",
  logoUrl: meta,
  },
  {
    degree: "Data Analysis Using Python",
    school: "IBM",
    year: "2024 - July",
  logoUrl: ibm,
  },
  {
    degree: "Open Source Foundations",
    school: "IBM",
    year: "2024 - September",
  logoUrl: ibm,
  },
  {
    degree: "OpenCv - Python",
    school: "OpenCV University",
    year: "2024 - October",
  logoUrl: opeanCv,
  },
  {
    degree: "AI/ML Engineer - Stage I",
    school: "SLIIT",
    year: "2023 - July",
  logoUrl: sliit,
  },
  {
    degree: "Python for Data Science",
    school: "IBM",
    year: "2023 - May",
  logoUrl: ibm,
  },
  {
    degree: "Internet of Things (IoT)",
    school: "Cisco Network Academy",
    year: "2023 - June",
  logoUrl: cisco,
  },
  {
    degree: "Data Science Methodologies",
    school: "IBM",
    year: "2023 - May",
  logoUrl: ibm,
  },
  {
    degree: "Cybersecurity",
    school: "Cisco Network Academy",
    year: "2023 - May",
  logoUrl: cisco,
  },
  
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Courses: React.FC = () => {
  const education = useMemo(() => educationData, []);
  const LINKEDIN_COURSES_URL = "https://www.linkedin.com/in/chamilka-mihiraj-perera2002/details/certifications/";

  return (
    <section id="education" className="py-5">
      <Container>
        <header className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="mb-0 fw-bold">Certifications</h2>
          {/* Render icon via createElement with any-cast to avoid TS2786 from react-icons types */}
          {React.createElement(FaGraduationCap as any, {
            'aria-hidden': true,
            size: 28,
            className: 'text-primary',
          })}
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row className="g-3">
            {education.map((edu) => (
              <Col key={`${edu.school}-${edu.year}`} xs={12} md={6} lg={4}>
                <motion.article variants={itemVariants} className="h-100">
                  <Card className="h-100 shadow-sm border-0 edu-card projects-card">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-2">
                        {edu.logoUrl && (
                          <img
                            src={edu.logoUrl}
                            alt={`${edu.school} logo`}
                            width={48}
                            height={48}
                            className="me-3 rounded"
                            style={{ objectFit: "cover" }}
                          />
                        )}
                        <div>
                          <Card.Title className="fw-bold mb-0">{edu.degree}</Card.Title>
                          <Card.Subtitle className="text-muted">{edu.school}</Card.Subtitle>
                        </div>
                      </div>

                      <Card.Text>
                        <time className="text-muted" dateTime={edu.year}>
                          {edu.year}
                        </time>
                        {edu.details && <div className="mt-2 small project-desc">{edu.details}</div>}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.article>
              </Col>
            ))}
          </Row>
        </motion.div>

        <div className="d-flex justify-content-center">
          <a
            href={LINKEDIN_COURSES_URL}
            className="btn btn-outline-primary mt-4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more courses on LinkedIn"
          >
            {React.createElement(FaLinkedin as any, { style: { verticalAlign: "middle", marginRight: 6, fontSize: 24 } })}
            View more on LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Courses;

// Ensure this file is treated as a module under --isolatedModules
export {};