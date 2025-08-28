// src/components/Home.tsx
import { motion } from "framer-motion";
import logo from "../logo.svg";

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
      </motion.div>
    </section>
  );
};

export default Home;
