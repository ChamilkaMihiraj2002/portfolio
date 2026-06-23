import { Suspense, lazy, useEffect } from "react";
import "./App.css";

import NavBar from "./components/Navbar/Navbar";
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

function App() {
  useEffect(() => {
    try {
      const root = document.documentElement;
      root.style.backgroundColor = "#090e16";
      
      const meta = document.querySelector('meta[name="theme-color"]') || document.createElement("meta");
      (meta as HTMLMetaElement).setAttribute("name", "theme-color");
      (meta as HTMLMetaElement).setAttribute("content", "#090e16");
      if (!document.head.contains(meta)) {
        document.head.appendChild(meta);
      }
    } catch (error) {
      void error;
    }
  }, []);

  return (
    <div className="app-frame">
      {/* Background visual components */}
      <div className="app-grid" aria-hidden="true" />
      <div className="ambient ambient-cyan" aria-hidden="true" />
      <div className="ambient ambient-indigo" aria-hidden="true" />
      <div className="ambient ambient-violet" aria-hidden="true" />

      <NavBar />

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
