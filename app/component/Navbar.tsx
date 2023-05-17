"use client";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";

const Navbar = ({ children }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={styles.hero_nav_links}>
        <div className={styles.hero_nav_content}>
          <div className={styles.hero_nav_logo}>||||||||||</div>
          <button type="button" className={styles.nav_toggle}>
            <FaBars className="nav-toggle-circle" />
          </button>
          <ul className={styles.nav_links}>
            <li>
              <a onClick={() => scrollToSection("about")}>
                Bio <span>01</span>
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("portfolio")}>
                Portfolio <span>02</span>
              </a>
            </li>
            <li>
              Resume <span>03</span>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
