import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaMicrochip, FaCode, FaLaptopCode, FaServer, FaDatabase, FaTools, FaBrain } from "react-icons/fa";
import "./TechStack.css";

type Skill = {
  name: string;
  icon: string;
};

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const TechStack: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Languages",
      icon: React.createElement(FaCode as any, { className: "skills-category-icon" }),
      skills: [
        { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
        { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
        { name: "C", icon: "https://skillicons.dev/icons?i=c" },
        { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
        { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
      ],
    },
    {
      title: "AI / Machine Learning",
      icon: React.createElement(FaBrain as any, { className: "skills-category-icon" }),
      skills: [
        { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
        { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
        { name: "Ollama", icon: "https://cdn.simpleicons.org/ollama/ffffff" },
        { name: "ComfyUI", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><circle cx='6' cy='6' r='3.5' fill='%236366f1'/><circle cx='18' cy='18' r='3.5' fill='%2306b6d4'/><circle cx='18' cy='6' r='3.5' fill='%238b5cf6'/><path d='M8.5 6h6m3.5 3.5v5M8.5 6.5l6 8' stroke='%2394a3b8' stroke-width='1.5'/></svg>" },
        { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
        { name: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab/F9AB00" },
        { name: "LLMs", icon: "https://cdn.simpleicons.org/python/3776AB" },
      ],
    },
    {
      title: "Frontend",
      icon: React.createElement(FaLaptopCode as any, { className: "skills-category-icon" }),
      skills: [
        { name: "React", icon: "https://skillicons.dev/icons?i=react" },
        { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
        { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
        { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
        { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
        { name: "Material UI", icon: "https://skillicons.dev/icons?i=materialui" },
      ],
    },
    {
      title: "Backend & APIs",
      icon: React.createElement(FaServer as any, { className: "skills-category-icon" }),
      skills: [
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
        { name: "NestJS", icon: "https://skillicons.dev/icons?i=nest" },
        { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel" },
        { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
      ],
    },
    {
      title: "Databases",
      icon: React.createElement(FaDatabase as any, { className: "skills-category-icon" }),
      skills: [
        { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
        { name: "SQLite", icon: "https://skillicons.dev/icons?i=sqlite" },
        { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      ],
    },
    {
      title: "Tools & Hardware",
      icon: React.createElement(FaTools as any, { className: "skills-category-icon" }),
      skills: [
        { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
        { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
        { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
        { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
        { name: "Arduino", icon: "https://skillicons.dev/icons?i=arduino" },
      ],
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

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section id="techstack">
      <Container>
        <div className="section-heading">
          <div>
            <span className="section-kicker">Core Capabilities</span>
            <h2 className="section-title">Technical expertise & tools.</h2>
            <p className="section-copy">
              Languages, libraries, databases, and hardware integration frameworks I use to engineer robust products.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaMicrochip as any, { "aria-hidden": true })}
          </div>
        </div>

        <motion.div
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Row className="g-4 justify-content-center">
            {categories.map((cat, idx) => (
              <Col key={`${cat.title}-${idx}`} xs={12} md={6} lg={4}>
                <motion.article variants={cardVariants as any} className="h-100">
                  <div className="skills-category-card">
                    <h3 className="skills-category-title">
                      {cat.icon}
                      {cat.title}
                    </h3>
                    <div className="skills-badge-grid">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={`${skill.name}-${sIdx}`}
                          className="skill-badge-item"
                          role="img"
                          aria-label={skill.name}
                        >
                          <img
                            src={skill.icon}
                            alt=""
                            className="skill-icon-img"
                            aria-hidden="true"
                          />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default TechStack;
