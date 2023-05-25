import styles from "./Hero.module.css";
import ContactAnimate from "./ContactAnimate";
import Switch from "./Switch";
import Image from "next/image";
import underline from "../assets/underline.png";
import highlight from "../assets/highlight.svg";
import good from "../assets/goodDay.png";

const Hero = () => {
  return (
    <>
      <div className={styles.hero_container}>
        <div className={styles.hero_container__content}>
          <div className={styles.hero_intro}>Hi, my name is</div>
          <span>
            <Image src={underline} className={styles.underline} />
          </span>

          <div className={styles.hero_name}>
            R<Switch />Y
            <span>
              <Image src={highlight} className={styles.highlight_1} />
            </span>
          </div>
          <span>
            <Image src={good} className={styles.highlight_2} />
          </span>
        </div>
        <div className={styles.contact}>
          <div className={styles.contact_content}>
            <div className={styles.hero_desc}>
              Born in Sydney, Australia. I specialize in Front-End development
              with general Full-Stack knowledge.
            </div>
            <ContactAnimate />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
