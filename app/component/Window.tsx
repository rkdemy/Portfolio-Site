"use client";
import React from "react";
import styles from "./Window.module.css";
import Image from "next/image";
import { motion, useDragControls } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useModalContext } from "../context/modal_context";

const Window = ({ image, title, id, appRef, num }) => {
  const controls = useDragControls();
  const { toggleModal } = useModalContext();

  return (
    <motion.div
      className={styles.float}
      drag
      dragControls={controls}
      dragConstraints={appRef}
    >
      <div
        className={`${styles.window_container} ${
          num === "2" ? styles.window2 : null
        }`}
      >
        <aside>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
        </aside>
        <div
          className={styles.imageContainer}
          onClick={() => toggleModal(id, title)}
        >
          <Image src={image} alt={title} />
          <div className={styles.link}>
            <FaSearch />
          </div>
        </div>
        <p>{title}</p>
      </div>
    </motion.div>
  );
};

export default Window;
