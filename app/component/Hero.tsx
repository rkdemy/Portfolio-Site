import styles from "./Hero.module.css";
import ContactAnimate from "./ContactAnimate";
import Switch from "./Switch";

const Hero = () => {
  return (
    <>
      <div className={styles.hero_container}>
        <div className={styles.hero_container__content}>
          <div className={styles.hero_intro}>Hi, my name is</div>
          <div className={styles.hero_name}>
            R<Switch />Y
          </div>
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
