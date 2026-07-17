import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

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
    year: "2023 - Present",
    details:
      "Currently focused on software engineering, intelligent systems, and data science while maintaining a GPA of 3.57.",
    logoUrl: uomlog,
  },
  {
    degree: "GCE A/L - 3A's District 1st",
    school: "Sri Sangabodhi National College",
    year: "2021 - 2022",
    details:
      "Achieved the highest district rank in GCE A/L examinations with strong performance in advanced-level studies.",
    logoUrl: ssclog,
  },
  {
    degree: "Graphic Design Diploma",
    school: "Thurunu Shakthi (TSVTP)",
    year: "2018 - 2019",
    details: "Built fundamentals in visual systems, composition, and brand-oriented design thinking.",
    logoUrl: vtalog,
  },
  {
    degree: "Human Resource Diploma",
    school: "HCMI",
    year: "2018",
    details: "Studied people operations, communication, and organizational psychology.",
    logoUrl: hcmilog,
  },
  {
    degree: "Information Technology Diploma",
    school: "DIT",
    year: "2018",
    details: "Established early foundations in databases, networking, and algorithmic thinking.",
    logoUrl: ditlogo,
  },
  {
    degree: "GCE O/L - 6A's 2B's C",
    school: "Sri Sangabodhi National College",
    year: "2017 - 2018",
    details: "Completed secondary education with strong academic results across core subjects.",
    logoUrl: ssclog,
  },
];

const Education: React.FC = () => {
  const education = useMemo(() => educationData, []);

  return (
    <section id="education" className="education-section">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Academic Path</span>
            <h2 className="section-title">Education presented as a foundation, not filler.</h2>
            <p className="section-copy">
              The academic and interdisciplinary background shaping how I approach product systems,
              AI engineering, and problem-solving across domains.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaGraduationCap as React.ElementType, {
              "aria-hidden": true,
            })}
          </div>
        </div>

        <div className="edu-grid">
          {education.map((item, index) => (
            <motion.article
              key={`${item.school}-${item.year}-${index}`}
              className="edu-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.65, ease: "easeInOut", delay: index * 0.05 }}
            >
              <div className="edu-head">
                {item.logoUrl && (
                  <img src={item.logoUrl} alt={`${item.school} logo`} className="edu-logo-img" />
                )}

                <div className="edu-copy">
                  <h3 className="edu-title">{item.degree}</h3>
                  <p className="edu-school">{item.school}</p>
                </div>
              </div>

              <p className="edu-details">{item.details}</p>
              <span className="edu-year">{item.year}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
