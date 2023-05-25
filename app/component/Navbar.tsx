"use client";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useMenuContext } from "../context/menu_context";
import ContactLink from "./ContactLink";

const Navbar = ({ children }) => {
  const { openSideBar } = useMenuContext();

  return (
    <>
      <nav className={styles.hero_nav_links}>
        <div className={styles.hero_nav_content}>
          <div className={styles.hero_nav_logo}>
            <Link href="#home" scroll={false}>
              ||||||||||
            </Link>
          </div>
          <button
            type="button"
            className={styles.nav_toggle}
            onClick={openSideBar}
          >
            <FaBars />
          </button>
          <div className={styles.nav_contact_links}>
            <p>roykdemy@gmail.com</p>
          </div>
          <div className={styles.nav_contact_links}>
            <ul>
              <ContactLink />
            </ul>
          </div>
          <ul className={styles.nav_links}>
            <li>
              <Link href="#about">Bio</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/project">Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
