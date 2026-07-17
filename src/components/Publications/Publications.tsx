import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaMedium } from "react-icons/fa";
import styles from "./Publications.module.css";
import { publications, Publication } from "../../data/publications";

const Publications: React.FC = () => {
  const mediumUrl = "https://medium.com/@chamilkaperera5";

  return (
    <section id="publications" className={styles.section}>
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Writing</span>
            <h2 className="section-title">Technical ideas translated into accessible reading.</h2>
            <p className="section-copy">
              Articles that make systems, tooling, and engineering concepts easier to approach
              without flattening the technical depth behind them.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaBookOpen as React.ElementType, {
              "aria-hidden": true,
            })}
          </div>
        </div>

        <div className={styles.grid}>
          {publications.map((publication: Publication, index: number) => (
            <motion.article
              key={publication.id}
              className={styles.card}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ delay: index * 0.05, duration: 0.6, ease: "easeInOut" }}
            >
              <div className={styles.imageContainer}>
                <img
                  src={publication.image}
                  alt={publication.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>

              <div className={styles.content}>
                <div className={styles.metaTop}>
                  <span>{publication.venue}</span>
                  <span>{publication.year}</span>
                </div>

                <h3 className={styles.title}>
                  {publication.link ? (
                    <a
                      className={styles.link}
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {publication.title}
                    </a>
                  ) : (
                    publication.title
                  )}
                </h3>

                <p className={styles.description}>{publication.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <a
          href={mediumUrl}
          className={styles.moreLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View more articles on Medium"
        >
          {React.createElement(FaMedium as React.ElementType, {
            "aria-hidden": true,
          })}
          Read more on Medium
        </a>
      </div>
    </section>
  );
};

export default Publications;
