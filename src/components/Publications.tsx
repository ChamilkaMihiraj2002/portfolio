// src/components/Publications.tsx
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./Publications.module.css";
import { publications, Publication } from "../data/publications";

const cardVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const Publications: React.FC = () => {
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

              <div className={styles.meta}>
                {pub.venue && <span>{pub.venue}</span>}
                {pub.year && (
                  <span aria-label="year published">{pub.year}</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Publications;
