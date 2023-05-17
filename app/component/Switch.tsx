"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Switch.module.css";
import Image from "next/image";
import clouds from "../assets/Component 1.png";
import useTheme from "../hooks/useTheme";
import Circle from "./Circle";

const Switch = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0 });
  const [darkMode, setDarkMode] = useTheme(true);

  const containerRef = useRef(null);
  const circleRef = useRef(null);
  var x = window.innerWidth / 2;
  const scale = 0.5; //Handles sensitivity of the circle in relation to the mouse

  const handleMouseMove = throttle((event) => {
    setMouseCoordinates({ x: event.clientX });
  }, 100);

  const animationHandler = () => {
    const anime = setTimeout(() => {
      document
        .querySelector(`.${styles.switch_container}`)
        .classList.toggle(`${styles.collapse}`);

      setDarkMode((prevDarkMode) => {
        const newDarkMode = !prevDarkMode;
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
        return newDarkMode;
      });
    }, 700);

    document
      .querySelector(`.${styles.switch_container}`)
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
    // <div
    //   className={`${styles.switch_container} ${
    //     darkMode ? styles.day : styles.night
    //   } `}
    //   ref={containerRef}
    //   onClick={animationHandler}
    // >
    //   <div className={`${darkMode ? styles.cloud : styles.stars}`}>
    //     {darkMode ? (
    //       <Image src={clouds} alt="clouds" />
    //     ) : (
    //       <svg
    //         viewBox="0 0 106 50"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M25.7784 3.34266C24.842 4.27644 23.6927 4.77716 22.3447 4.8313C23.6927 4.89896 24.8278 5.38615 25.7784 6.31993C26.7149 7.25371 27.1831 8.36342 27.1831 9.66259C27.1831 8.36342 27.6513 7.25371 28.5878 6.31993C29.5243 5.38615 30.6594 4.88543 32.0073 4.8313C30.6594 4.77716 29.5243 4.27644 28.5878 3.34266C27.6513 2.40888 27.1831 1.29917 27.1831 0C27.1831 1.29917 26.7149 2.40888 25.7784 3.34266Z"
    //           fill="white"
    //         />
    //         <path
    //           d="M90.3971 43.2008C89.4606 44.1346 88.3113 44.6353 86.9634 44.6895C88.3113 44.7571 89.4464 45.2443 90.3971 46.1781C91.3335 47.1119 91.8018 48.2216 91.8018 49.5207C91.8018 48.2216 92.27 47.1119 93.2065 46.1781C94.1429 45.2443 95.278 44.7436 96.626 44.6895C95.278 44.6353 94.1429 44.1346 93.2065 43.2008C92.27 42.267 91.8018 41.1573 91.8018 39.8582C91.8018 41.1573 91.3335 42.267 90.3971 43.2008Z"
    //           fill="white"
    //         />
    //         <path
    //           d="M1.71685 19.7887C1.24862 20.2556 0.673969 20.506 0 20.533C0.673969 20.5669 1.24152 20.8104 1.71685 21.2773C2.18508 21.7442 2.4192 22.2991 2.4192 22.9487C2.4192 22.2991 2.65331 21.7442 3.12154 21.2773C3.58977 20.8104 4.15733 20.5601 4.8313 20.533C4.15733 20.506 3.58977 20.2556 3.12154 19.7887C2.65331 19.3218 2.4192 18.767 2.4192 18.1174C2.4192 18.767 2.18508 19.3218 1.71685 19.7887Z"
    //           fill="white"
    //         />
    //         <path
    //           d="M102.57 19.7887C102.102 20.2556 101.527 20.506 100.853 20.533C101.527 20.5669 102.095 20.8104 102.57 21.2773C103.038 21.7442 103.272 22.2991 103.272 22.9487C103.272 22.2991 103.506 21.7442 103.975 21.2773C104.443 20.8104 105.01 20.5601 105.684 20.533C105.01 20.506 104.443 20.2556 103.975 19.7887C103.506 19.3218 103.272 18.767 103.272 18.1174C103.272 18.767 103.038 19.3218 102.57 19.7887Z"
    //           fill="white"
    //         />
    //         <path
    //           d="M26.8267 37.6743C26.5926 37.9077 26.3052 38.0329 25.9683 38.0464C26.3052 38.0634 26.589 38.1852 26.8267 38.4186C27.0608 38.6521 27.1779 38.9295 27.1779 39.2543C27.1779 38.9295 27.2949 38.6521 27.529 38.4186C27.7631 38.1852 28.0469 38.06 28.3839 38.0464C28.0469 38.0329 27.7631 37.9077 27.529 37.6743C27.2949 37.4408 27.1779 37.1634 27.1779 36.8386C27.1779 37.1634 27.0608 37.4408 26.8267 37.6743Z"
    //           fill="white"
    //         />
    //         <path
    //           d="M81.7827 24.3882C81.5486 24.6217 81.2613 24.7468 80.9243 24.7604C81.2613 24.7773 81.5451 24.8991 81.7827 25.1325C82.0169 25.366 82.1339 25.6434 82.1339 25.9682C82.1339 25.6434 82.251 25.366 82.4851 25.1325C82.7192 24.8991 83.003 24.7739 83.34 24.7604C83.003 24.7468 82.7192 24.6217 82.4851 24.3882C82.251 24.1548 82.1339 23.8773 82.1339 23.5526C82.1339 23.8773 82.0169 24.1548 81.7827 24.3882Z"
    //           fill="white"
    //         />
    //         <path
    //           d="M12.7618 47.1508C12.4106 47.5009 11.9796 47.6887 11.4741 47.709C11.9796 47.7344 12.4053 47.9171 12.7618 48.2673C13.1129 48.6174 13.2885 49.0336 13.2885 49.5208C13.2885 49.0336 13.4641 48.6174 13.8153 48.2673C14.1665 47.9171 14.5921 47.7293 15.0976 47.709C14.5921 47.6887 14.1665 47.5009 13.8153 47.1508C13.4641 46.8006 13.2885 46.3845 13.2885 45.8973C13.2885 46.3845 13.1129 46.8006 12.7618 47.1508Z"
    //           fill="white"
    //         />
    //       </svg>
    //     )}
    //   </div>
    //   <div
    //     className={`${styles.circle} ${darkMode ? styles.sun : styles.moon}`}
    //     ref={circleRef}
    //   >
    //     {!darkMode && (
    //       <>
    //         <div></div>
    //         <div></div>
    //         <div></div>
    //       </>
    //     )}
    //   </div>
    <div
      className={styles.switch_container}
      ref={containerRef}
      onClick={animationHandler}
    >
      <div className={styles.circle} ref={circleRef}></div>
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