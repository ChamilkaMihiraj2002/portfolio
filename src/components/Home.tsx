// src/components/Home.tsx
import React from "react";
import { motion } from "framer-motion";
import logo from "../images/My images/me.jpeg";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

const Home: React.FC = () => {
  return (
    <section id="home" className="vh-100 d-flex justify-content-center align-items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={logo}
          alt="Profile"
          className="rounded-circle img-fluid mb-3"
          style={{ width: 160, height: 160, objectFit: "cover" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />

        <h1 className="fw-bold">Hi, I'm <span className="text-primary">CHAMILKA MIHIRAJ PERERA</span></h1>
        <p className="lead">Software Engineer | Full-Stack Developer | Research Enthusiast | AI/ML Advocate</p>
        <blockquote className="blockquote">
          <p className="mb-0 fs-5 fst-italic quote-fixed">"Coding is beautiful when it writes on logically"</p>
        </blockquote>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <a
            href="https://www.linkedin.com/in/chamilka-mihiraj-perera2002/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="btn btn-outline-primary btn-sm social-btn"
          >
            {React.createElement(FaLinkedin as any, { style: { verticalAlign: "middle", marginRight: 6 } })}
            LinkedIn
          </a>

          <a
            href="https://github.com/ChamilkaMihiraj2002/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="btn btn-outline-dark btn-sm social-btn"
          >
            {React.createElement(FaGithub as any, { style: { verticalAlign: "middle", marginRight: 6 } })}
            GitHub
          </a>

          <a
            href="https://www.kaggle.com/chamilkamihiraj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kaggle"
            className="btn btn-outline-info btn-sm social-btn"
          >
            {React.createElement(SiKaggle as any, { style: { verticalAlign: "middle", marginRight: 6 } })}
            Kaggle
          </a>

          <a
            href="https://medium.com/@chamilkaperera5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="btn btn-outline-secondary btn-sm social-btn"
          >
            {React.createElement(FaMedium as any, { style: { verticalAlign: "middle", marginRight: 6 } })}
            Medium
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
