import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLinkedin } from "react-icons/fa";
import "./Courses.css";

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

const courseData: CourseItem[] = [
  { degree: "Machine Learning Specialization", school: "DeepLearning.AI", year: "2025 - August", logoUrl: dpl },
  { degree: "Mathematics for Machine Learning and Data Science", school: "DeepLearning.AI", year: "2025 - April", logoUrl: dpl },
  { degree: "Python Specialization", school: "University of Michigan", year: "2025 - March", logoUrl: um },
  { degree: "Version Control", school: "Meta", year: "2024 - May", logoUrl: meta },
  { degree: "Data Analysis Using Python", school: "IBM", year: "2024 - July", logoUrl: ibm },
  { degree: "Open Source Foundations", school: "IBM", year: "2024 - September", logoUrl: ibm },
  { degree: "OpenCV - Python", school: "OpenCV University", year: "2024 - October", logoUrl: opeanCv },
  { degree: "AI/ML Engineer - Stage I", school: "SLIIT", year: "2023 - July", logoUrl: sliit },
  { degree: "Python for Data Science", school: "IBM", year: "2023 - May", logoUrl: ibm },
  { degree: "Internet of Things (IoT)", school: "Cisco Network Academy", year: "2023 - June", logoUrl: cisco },
  { degree: "Data Science Methodologies", school: "IBM", year: "2023 - May", logoUrl: ibm },
  { degree: "Cybersecurity", school: "Cisco Network Academy", year: "2023 - May", logoUrl: cisco },
];

const Courses: React.FC = () => {
  const courses = useMemo(() => courseData, []);
  const linkedInCoursesUrl =
    "https://www.linkedin.com/in/chamilka-mihiraj-perera2002/details/certifications/";

  return (
    <section id="certifications" className="courses-section">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Continuous Learning</span>
            <h2 className="section-title">Certifications arranged as focused depth, not a badge wall.</h2>
            <p className="section-copy">
              Structured learning across machine learning, Python, DevOps, data science, and
              platform fundamentals from globally recognized programs.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaGraduationCap as React.ElementType, {
              "aria-hidden": true,
            })}
          </div>
        </div>

        <div className="cert-grid">
          {courses.map((course, index) => (
            <motion.article
              key={`${course.school}-${course.degree}-${index}`}
              className="cert-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.03 }}
            >
              <div className="cert-head">
                {course.logoUrl && (
                  <img src={course.logoUrl} alt={`${course.school} logo`} className="cert-logo" />
                )}

                <div>
                  <h3 className="cert-title">{course.degree}</h3>
                  <p className="cert-school">{course.school}</p>
                </div>
              </div>

              <span className="cert-date">{course.year}</span>
            </motion.article>
          ))}
        </div>

        <a
          href={linkedInCoursesUrl}
          className="courses-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View more certifications on LinkedIn"
        >
          {React.createElement(FaLinkedin as React.ElementType, {
            "aria-hidden": true,
          })}
          Verify certifications on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Courses;
