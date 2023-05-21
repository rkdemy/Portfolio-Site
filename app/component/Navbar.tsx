"use client";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useMenuContext } from "../context/menu_context";

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
          <ul className={styles.nav_links}>
            <li>
              <Link href="#about">
                Bio <span>01</span>
              </Link>
            </li>
            <li>
              <Link href="#skills">
                Skills <span>02</span>
              </Link>
            </li>
            <li>
              <Link href="#portfolio">
                Portfolio <span>03</span>
              </Link>
            </li>
            <li>
              <Link href="/project">
                Resume <span>04</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
