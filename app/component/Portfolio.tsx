"use client";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import netflix from "../assets/portfolio_images/netflix.png";
import ecommerce from "../assets/portfolio_images/ecommerce.png";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef();
  const secondRef = useRef();
  const isInView = useInView(ref, { once: true });
  const secondIsInView = useInView(secondRef, { once: true });

  return (
    <>
      <section className={styles.section}>
        <h1>
          <span>02.</span>FEATURED WORKS
        </h1>
        <article
          className={styles.article}
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <aside className={styles.aside}>
            <Image
              className={styles.image}
              src={netflix}
              alt="Netflix Login Screen"
              width={600}
            />
          </aside>
          <figure className={styles.figure}>
            <h2>
              <span>2023</span> Netflix Clone
            </h2>
            <p>
              I wanted to challenge myself by recreating Netflix without looking
              at Netflix tutorials on Youtube or Github. My main goal was to
              gain more styling experience as I previously only focused on logic
              code (APIs, State Management, Event handlers, etc). I found
              styling to be an enjoyable yet difficult challenge especially when
              it came to responsive design.
            </p>
            <span className={styles.tech}>React</span>
            <span className={styles.tech}>Styled-Components</span>
            <span className={styles.tech}>Firebase</span>
          </figure>
        </article>
        <article
          className={styles.article}
          ref={secondRef}
          style={{
            transform: secondIsInView ? "none" : "translateX(-200px)",
            opacity: secondIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <aside className={styles.aside}>
            <Image
              className={styles.image}
              src={ecommerce}
              alt="Ecommerce Shop"
              width={600}
            />
          </aside>
          <figure className={styles.figure}>
            <h2>
              <span>2023</span> E-commerce Store
            </h2>
            <p>
              Building this website marked a significant milestone for me as a
              developer. Prior to this project, I completed small but focused
              projects to gain confidence with React. While I did follow a Udemy
              course by John Smilga for styling, I took the initiative to
              independently code the majority of the logic. This project served
              as a stepping stone before tackling personal projects and provided
              important lessons in programming practices and new perspectives on
              coding.
            </p>
            <span className={styles.tech}>React</span>
            <span className={styles.tech}>Styled-Components</span>
            <span className={styles.tech}>Auth-0</span>
          </figure>
        </article>
      </section>
    </>
  );
};

export default Portfolio;
