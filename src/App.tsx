import { useEffect } from 'react';
import './App.css';

import NavBar from "./components/Navbar/Navbar";
import Snowfall from "./components/Effects/Snowfall";
import Home from "./components/Home";
import { Suspense, lazy } from 'react';

// Lazy-load below-the-fold sections to improve initial load
const Projects = lazy(() => import("./components/Projects/Projects"));
const Education = lazy(() => import("./components/Education/Education"));
const Volunteering = lazy(() => import("./components/Volunteering/Volunteering"));
const Courses = lazy(() => import("./components/Coursers/Courses"));
const TechStack = lazy(() => import("./components/TechStak/TechStack"));
const Publications = lazy(() => import("./components/Publications/Publications"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const darkMode = true;

  // apply document class and meta theme-color whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    const darkCls = 'theme-dark';
    const lightCls = 'theme-light';
    root.classList.remove(darkCls, lightCls);
    root.classList.add(darkCls);

    // update meta[name="theme-color"] to match --bg variable so browsers use correct color
    try {
      const meta = document.querySelector('meta[name="theme-color"]') || document.createElement('meta');
      (meta as HTMLMetaElement).setAttribute('name', 'theme-color');
      const style = getComputedStyle(root);
      const bg = style.getPropertyValue('--bg') || '#071028';
      (meta as HTMLMetaElement).setAttribute('content', bg.trim());
      if (!document.head.contains(meta)) document.head.appendChild(meta);
    } catch (e) {}
  }, []);

  const themeClass = "theme-dark";

  return (
    <div className={`app-frame ${themeClass}`}>
      {/* Background animated snow (purely decorative) */}
      <Snowfall />
      <NavBar />
      <main>
        <Home />
        {/* Defer rendering heavy sections until after first paint */}
        <Suspense fallback={null}>
          <Projects />
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
