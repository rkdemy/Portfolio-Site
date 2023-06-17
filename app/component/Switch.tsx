"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Switch.module.css";
import { useTheme } from "next-themes";

const Switch = () => {
  //Themes
  const { theme, setTheme } = useTheme("light");
  //Find mouse location
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0 });

  const containerRef = useRef(null);
  const circleRef = useRef(null);

  if (typeof window !== "undefined") {
    var x = window.innerWidth / 2;
  }

  const scale = 0.5; //Handles sensitivity of the circle in relation to the mouse

  const handleMouseMove = throttle((event) => {
    setMouseCoordinates({ x: event.clientX });
  }, 100);

  const animationHandler = () => {
    const anime = setTimeout(() => {
      document
        .querySelector(`.${styles.switch_container}`)!
        .classList.toggle(`${styles.collapse}`);

      theme === "light" ? setTheme("dark") : setTheme("light");
    }, 700);

    document
      .querySelector(`.${styles.switch_container}`)!
      .classList.toggle(`${styles.collapse}`);

    return () => {
      clearTimeout(anime);
    };
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const boundaryWidth =
      (containerRef.current.clientWidth - circleRef.current.clientWidth) / 2;

    const boundaryHeight =
      (containerRef.current.clientHeight - circleRef.current.clientHeight) / 2;

    const translateX = -Math.max(
      Math.min(
        (mouseCoordinates.x - x) * scale,
        boundaryWidth - boundaryHeight
      ),
      -boundaryWidth + boundaryHeight
    );

    circleRef.current.style.transform = `translateX(${translateX}px)`;
  }, [mouseCoordinates]);

  return (
    <div
      className={styles.switch_container}
      ref={containerRef}
      onClick={animationHandler}
    >
      <span className={styles.circle} ref={circleRef}></span>
    </div>
  );
};

function throttle(func, delay) {
  let timeoutId;
  let lastExecTime = -Infinity;
  return function (...args) {
    const currentTime = Date.now();
    const timeSinceLastExec = currentTime - lastExecTime;

    if (timeSinceLastExec >= delay) {
      lastExecTime = currentTime;
      func.apply(this, args);
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastExecTime = currentTime;
        func.apply(this, args);
      }, delay - timeSinceLastExec);
    }
  };
}
export default Switch;
