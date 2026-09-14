import { Suspense, lazy } from "react";
import "./App.css";
import { MotionConfig } from "framer-motion";
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
    return (<MotionConfig reducedMotion="user"><div className="app-shell">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <NavBar />

      <main id="main-content" className="site-main">
        <Home />

        <div className="content-rhythm">
          <Suspense fallback={null}>
            <Projects />
            <Experience />
            <TechStack />
            <Education />
            <Volunteering />
            <Courses />
            <Publications />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      </main>
    </div></MotionConfig>);
}
export default App;
