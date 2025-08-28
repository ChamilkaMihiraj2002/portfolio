// src/components/TechStack.tsx
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import './TechStack.css';

const TechStack: React.FC = () => {
  const skills = [
    // Programming Languages
    { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
    { name: 'C++', icon: 'https://skillicons.dev/icons?i=cpp' },
    { name: 'C', icon: 'https://skillicons.dev/icons?i=c' },
    { name: 'Java', icon: 'https://skillicons.dev/icons?i=java' },
    { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
    { name: 'PHP', icon: 'https://skillicons.dev/icons?i=php' },

    // Frameworks & Libraries
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
    { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
    { name: 'NestJS', icon: 'https://skillicons.dev/icons?i=nest' },
    { name: 'Django', icon: 'https://skillicons.dev/icons?i=django' },
    { name: 'Laravel', icon: 'https://skillicons.dev/icons?i=laravel' },
    { name: 'FastAPI', icon: 'https://skillicons.dev/icons?i=fastapi' },

    // Web
    { name: 'HTML5', icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS3', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'Material UI', icon: 'https://skillicons.dev/icons?i=materialui' },

    // Databases
    { name: 'Postgres', icon: 'https://skillicons.dev/icons?i=postgres' },
    { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
    { name: 'SQLite', icon: 'https://skillicons.dev/icons?i=sqlite' },
    { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },

    // Cloud & DevOps
    { name: 'AWS', icon: 'https://skillicons.dev/icons?i=aws' },
    { name: 'Azure', icon: 'https://skillicons.dev/icons?i=azure' },
    { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
    { name: 'Linux', icon: 'https://skillicons.dev/icons?i=linux' },
    { name: 'Postman', icon: 'https://skillicons.dev/icons?i=postman' },

    // Tools & Design
    { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma' },
    { name: 'Blender', icon: 'https://skillicons.dev/icons?i=blender' },
    { name: 'Arduino', icon: 'https://skillicons.dev/icons?i=arduino' },
    { name: 'Grafana', icon: 'https://skillicons.dev/icons?i=grafana' },
  ];

  return (
    <section id="techstack" className="py-5 bg-secondary bg-opacity-10">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Tech Stack</h2>

        <div className="tech-grid">
          {skills.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ translateY: -6, scale: 1.02 }}
              className="tech-card glass"
              role="img"
              aria-label={s.name}
              tabIndex={0}
            >
              <img src={s.icon} alt="" className="tech-icon" aria-hidden />
              <div className="tech-name">{s.name}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
