import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaMicrochip } from "react-icons/fa";
import "./TechStack.css";

const TechStack: React.FC = () => {
  const skills = [
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
    { name: "C", icon: "https://skillicons.dev/icons?i=c" },
    { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "NestJS", icon: "https://skillicons.dev/icons?i=nest" },
    { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel" },
    { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
    { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
    { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
    { name: "Material UI", icon: "https://skillicons.dev/icons?i=materialui" },
    { name: "Postgres", icon: "https://skillicons.dev/icons?i=postgres" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "SQLite", icon: "https://skillicons.dev/icons?i=sqlite" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
    { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
    { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
    { name: "Arduino", icon: "https://skillicons.dev/icons?i=arduino" },
  ];

  return (
    <section id="techstack" className="py-5">
      <Container>
        <div className="section-heading">
          <div>
            <span className="section-kicker">NEURAL_WEIGHTS</span>
            <h2 className="section-title">Tools I reach for when building.</h2>
            <p className="section-copy">
              Languages, frameworks, databases, and delivery tools behind the products I ship.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaMicrochip as any, { "aria-hidden": true })}
          </div>
        </div>

        <div className="tech-grid">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ translateY: -6, scale: 1.02 }}
              className="tech-card glass"
              role="img"
              aria-label={skill.name}
              tabIndex={0}
            >
              <img src={skill.icon} alt="" className="tech-icon" aria-hidden />
              <div className="tech-name">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
