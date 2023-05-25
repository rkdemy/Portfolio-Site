"use client";
import React, { useState } from "react";
import styles from "./ContactAnimate.module.css";
import { righteous } from "../utils/fonts";
import bubble from "../assets/text_bubble.svg";
const colors = ["#7c4dff", "#0091ea", "#ff9100", "#ff1744"];

const ContactAnimate = () => {
  const [pause, setPause] = useState(false);

  const handleMouseEnter = () => {
    setPause(true);
  };

  const handleMouseLeave = () => {
    setPause(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_container_circle}>
        <section className={styles.bubble}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              id="circlePath"
              fill="none"
              d="
                    M 10, 50
                    a 40,40 0 1,1 80,0
                    a 40,40 0 1,1 -80,0
                    "
            />
            <text fontSize="4" fontWeight="400">
              <textPath href="#circlePath">
                CUTE, AMAZING, ULTRA, HYPER, SUPER, DELUXE, PERFECT, BEAUTIFUL,
                INFINITY, STRONG, AWESOME, INVINCIBLE, YES, COOL,
              </textPath>
            </text>
          </svg>
        </section>
      </div>
      <div
        className={`${styles.contact_container_contact} ${
          pause ? styles.pause : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {colors.map((color, index) => (
          <a
            key={index}
            className={`${styles.text_animation}`}
            style={{ color }}
            onClick={() => scrollToSection("contact")}
          >
            contact
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactAnimate;
