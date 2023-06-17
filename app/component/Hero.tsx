"use client";
import styles from "./Hero.module.css";
import Switch from "./Switch";
import Image from "next/image";
import paint from "../assets/hero_section/paint.jpg";
import paint2 from "../assets/hero_section/paint2Compressed.jpg";
import BlurPaint from "../assets/hero_section/blur_paint.png";
import BlurPaint2 from "../assets/hero_section/blur_paint2.png";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TbArrowMoveRight = dynamic(() =>
  import("react-icons/tb").then((module) => module.TbArrowMoveRight)
);

const Hero = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className={styles.hero_container}>
        <div className={styles.hero_container__content}>
          <div className={styles.hero_name}>
            <div
              className={styles.hero_2}
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(150px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.1s linear",
              }}
            >
              R<Switch />Y FRONT
            </div>
            <div
              className={styles.hero_3}
              style={{
                transform: isInView ? "none" : "translateX(-150px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.1s linear",
              }}
            >
              END
              <div className={styles.image_container}>
                <Image
                  src={paint2}
                  blurDataURL={BlurPaint2.src}
                  placeholder="blur"
                  alt="An abstract painting"
                />
              </div>
            </div>
            <div
              className={styles.hero_4}
              style={{
                transform: isInView ? "none" : "translateX(150px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.1s linear",
              }}
            >
              <div style={{ width: "100%" }}>
                <Image
                  src={paint}
                  blurDataURL={BlurPaint.src}
                  placeholder="blur"
                  alt="An abstract painting"
                />
              </div>
              DEVELOPER
            </div>
          </div>
        </div>
        <div>
          <ul
            className={styles.hero_links}
            style={{
              transform: isInView ? "none" : "translateY(150px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.1s linear",
            }}
          >
            <li>
              <Link href="/projects" className={styles.underline}>
                <aside className={styles.arrow}>
                  <TbArrowMoveRight />
                </aside>
                my projects
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.underline}>
                <aside className={styles.arrow}>
                  <TbArrowMoveRight />
                </aside>
                about me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
