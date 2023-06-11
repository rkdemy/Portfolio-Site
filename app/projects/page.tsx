"use client";
import React, { useRef } from "react";
import styles from "./Projects.module.css";
import Window from "../component/Window";
import Netflix from "../assets/portfolio_images/netflix.png";
import Commerce from "../assets/portfolio_images/ecommerce.png";
import AnimateText from "../component/animation/AnimateText";
import Modal from "../component/Modal";
import { useModalContext } from "../context/modal_context";

const Projects = () => {
  const appRef = useRef(null);
  const { toggle_modal, toggleModal } = useModalContext();
  
  return (
    <div className={styles.projects}>
      {toggle_modal && <Modal onClick={toggleModal} />}
      <div className={styles.projects_container} ref={appRef}>
        <div className={styles.projects_header}>
          <h2>
            <span>03.</span>
            <AnimateText text="PROJECTS." />
          </h2>
        </div>
        <Window
          image={Netflix}
          title="Netflix Clone"
          id="Netflix"
          appRef={appRef}
        />
        <Window
          image={Commerce}
          title="Ecommerce Shop"
          id="Ecommerce"
          appRef={appRef}
          num="2"
        />
        <Window
          image={Netflix}
          title="Netflix Clone"
          id="Netflix"
          appRef={appRef}
        />
      </div>
    </div>
  );
};

export default Projects;
