// src/components/Publications.tsx
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaMedium } from "react-icons/fa";
import styles from "./Publications.module.css";
import { publications, Publication } from "../../data/publications";

const cardVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const Publications: React.FC = () => {
  const MEDIUM_URL = "https://medium.com/@chamilkaperera5";

  return (
    <section id="publications" className="py-5">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Publications</h2>

        <div className={styles.grid}>
          {publications.map((pub: Publication, idx: number) => (
            <motion.article
              key={pub.id}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={cardVariant}
              transition={{ delay: idx * 0.08, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              role="article"
              aria-labelledby={`${pub.id}-title`}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={pub.image} 
                  alt={pub.title}
                  className={styles.image}
                />
              </div>
              
              <div className={styles.content}>
                <h3 id={`${pub.id}-title`} className={styles.title}>
                  {pub.link ? (
                    <a
                      className={styles.link}
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>

                <p className={styles.description}>{pub.description}</p>

                <div className={styles.meta}>
                  {pub.venue && <span>{pub.venue}</span>}
                  {pub.year && (
                    <span aria-label="year published">{pub.year}</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="d-flex justify-content-center">
                  <a
                    href={MEDIUM_URL}
                    className="btn btn-outline-primary mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View more courses on LinkedIn"
                  >
                    {React.createElement(FaMedium as any, { style: { verticalAlign: "middle", marginRight: 6, fontSize: 24 } })}
                    View more on Medium
                  </a>
                </div>
      </Container>
    </section>
  );
};

export default Publications;
