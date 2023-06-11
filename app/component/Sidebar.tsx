"use client";
import React from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import { FaTimes } from "react-icons/fa";
import { useMenuContext } from "../context/menu_context";
import ContactLink from "./ContactLink";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import AnimateText from "./animation/AnimateText";

const TbBrightnessUp = dynamic(() =>
  import("react-icons/tb").then((module) => module.TbBrightnessUp)
);

const Sidebar = () => {
  const { toggleSide, closeSideBar } = useMenuContext();
  const { theme, setTheme } = useTheme("light");

  const animationHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <aside
      className={`${
        toggleSide ? `${styles.show_sidebar} ${styles.sidebar}` : styles.sidebar
      }`}
    >
      <div className={styles.sidebar_container}>
        <div className={styles.sidebar_header}>
          <Link href="#home" scroll={false}>
            ||||||||||
          </Link>
          <div className={styles.sidebar_right}>
            <TbBrightnessUp
              className={styles.theme}
              onClick={animationHandler}
            />
            <button
              className={styles.close_btn}
              type="button"
              onClick={closeSideBar}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      </div>

      <ul className={styles.nav_links}>
        <div className={styles.nav_links_content} onClick={closeSideBar}>
          <Link href="/">
            <li>
              <span>01.</span> <AnimateText text="HOME" />
            </li>
          </Link>
          <Link href="/about">
            <li>
              <span>02.</span> <AnimateText text="ABOUT" />
            </li>
          </Link>
          <Link href="/projects">
            <li>
              <span>03.</span> <AnimateText text="PROJECTS" />
            </li>
          </Link>
          <Link href="/projects">
            <li>
              <span>04.</span> <AnimateText text="RESUME" />
            </li>
          </Link>
          <Link href="#portfolio">
            <li>
              <span>05.</span> <AnimateText text="CONTACT" />
            </li>
          </Link>
        </div>
      </ul>
      <div className={styles.social_links}>
        <ContactLink />
      </div>
    </aside>
  );
};

export default Sidebar;
