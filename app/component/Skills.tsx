"use client";
import * as React from "react";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "popmotion";
import styles from "./Skills.module.css";
import AnimateText from "./animation/AnimateText";
import dynamic from "next/dynamic";

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

const grid = [
  [
    { logo: <AiFillHtml5 />, name: "HTML5" },
    { logo: <DiCss3 />, name: "CSS3" },
    { logo: <SiJavascript />, name: "JavaScript" },
  ],
  [
    { logo: <DiReact />, name: "React" },
    { logo: <AiFillGithub />, name: "GitHub" },
    { logo: <SiFirebase />, name: "Firebase" },
  ],
  [
    { logo: <SiAuth0 />, name: "Auth0" },
    { logo: <SiFigma />, name: "Figma" },
    { logo: <SiStyledcomponents />, name: "styled-components" },
  ],
];

const size = 10;
const gap = 160;

const Square = ({ content, active, setActive, colIndex, rowIndex, x, y }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        fontSize: "50px",
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: "absolute",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
    >
      {content.logo}
      <div className={styles.skill_name}>{content.name}</div>
    </motion.div>
  );
};

const Skills = () => {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className={styles.skills_container}>
      <div className={styles.skills_content}>
        <h2>
          <AnimateText text="TECHNOLOGIES" />
        </h2>

        <motion.div
          className={styles.skill_motion}
          style={{ width: "100%", height: "100%" }}
        >
          <motion.div
            style={{
              width: (size + gap) * 4 - gap,
              height: (size + gap) * 4 - gap,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              position: "relative",
              perspective: 500,
            }}
          >
            {grid.map((row, rowIndex) =>
              row.map((_item, colIndex) => (
                <Square
                  content={_item}
                  x={x}
                  y={y}
                  active={active}
                  setActive={setActive}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  key={rowIndex + colIndex}
                />
              ))
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
