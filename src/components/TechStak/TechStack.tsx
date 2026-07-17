import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  FaMicrochip,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
} from "react-icons/fa";
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

const categories: SkillCategory[] = [
  {
    title: "Languages",
    icon: React.createElement(FaCode as React.ElementType, { className: "skills-category-icon" }),
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
    icon: React.createElement(FaBrain as React.ElementType, {
      className: "skills-category-icon",
    }),
    skills: [
      { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
      { name: "Ollama", icon: "https://cdn.simpleicons.org/ollama/111827" },
      {
        name: "ComfyUI",
        icon:
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><circle cx='6' cy='6' r='3.5' fill='%23111827'/><circle cx='18' cy='18' r='3.5' fill='%236b7280'/><circle cx='18' cy='6' r='3.5' fill='%23d1d5db'/><path d='M8.5 6h6m3.5 3.5v5M8.5 6.5l6 8' stroke='%239ca3af' stroke-width='1.5'/></svg>",
      },
      { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
      { name: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab/F9AB00" },
      { name: "LLMs", icon: "https://cdn.simpleicons.org/openai/111827" },
    ],
  },
    {
      title: "Frontend",
      icon: React.createElement(FaLaptopCode as React.ElementType, {
        className: "skills-category-icon",
      }),
      skills: [
        { name: "React", icon: "https://skillicons.dev/icons?i=react" },
        { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
        { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
        { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
        { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
        { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
        { name: "Material UI", icon: "https://skillicons.dev/icons?i=materialui" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: React.createElement(FaServer as React.ElementType, {
      className: "skills-category-icon",
    }),
      skills: [
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
        { name: "Django", icon: "https://skillicons.dev/icons?i=django" },
        { name: "NestJS", icon: "https://skillicons.dev/icons?i=nest" },
        { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel" },
        { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
      ],
    },
  {
    title: "Databases",
    icon: React.createElement(FaDatabase as React.ElementType, {
      className: "skills-category-icon",
    }),
    skills: [
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "SQLite", icon: "https://skillicons.dev/icons?i=sqlite" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    ],
  },
  {
    title: "Tools & Hardware",
    icon: React.createElement(FaTools as React.ElementType, {
      className: "skills-category-icon",
    }),
    skills: [
      { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
      { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
      { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
      { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
      { name: "Arduino", icon: "https://skillicons.dev/icons?i=arduino" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

const TechStack: React.FC = () => {
  return (
    <section id="techstack" className="skills-section">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Capabilities</span>
            <h2 className="section-title">A toolkit organized around shipping intelligent systems.</h2>
            <p className="section-copy">
              The stack spans applied AI, interface engineering, backend delivery, databases, and
              the hardware layer where necessary.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaMicrochip as React.ElementType, {
              "aria-hidden": true,
            })}
          </div>
        </div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {categories.map((category) => (
            <motion.article
              key={category.title}
              variants={cardVariants}
              className="skills-category-card"
            >
              <h3 className="skills-category-title">
                {category.icon}
                {category.title}
              </h3>

              <div className="skills-badge-grid">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-badge-item"
                    role="img"
                    aria-label={skill.name}
                  >
                    <img src={skill.icon} alt="" className="skill-icon-img" aria-hidden="true" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
