"use client";
import styles from "./About.module.css";
import Image from "next/image";
import general from "../assets/about_images/Blur_General.png";
import GeneralSVG from "../assets/about_images/General.svg";

import smile from "../assets/about_images/smile.png";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div className={styles.about} ref={ref}>
      <div className={styles.about_container}>
        <h1
          style={{
            opacity: isInView ? 1 : 0,
            animationDelay: "2s",
            transform: isInView ? "translateY(0)" : "translateY(200px)",
            transition: "all 0.3s linear",
          }}
        >
          I'm a React developer from Sydney, Aus.
        </h1>
        <Image
          src={GeneralSVG}
          blurDataURL={general.src}
          className={styles.turtle}
          placeholder="blur"
          alt="A statue of Yi Sun-Sin"
        />
        <div
          className={styles.glow}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.3s linear",
          }}
        ></div>
      </div>
      <aside className={`${styles.about_aside} ${styles.about_aside_1}`}>
        <div
          className={styles.about_block}
          style={{
            opacity: isInView ? 1 : 0,
            animationDelay: "2s",
            transform: isInView ? "translateY(0)" : "translateY(200px)",
            transition: "all 0.3s linear",
          }}
        >
          <p>
            I'm a front-end web developer. My goal? To build stunning websites
            that are both aesthetically pleasing and functional, all the while
            surrounded by awesome people.
          </p>
          <Image src={smile} />
        </div>
      </aside>
      <aside className={`${styles.about_aside} ${styles.about_aside_2}`}>
        <div
          className={styles.about_block}
          style={{
            opacity: isInView ? 1 : 0,
            animationDelay: "2s",
            transform: isInView ? "translateY(0)" : "translateY(200px)",
            transition: "all 0.3s linear",
          }}
        >
          <Image src={smile} />
          <p>
            But, it's not all about coding and pixels! I also like to explore
            fashion with friends or workout in my backyard.
          </p>
        </div>
      </aside>
    </div>
  );
};

export default About;
