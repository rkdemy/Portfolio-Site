"use client";
import styles from "./Navbar.module.css";
import { IoAppsOutline } from "react-icons/io5";
import Link from "next/link";
import { useMenuContext } from "../context/menu_context";
import ContactLink from "./ContactLink";
import { usePathname } from "next/navigation";

const Navbar = ({ children }) => {
  const { openSideBar } = useMenuContext();
  const pathname = usePathname();

  return (
    <>
      <nav
        className={`${styles.hero_nav_links} ${styles.hero_nav_links_glass}`}
      >
        <div className={styles.hero_nav_content}>
          <div className={styles.hero_nav_logo}>
            <Link href="#home" scroll={false}>
              ||||||||||
            </Link>
          </div>

          <div className={styles.nav_contact_links}>
            <ul>
              <ContactLink />
            </ul>
          </div>
          <button
            type="button"
            className={styles.nav_toggle}
            onClick={openSideBar}
            style={{
              color: pathname === "/about" && "var(--menu-color)",
            }}
          >
            <IoAppsOutline />
          </button>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
