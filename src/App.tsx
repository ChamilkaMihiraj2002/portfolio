import { Suspense, lazy, useEffect } from "react";
import "./App.css";

import NavBar from "./components/Navbar/Navbar";
import Snowfall from "./components/Effects/Snowfall";
import Home from "./components/Home";

const Projects = lazy(() => import("./components/Projects/Projects"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Education = lazy(() => import("./components/Education/Education"));
const Volunteering = lazy(() => import("./components/Volunteering/Volunteering"));
const Courses = lazy(() => import("./components/Coursers/Courses"));
const TechStack = lazy(() => import("./components/TechStak/TechStack"));
const Publications = lazy(() => import("./components/Publications/Publications"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const CuteRobot = () => (
  <svg viewBox="0 0 100 120" className="robot-svg" aria-hidden="true">
    <ellipse cx="50" cy="114" rx="20" ry="4" fill="#22d3ee" opacity="0.28" />
    <path d="M 24 55 Q 12 68 15 84 Q 18 94 25 84 Q 28 71 30 65" fill="#f8fafc" stroke="#10243a" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M 76 55 Q 88 68 85 84 Q 82 94 75 84 Q 72 71 70 65" fill="#f8fafc" stroke="#10243a" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M 30 55 C 30 55 70 55 70 55 C 80 84 65 104 50 104 C 35 104 20 84 30 55 Z" fill="#f8fafc" stroke="#10243a" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M 32 80 L 43 80 L 43 84 L 57 84 L 57 80 L 68 80" stroke="#22d3ee" strokeWidth="2" fill="none" strokeLinejoin="round" />
    <path d="M 42 45 L 58 45 L 55 55 L 45 55 Z" fill="#d9ecfb" stroke="#10243a" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M 18 28 A 10 10 0 0 0 18 44 L 25 44 L 25 28 Z" fill="#d9ecfb" stroke="#10243a" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M 82 28 A 10 10 0 0 1 82 44 L 75 44 L 75 28 Z" fill="#d9ecfb" stroke="#10243a" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="18" y="10" width="64" height="42" rx="18" fill="#f8fafc" stroke="#10243a" strokeWidth="2.5" />
    <rect x="25" y="16" width="50" height="30" rx="10" fill="#07111f" stroke="#10243a" strokeWidth="2.5" />
    <path d="M 33 29 A 5 5 0 0 1 43 29" stroke="#22d3ee" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    <path d="M 57 29 A 5 5 0 0 1 67 29" stroke="#22d3ee" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    <path d="M 46 36 A 4 4 0 0 0 54 36" fill="#22d3ee" />
  </svg>
);

function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-light");
    root.classList.add("theme-dark");

    try {
      const meta = document.querySelector('meta[name="theme-color"]') || document.createElement("meta");
      (meta as HTMLMetaElement).setAttribute("name", "theme-color");
      const bg = getComputedStyle(root).getPropertyValue("--bg").trim() || "#04111f";
      (meta as HTMLMetaElement).setAttribute("content", bg);
      if (!document.head.contains(meta)) {
        document.head.appendChild(meta);
      }
    } catch (error) {
      void error;
    }
  }, []);

  return (
    <div className="app-frame theme-dark">
      <div className="app-grid" aria-hidden="true" />
      <div className="ambient ambient-cyan" aria-hidden="true" />
      <div className="ambient ambient-amber" aria-hidden="true" />
      <Snowfall />
      <NavBar />

      <div className="robot-container" aria-hidden="true">
        <span className="robot-dialogue">Scanning opportunities...</span>
        <CuteRobot />
      </div>

      <main className="app-main">
        <Home />
        <Suspense fallback={null}>
          <Projects />
          <Experience />
          <Education />
          <Volunteering />
          <Courses />
          <TechStack />
          <Publications />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
