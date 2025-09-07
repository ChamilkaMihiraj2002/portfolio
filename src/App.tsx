import { useEffect, useState } from 'react';
import './App.css';

import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Courses from "./components/Coursers/Courses";
import TechStack from "./components/TechStak/TechStack";
import Publications from "./components/Publications/Publications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const THEME_KEY = 'site-theme';

  // initialize from localStorage if present, otherwise from OS preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
      return (
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    } catch (e) {
      return false;
    }
  });

  // toggle and persist user choice
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
      } catch (e) {}
      return next;
    });
  };

  // apply document class and meta theme-color whenever theme changes
  useEffect(() => {
    const cls = 'theme-dark';
    const root = document.documentElement;
    if (darkMode) root.classList.add(cls);
    else root.classList.remove(cls);

    // update meta[name="theme-color"] to match --bg variable so browsers use correct color
    try {
      const meta = document.querySelector('meta[name="theme-color"]') || document.createElement('meta');
      (meta as HTMLMetaElement).setAttribute('name', 'theme-color');
      const style = getComputedStyle(root);
      const bg = style.getPropertyValue('--bg') || (darkMode ? '#071028' : '#ffffff');
      (meta as HTMLMetaElement).setAttribute('content', bg.trim());
      if (!document.head.contains(meta)) document.head.appendChild(meta);
    } catch (e) {}
  }, [darkMode]);

  // listen to system changes if the user hasn't manually chosen a theme
  useEffect(() => {
    let mq: MediaQueryList | null = null;
    try {
      mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e: MediaQueryListEvent) => {
        try {
          if (!localStorage.getItem(THEME_KEY)) setDarkMode(e.matches);
        } catch (e) {}
      };
      if (mq.addEventListener) mq.addEventListener('change', handler);
      else if (mq.addListener) mq.addListener(handler as any);
      return () => {
        if (!mq) return;
        if (mq.removeEventListener) mq.removeEventListener('change', handler as any);
        else if (mq.removeListener) mq.removeListener(handler as any);
      };
    } catch (e) {
      return;
    }
  }, []);

  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <Projects />
      <Education />
      <Courses />
      <TechStack />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
