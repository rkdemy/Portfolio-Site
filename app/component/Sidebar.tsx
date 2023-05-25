"use client";
import React from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import { FaTimes } from "react-icons/fa";
import { useMenuContext } from "../context/menu_context";

const Sidebar = () => {
  const { toggleSide, closeSideBar } = useMenuContext();

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
          <button
            className={styles.close_btn}
            type="button"
            onClick={closeSideBar}
          >
            <FaTimes />
          </button>
        </div>
      </div>
      <ul className={styles.nav_links}>
        <div className={styles.nav_links_content}>
          <Link href="#about">
            <li>
              Bio <span>01</span>
            </li>
          </Link>
          <Link href="#portfolio">
            <li>
              Portfolio <span>03</span>
            </li>
          </Link>
          <Link href="/project">
            <li>
              Resume <span>04</span>
            </li>
          </Link>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
