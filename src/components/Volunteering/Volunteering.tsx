import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping } from "react-icons/fa";
import volunteeringStyles from "./Volunteering.module.css";

import fitm from "../../images/Volunteering/fitm.jpg";
import images from "../../images/Volunteering/images.jpg";
import logo from "../../images/Volunteering/logo.png";
import rotract from "../../images/Volunteering/rotaract_club_of_university_of_moratuwa_logo.jpg";

const volunteeringData = [
  {
    organization: "IES Research Labs - Faculty of IT, UoM",
    role: "Firmware Team Member",
    period: "2025 - Present",
    description:
      "Designing firmware algorithms and drivers for IoT sensor network setups and embedded experimentation.",
    logoUrl: logo,
  },
  {
    organization: "Sasnaka Sansada Foundation",
    role: "Volunteer Teacher",
    period: "2023 - Present",
    description:
      "Teaching mathematics and ICT to underprivileged school children across Sri Lanka.",
    logoUrl: images,
  },
  {
    organization: "Rotaract Club of University of Moratuwa",
    role: "Graphic Designer",
    period: "2023 - Present",
    description:
      "Creating illustration-driven campaigns and visual assets for community service events.",
    logoUrl: rotract,
  },
  {
    organization: "FIT Moments - Faculty of IT",
    role: "Creative Pillar Head",
    period: "2023 - Present",
    description:
      "Leading design systems, creative direction, and campaign composition for student initiatives.",
    logoUrl: fitm,
  },
];

const Volunteering: React.FC = () => (
  <section className={volunteeringStyles.section} id="volunteering">
    <div className="section-shell">
      <div className="section-heading">
        <div>
          <span className="section-kicker">Community Work</span>
          <h2 className="section-title">A quieter record of leadership, teaching, and contribution.</h2>
          <p className="section-copy">
            Work outside the product stack where design, mentorship, embedded systems, and service
            become part of the same broader practice.
          </p>
        </div>
        <div className="section-icon">
          {React.createElement(FaHandsHelping as React.ElementType, {
            "aria-hidden": true,
          })}
        </div>
      </div>

      <div className={volunteeringStyles.grid}>
        {volunteeringData.map((item, index) => (
          <motion.article
            key={`${item.organization}-${index}`}
            className={volunteeringStyles.card}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.05 }}
          >
            <div className={volunteeringStyles.head}>
              <img src={item.logoUrl} alt={`${item.organization} logo`} className={volunteeringStyles.logo} />
              <div>
                <h3 className={volunteeringStyles.organization}>{item.organization}</h3>
                <p className={volunteeringStyles.role}>{item.role}</p>
              </div>
            </div>

            <p className={volunteeringStyles.description}>{item.description}</p>
            <span className={volunteeringStyles.period}>{item.period}</span>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Volunteering;
