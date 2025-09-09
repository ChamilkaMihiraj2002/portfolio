
import  React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaAlipay } from "react-icons/fa";
import volunteeringStyles from './Volunteering.module.css';
import projectStyles from '../Projects/Projects.module.css';

import fitm from "../../images/Volunteering/fitm.jpg";
import images from "../../images/Volunteering/images.jpg";
import logo from "../../images/Volunteering/logo.png";
import rotract from "../../images/Volunteering/rotaract_club_of_university_of_moratuwa_logo.jpg";

const volunteeringData = [
  {
    organization: "IES Research Labs - Faculty of IT University of Moratuwa",
    role: "Firmware Team Member",
    period: "2025 - Present",
    description: "Designing and developing firmware for IoT devices.",
    logoUrl: logo,
  },
  {
    organization: "Sasnaka Sansada Foundation",
    role: "Volunteer",
    period: "2023 - Present",
    description: "Teaching Mathematics and ICT to underprivileged children.",
    logoUrl: images,
  },
  {
    organization: "Rotaract Club of University of Moratuwa",
    role: "Graphic Designer",
    period: "2023 - Present",
    description: "Designing promotional materials for club events and activities.",
    logoUrl: rotract,
  },
  {
    organization: "FIT Moments",
    role: "Creative pillar designer ",
    period: "2023 - Present",
    description: "Designing creative content for social media and events.",
    logoUrl: fitm,
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


const Volunteering: React.FC = () => (
  <section className={volunteeringStyles.volunteeringSection} id="volunteering">
    <Container>
      <header className="d-flex align-items-center justify-content-between mb-4">
        <h2 className={volunteeringStyles.title}>Volunteering</h2>
        {React.createElement(FaAlipay as any, {
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
          {volunteeringData.map((item, idx) => (
            <Col key={item.organization + idx} xs={12} md={6} lg={4}>
              <motion.article variants={itemVariants} className="h-100">
                <Card className={`h-100 shadow-sm border-0 ${projectStyles.projectCard}`}>
                  <Card.Body>
                    <div className="d-flex align-items-center mb-2">
                      {item.logoUrl && (
                        <img
                          src={item.logoUrl}
                          alt={`${item.organization} logo`}
                          width={48}
                          height={48}
                          className="me-3 rounded"
                          style={{ objectFit: "cover" }}
                        />
                      )}
                      <div>
                        <Card.Title className="fw-bold mb-0">{item.organization}</Card.Title>
                        <Card.Subtitle className={`${volunteeringStyles.role} card-subtitle`}>{item.role}</Card.Subtitle>
                      </div>
                    </div>
                    <Card.Text>
                      <time className={`${volunteeringStyles.period} volunteeringPeriod`} dateTime={item.period}>
                        {item.period}
                      </time>
                      <div className="mt-2 small project-desc">{item.description}</div>
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

export default Volunteering;
