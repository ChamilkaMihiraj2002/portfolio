import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaHandsHelping } from "react-icons/fa";
import volunteeringStyles from './Volunteering.module.css';

import fitm from "../../images/Volunteering/fitm.jpg";
import images from "../../images/Volunteering/images.jpg";
import logo from "../../images/Volunteering/logo.png";
import rotract from "../../images/Volunteering/rotaract_club_of_university_of_moratuwa_logo.jpg";

const volunteeringData = [
  {
    organization: "IES Research Labs - Faculty of IT, UoM",
    role: "Firmware Team Member",
    period: "2025 - Present",
    description: "Designing and developing firmware algorithms and drivers for IoT sensor network setups.",
    logoUrl: logo,
  },
  {
    organization: "Sasnaka Sansada Foundation",
    role: "Volunteer Teacher",
    period: "2023 - Present",
    description: "Teaching Mathematics and ICT topics to underprivileged school children across Sri Lanka.",
    logoUrl: images,
  },
  {
    organization: "Rotaract Club of University of Moratuwa",
    role: "Graphic Designer",
    period: "2023 - Present",
    description: "Creating digital illustration campaigns and brand visual assets for community service events.",
    logoUrl: rotract,
  },
  {
    organization: "FIT Moments - Faculty of IT",
    role: "Creative Pillar Head",
    period: "2023 - Present",
    description: "Overseeing design systems, creative campaigns, and social media layout compositions.",
    logoUrl: fitm,
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Volunteering: React.FC = () => (
  <section className={volunteeringStyles.volunteeringSection} id="volunteering">
    <Container>
      <div className="section-heading">
        <div>
          <span className="section-kicker">Leadership & Influence</span>
          <h2 className="section-title">Volunteering & community impact.</h2>
          <p className="section-copy">
            Community roles where I leverage design, mentorship, and embedded systems to contribute beyond academic environments.
          </p>
        </div>
        <div className="section-icon">
          {React.createElement(FaHandsHelping as any, { "aria-hidden": true })}
        </div>
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <Row className="g-4">
          {volunteeringData.map((item, idx) => (
            <Col key={item.organization + idx} xs={12} md={6} lg={3}>
              <motion.article variants={itemVariants as any} className="h-100">
                <Card className="edu-card border-0 h-100">
                  <Card.Body className={volunteeringStyles.cardBodyReset}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      {item.logoUrl && (
                        <img
                          src={item.logoUrl}
                          alt={`${item.organization} logo`}
                          className="edu-logo-img"
                        />
                      )}
                      <div>
                        <h3 className="edu-title" style={{ fontSize: "1rem" }}>{item.organization}</h3>
                        <span className={volunteeringStyles.role}>{item.role}</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <p className="edu-details" style={{ margin: "0 0 1rem" }}>{item.description}</p>
                      <span className={volunteeringStyles.period}>{item.period}</span>
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

export default Volunteering;
