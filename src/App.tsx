import { useState } from 'react';
import './App.css';

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <Projects />
      <Education />
      <TechStack />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;
