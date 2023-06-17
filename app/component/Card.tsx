"use client";
import React, { useState } from "react";
import styles from "./Card.module.css";
import dynamic from "next/dynamic";
import island from "../assets/portfolio_images/island.svg";
import BlurIsland from "../assets/portfolio_images/blurIsland.png";
import foot from "../assets/portfolio_images/digital_front.svg";
import blurFoot from "../assets/portfolio_images/blurDigital_front.png";
import energyballBlur from "../assets/skills_images/energyball.png";
import energyball from "../assets/skills_images/energyball.svg";
import Image from "next/image";

const BsArrowRightCircle = dynamic(() =>
  import("react-icons/bs").then((module) => module.BsArrowRightCircle)
);

interface CardProps {
  key: string;
  title: string;
  image?: string;
  tech: Array<string>;
  tag: string;
}

const Card = ({ key, title, image, tech, tag }: CardProps) => {
  const [flip, setFlip] = useState(false);

  return (
    <div key={key}>
      <div
        className={
          flip ? `${styles.card_flip} ${styles.flip_card}` : styles.flip_card
        }
        onClick={() => setFlip(!flip)}
      >
        <div className={styles.card_inner}>
          <div className={`${styles.card} ${styles.card_front}`}>
            <div className={styles.card_item}>
              <span>{tag}</span>
            </div>
            <div className={styles.card_item2}>
              <Image
                src={island}
                width={380}
                blurDataURL={BlurIsland.src}
                placeholder="blur"
                alt="Floating island with an arch "
              />
              <div className={styles.ball_container}>
                <Image
                  src={energyball}
                  blurDataURL={energyballBlur.src}
                  width={120}
                  height={120}
                  placeholder="blur"
                  alt="Black and white ball"
                  className={styles.ball}
                />
                <span>
                  <Image src={image} />
                </span>
              </div>
              <div className={styles.glow}></div>
            </div>
            <div className={styles.card_item3}>
              <span>{title}</span>
              <span>
                <BsArrowRightCircle />
              </span>
            </div>
          </div>
          <div className={`${styles.card} ${styles.card_back}`}>
            <div className={styles.card_item}>
              {tech.map((item) => (
                <span>{item}</span>
              ))}
            </div>
            <div
              className={styles.card_item2}
              style={{
                transform: flip ? "translateY(0)" : "translateY(200px)",
                transition: "all 1s linear",
              }}
            >
              <Image
                src={foot}
                width={380}
                className={styles.foot}
                blurDataURL={blurFoot.src}
                placeholder="blur"
                alt="Foot with iphone"
              />
              <Image src={image} />
            </div>
            <div className={styles.card_item3}>
              <div className={styles.card_item3_position}>
                <span>{title}</span>
                <span>
                  <BsArrowRightCircle />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
