import React from "react";
import Image from "next/image";
import badge from "../assets/hero_images/badge.svg";
import star from "../assets/hero_images/star.svg";
import styles from "./ContactBade.module.css";
import text from "../assets/hero_images/circle_text.svg";

import blurBadge from "../assets/hero_images/blur_load_badge.png";

const ContactBadge = () => {
  return (
    <div className={styles.badge}>
      <div className={styles.imageContainer}>
        <Image
          src={badge}
          blurDataURL={blurBadge.src}
          placeholder="blur"
          alt="Circle piece of paper"
        />
        <div className={styles.textContainer}>
          <Image src={text} alt="get in touch" />
        </div>
        <div className={styles.starContainer}>
          <Image src={star} alt="A black star" />
        </div>
      </div>
    </div>
  );
};

export default ContactBadge;
