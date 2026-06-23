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
    degree: "Mathematics for Machine Learning and Data Science",
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
    degree: "OpenCV - Python",
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
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as any } },
};

const Courses: React.FC = () => {
  const education = useMemo(() => educationData, []);
  const LINKEDIN_COURSES_URL = "https://www.linkedin.com/in/chamilka-mihiraj-perera2002/details/certifications/";

  return (
    <section id="certifications">
      <Container>
        <div className="section-heading">
          <div>
            <span className="section-kicker">Professional Training</span>
            <h2 className="section-title">Certifications & focused courses.</h2>
            <p className="section-copy">
              Specialized coursework and certifications from global institutions in machine learning, engineering, and data science.
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
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="g-3">
            {education.map((edu, idx) => (
              <Col key={`${edu.school}-${edu.degree}-${idx}`} xs={12} sm={6} md={4} lg={3}>
                <motion.article variants={itemVariants as any} className="h-100">
                  <Card className="cert-card border-0">
                    <Card.Body className="p-3 d-flex flex-column h-100">
                      <div className="d-flex align-items-start gap-3 mb-2">
                        {edu.logoUrl && (
                          <img
                            src={edu.logoUrl}
                            alt={`${edu.school} logo`}
                            className="cert-logo"
                          />
                        )}
                        <div>
                          <h3 className="cert-title">{edu.degree}</h3>
                          <span className="cert-school">{edu.school}</span>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <span className="cert-date">{edu.year}</span>
                      </div>
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
            className="btn-ghost-neo mt-4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more certifications on LinkedIn"
          >
            {React.createElement(FaLinkedin as any, { style: { verticalAlign: "middle", marginRight: 6, fontSize: 20 } })}
            Verify Certifications on LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Courses;
