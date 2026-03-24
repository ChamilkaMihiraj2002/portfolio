import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <span className={styles.label}>SYSTEM ARCHITECTURE</span>
      <span className={styles.text}>
        © {new Date().getFullYear()} Chamilka Mihiraj Perera. All logic verified.
      </span>
    </div>
  </footer>
);

export default Footer;
