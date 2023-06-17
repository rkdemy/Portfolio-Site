"use client";
import React, { useRef } from "react";
import styles from "./Skills.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import underline from "../assets/skills_images/Underline.png";
import blurBall from "../assets/skills_images/energyball.png";
import ball from "../assets/skills_images/energyball.svg";
import { motion, useInView } from "framer-motion";
import venusBlur from "../assets/skills_images/VenusDeMilo.png";
import Venus from "../assets/skills_images/VenusDeMilo.svg";

// Dynamic imports for the React icons
const AiFillHtml5 = dynamic(() =>
  import("react-icons/ai").then((module) => module.AiFillHtml5)
);
const DiCss3 = dynamic(() =>
  import("react-icons/di").then((module) => module.DiCss3)
);
const SiJavascript = dynamic(() =>
  import("react-icons/si").then((module) => module.SiJavascript)
);
const DiReact = dynamic(() =>
  import("react-icons/di").then((module) => module.DiReact)
);
const SiNextdotjs = dynamic(() =>
  import("react-icons/si").then((module) => module.SiNextdotjs)
);
const SiTypescript = dynamic(() =>
  import("react-icons/si").then((module) => module.SiTypescript)
);
const AiFillGithub = dynamic(() =>
  import("react-icons/ai").then((module) => module.AiFillGithub)
);
const SiFirebase = dynamic(() =>
  import("react-icons/si").then((module) => module.SiFirebase)
);
const SiAuth0 = dynamic(() =>
  import("react-icons/si").then((module) => module.SiAuth0)
);
const SiFigma = dynamic(() =>
  import("react-icons/si").then((module) => module.SiFigma)
);
const SiStyledcomponents = dynamic(() =>
  import("react-icons/si").then((module) => module.SiStyledcomponents)
);
const SiPrisma = dynamic(() =>
  import("react-icons/si").then((module) => module.SiPrisma)
);

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 6,
        ease: "linear",
      },
    },
  },
};

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const ballAnimate = {
    opacity: isInView ? 1 : 0,
    zIndex: 100,
    transform: isInView ? "translateY(0)" : "translateX(200px)",
    transition: "all 1s linear",
  };

  const ballAnimate2 = {
    opacity: isInView ? 1 : 0,
    zIndex: 100,
    transform: isInView ? "translateY(0)" : "translateX(-200px)",
    transition: "all 1s linear",
  };

  return (
    <div className={styles.skills_container}>
      <div className={styles.marquee}>
        <motion.div
          className={styles.track}
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
            REACT - NEXT - FIGMA - AUTH0 - FIREBASE - GITHUB - HTML - CSS -
            STYLED COMPONENTS - REACT - NEXT - FIGMA - AUTH0 - FIREBASE - GITHUB
            - HTML - CSS - STYLED COMPONENTS - REACT - NEXT - FIGMA - AUTH0 -
            FIREBASE - GITHUB - HTML - CSS - STYLED COMPONENTS - REACT - NEXT -
            FIGMA - AUTH0 - FIREBASE - GITHUB - HTML - CSS - STYLED COMPONENTS -
            REACT - NEXT - FIGMA - AUTH0 - FIREBASE - GITHUB - HTML - CSS -
            STYLED COMPONENTS -
          </h1>
        </motion.div>
      </div>
      <div className={styles.marquee2} ref={ref}>
        <motion.div
          className={styles.track}
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
            REACT - NEXT - FIGMA - AUTH0 - FIREBASE - GITHUB - HTML - CSS -
            STYLED COMPONENTS - REACT - NEXT - FIGMA - AUTH0 - FIREBASE - GITHUB
            - HTML - CSS - STYLED COMPONENTS - REACT - NEXT - FIGMA - AUTH0 -
            FIREBASE - GITHUB - HTML - CSS - STYLED COMPONENTS - REACT - NEXT -
            FIGMA - AUTH0 - FIREBASE - GITHUB - HTML - CSS - STYLED COMPONENTS -
            REACT - NEXT - FIGMA - AUTH0 - FIREBASE - GITHUB - HTML - CSS -
            STYLED COMPONENTS -
          </h1>
        </motion.div>
      </div>
      <div className={styles.skills_content}>
        <div
          className={styles.heading}
          style={{ opacity: isInView ? 1 : 0, transition: "all 0.6s linear" }}
        >
          <h1>Skills & Tech</h1>
          <Image src={underline} />
        </div>
        <div
          className={styles.center_container}
          style={{
            opacity: isInView ? 1 : 0,
            zIndex: 100,
            transform: isInView ? "translateY(0)" : "translateY(200px)",
            transition: "all 1s linear",
          }}
        >
          <Image
            src={Venus}
            blurDataURL={venusBlur.src}
            placeholder="blur"
            alt="Statue of Venus de Milo"
            className={styles.venus}
          />
          <div
            className={styles.glow}
            style={{ opacity: isInView ? 1 : 0, transition: "all 0.6s linear" }}
          ></div>

          <div className={styles.ball_container}>
            <div
              className={styles.ball}
              style={{
                opacity: isInView ? 1 : 0,
                zIndex: 100,
                transform: isInView ? "translateY(0)" : "translateY(200px)",
                transition: "all 1s linear",
              }}
            >
              <Image
                src={ball}
                blurDataURL={blurBall.src}
                width={100}
                height={100}
                placeholder="blur"
                alt="Black and white ball"
              />
              <span>
                <DiReact />
              </span>
            </div>
            <div className={styles.ball}>
              <div className={styles.ball_content} style={ballAnimate}>
                <Image
                  src={ball}
                  blurDataURL={blurBall.src}
                  width={100}
                  height={100}
                  placeholder="blur"
                  alt="Black and white ball"
                />
                <span>
                  <SiNextdotjs />
                </span>
              </div>

              <div className={styles.ball_content} style={ballAnimate2}>
                <Image
                  src={ball}
                  blurDataURL={blurBall.src}
                  width={100}
                  height={100}
                  placeholder="blur"
                  alt="Black and white ball"
                />
                <span>
                  <SiJavascript />
                </span>
              </div>
            </div>
            <div className={styles.ball}>
              <div className={styles.ball_content} style={ballAnimate}>
                <Image
                  src={ball}
                  blurDataURL={blurBall.src}
                  width={100}
                  height={100}
                  placeholder="blur"
                  alt="Black and white ball"
                />
                <span>
                  <AiFillGithub />
                </span>
              </div>
              <div className={styles.ball_content} style={ballAnimate2}>
                <Image
                  src={ball}
                  blurDataURL={blurBall.src}
                  width={100}
                  height={100}
                  placeholder="blur"
                  alt="Black and white ball"
                />
                <span>
                  <SiStyledcomponents />
                </span>
              </div>
            </div>
            <div className={styles.ball}>
              <div className={styles.ball_content} style={ballAnimate}>
                <Image
                  src={ball}
                  blurDataURL={blurBall.src}
                  width={100}
                  height={100}
                  placeholder="blur"
                  alt="Black and white ball"
                />
                <span>
                  <SiFigma />
                </span>
              </div>
              <div className={styles.ball_content} style={ballAnimate2}>
                <Image
                  src={ball}
                  blurDataURL={blurBall.src}
                  width={100}
                  height={100}
                  placeholder="blur"
                  alt="Black and white ball"
                />
                <span>
                  <DiCss3 />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
