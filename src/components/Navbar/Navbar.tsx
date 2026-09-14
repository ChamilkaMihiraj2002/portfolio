import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#techstack", label: "Skills" },
    { href: "#publications", label: "Writing" },
];
const NavBar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("#home");
    const toggleRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [isOpen]);
    useEffect(() => {
        const onScroll = () => {
            const sections = [...navItems, { href: "#contact" }];
            let current = "#home";
            sections.forEach(item => {
                const section = document.getElementById(item.href.slice(1));
                if (section && section.getBoundingClientRect().top <= 160)
                    current = item.href;
            });
            setActive(current);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (<nav className="site-nav" aria-label="Primary">
      <div className="site-nav-inner">
        <a href="#home" className="site-mark" aria-label="Chamilka, home" onClick={() => setIsOpen(false)}><span className="site-monogram">c<span>m</span><i>.</i></span><span className="site-mark-name">chamilka<span>mihiraj.</span></span></a>

        <div id="site-nav-menu" className={`site-nav-links ${isOpen ? "site-nav-links-open" : ""}`}>
          {navItems.map(item => <a key={item.href} href={item.href} aria-current={active === item.href ? "location" : undefined} className="site-nav-link" onClick={() => setIsOpen(false)}>{item.label}</a>)}
          <a href="#contact" className="nav-contact" onClick={() => setIsOpen(false)}>Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
        <div className="site-nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {theme === "dark" ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></> : <path d="M20.9 13a9 9 0 0 1-9.9-9.9A9 9 0 1 0 20.9 13Z" />}
            </svg>
          </button>
        <button ref={toggleRef} type="button" className="site-nav-toggle" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="site-nav-menu" onClick={() => setIsOpen(!isOpen)}><span className={isOpen ? "menu-open" : ""}/><span className={isOpen ? "menu-open" : ""}/></button>
        </div>
      </div>
    </nav>);
};
export default NavBar;
