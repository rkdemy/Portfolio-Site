"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimateText = ({ text }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.12 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0.2,
      x: 0,
      y: 0,
      transition: {
        stiffness: 100,
      },
    },
  };
  return (
    <div ref={ref}>
      {isInView && (
        <motion.div
          style={{
            overflow: "hidden",
            display: "flex",
            flexWrap: "wrap",
          }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.h2 variants={child} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.h2>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default AnimateText;
