import React from "react";
import { FaArrowRight, FaArrowDown, FaGithub, FaLinkedin, FaMedium, FaDownload } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import portrait from "../images/My images/me.png";
const socialLinks = [
    { href: "https://github.com/ChamilkaMihiraj2002/", label: "GitHub", icon: FaGithub },
    { href: "https://www.linkedin.com/in/chamilka-mihiraj-perera2002/", label: "LinkedIn", icon: FaLinkedin },
    { href: "https://www.kaggle.com/chamilkamihiraj", label: "Kaggle", icon: SiKaggle },
    { href: "https://medium.com/@chamilkaperera5", label: "Medium", icon: FaMedium },
];
const focusAreas = [
    { number: "01", title: "AI & machine learning", detail: "From experiments to useful intelligence." },
    { number: "02", title: "LLMs & agents", detail: "Grounded answers. Thoughtful automation." },
    { number: "03", title: "Full-stack engineering", detail: "The whole product, from API to interface." },
    { number: "04", title: "Creative automation", detail: "Connecting ideas with ComfyUI workflows." },
];
const Home: React.FC = () => (<section id="home" className="hero-section">
    <div className="hero-wrap">
      <div className="hero-topline"><span><span className="status-dot"/> OPEN TO OPPORTUNITIES</span><span>SRI LANKA · WORKING WORLDWIDE</span></div>
      <div className="hero-main">
        <div className="hero-intro">
          <p className="hero-greeting">Hey there, I’m Chamilka <span aria-hidden="true">✳</span></p>
          <h1 className="hero-title">A curious mind.<br />A builder of<br /><span>intelligent things.</span></h1>
          <p className="hero-summary">AI engineer & full-stack developer turning complex problems into thoughtful digital experiences. Built with purpose. Made for people.</p>
          <div className="hero-actions">
            <a href="#projects" className="hero-cta hero-cta-primary">Explore my work {React.createElement(FaArrowRight as React.ElementType, { "aria-hidden": true })}</a>
            <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download className="hero-cta hero-cta-secondary">Download CV {React.createElement(FaDownload as React.ElementType, { "aria-hidden": true })}</a>
          </div>
          <div className="hero-socials"><span>FIND ME ON</span>{socialLinks.map(({ href, label, icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{React.createElement(icon as React.ElementType, { "aria-hidden": true })}</a>)}</div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-label"><span className="status-dot"/> CHAMILKA MIHIRAJ PERERA</div>
            <img src={portrait} alt="Chamilka Mihiraj Perera sitting on a stool" className="hero-portrait" fetchPriority="high"/>
            <span className="portrait-star" aria-hidden="true">✳</span>
          </div>
          <div className="hero-code" aria-label="Currently exploring agentic AI, retrieval systems, and creative automation">
            <div className="code-top"><span><i /><i /><i /></span><span>always_building.py</span></div>
            <code><span className="code-muted"># curiosity → possibility</span><br /><span className="code-orange">while</span> curious:<br />&nbsp;&nbsp;learn<span className="code-muted">()</span><br />&nbsp;&nbsp;build<span className="code-muted">()</span><br />&nbsp;&nbsp;make_it_matter<span className="code-muted">()</span></code>
            <div className="code-bottom"><span className="status-dot"/> A LITTLE BETTER, EVERY DAY</div>
          </div>
        </div>
      </div>
      <div className="hero-bottom"><p>Currently building AI at <strong>Caslo</strong> <span>↗</span><span className="hero-bottom-divider"/> Studying at <strong>University of Moratuwa</strong></p><a href="#about">A little more about me {React.createElement(FaArrowDown as React.ElementType, { "aria-hidden": true })}</a></div>
      <div id="about" className="practice-strip">{focusAreas.map(area => <a href="#techstack" key={area.number} className="practice-item"><span className="practice-number">{area.number} /</span><h2>{area.title}</h2><p>{area.detail}</p></a>)}</div>
    </div>
  </section>);
export default Home;
