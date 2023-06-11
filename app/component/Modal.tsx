"use client";
import React from "react";
import styles from "./Modal.module.css";
import { useModalContext } from "../context/modal_context";
import Image from "next/image";
import Netflix from "../assets/portfolio_images/netflix.png";
import Ecommerce from "../assets/portfolio_images/ecommerce.png";
import dynamic from "next/dynamic";
const GrClose = dynamic(() =>
  import("react-icons/gr").then((module) => module.GrClose)
);

const Modal = () => {
  const { store_project, turnOffModal } = useModalContext();

  let imageSource;

  // Determine the correct image source based on the stored project ID
  switch (store_project.id) {
    case "Netflix":
      imageSource = Netflix;
      break;
    case "Ecommerce":
      imageSource = Ecommerce;
      break;
    default:
      imageSource = null;
  }

  return (
    <>
      <div className={styles.backdrop} onClick={turnOffModal} />
      <div className={styles.modal_container}>
        <div className={styles.modal}>
          <aside onClick={turnOffModal}>
            <GrClose />
          </aside>

          {imageSource !== null && (
            <Image
              src={imageSource}
              height={600}
              width={600}
              alt={store_project}
            />
          )}
          <h3>{store_project.title}</h3>
          <button>Live Website</button>
          <button>Github</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
