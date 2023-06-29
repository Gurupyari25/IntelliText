import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light-theme");
  const [themeIcon, setThemeIcon] = useState("fa-solid fa-bowling-ball");

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setThemeIcon("fa-brands fa-galactic-republic");
    } else {
      setTheme("light-theme");
      setThemeIcon("fa-solid fa-bowling-ball");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className={`${styles.navbar} ${styles.flex}`}>
      <h2>IntelliText</h2>
      <ul className={`${styles.flex}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button className={`${styles.btn}`} onClick={toggleTheme}>
        <i className={themeIcon}></i>
      </button>
    </nav>
  );
}
