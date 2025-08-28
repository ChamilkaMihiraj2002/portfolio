// src/components/Courses.tsx
import React, { useMemo } from "react";
import "./Courses.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

type CourseItem = {
  degree: string;
  school: string;
  year: string;
  details?: string;
  logoUrl?: string;
};

const educationData: CourseItem[] = [
  {
    degree: "BSc. (Hons) in Information Technology and Management",
    school: "University of Moratuwa, Sri Lanka",
    year: "2023 – Present",
  logoUrl: "/education/university-of-moratuwa.svg",
  },
  {
    degree: "GCE A/L - 3A's District 1st | GCE O/L - 6A's 2B's C",
    school: "Sri Sangabodhi National College",
    year: "2018 – 2022",
  logoUrl: "/education/xyz-college.svg",
  },
  {
    degree: "Mathematics for Machine Learning and Data Science",
    school: "DeepLearning.AI",
    year: "2022",
  logoUrl: "/education/xyz-college.svg",
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
      </Container>
    </section>
  );
};

export default Courses;

// Ensure this file is treated as a module under --isolatedModules
export {};