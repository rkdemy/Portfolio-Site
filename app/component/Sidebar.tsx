"use client";
import React from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import { FaTimes } from "react-icons/fa";
import { useMenuContext } from "../context/menu_context";

const Sidebar = () => {
  const { toggleSide, closeSideBar } = useMenuContext();

  return (
    <div className={`${toggleSide ? styles.show_sidebar : styles.sidebar}`}>
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
      <ul className={styles.nav_links}>
        <div className={styles.nav_links_content}>
          <Link href="#about">
            <li>
              Bio <span>01</span>
            </li>
          </Link>
          <Link href="#skills">
            <li>
              Skills <span>02</span>
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
    </div>
  );
};

export default Sidebar;
