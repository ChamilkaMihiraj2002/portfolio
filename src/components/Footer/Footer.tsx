import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <span className={styles.label}>Chamilka Mihiraj Perera</span>
      <span className={styles.text}>
        © {new Date().getFullYear()} All Rights Reserved. Built with React & TypeScript.
      </span>
    </div>
  </footer>
);

export default Footer;
