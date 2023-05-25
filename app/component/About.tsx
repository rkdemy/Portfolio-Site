import Image from "next/image";
import front_end from "../assets/hero_images/front-end.png";
import cat from "../assets/hero_images/cat.png";
import flower from "../assets/hero_images/flower.jpg";
import gym from "../assets/hero_images/gym.png";
import fashion from "../assets/hero_images/fashion.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.about_content}>
          <h2>
            <span>01.</span>WHO AM I?
          </h2>
          <p>
            I’m Roy Kim a student attending WSU diving into
            <Image src={front_end} alt="" className={`${styles.pill_image} ${styles.front_end}`} />
            Front-End Development. I discovered a
            <Image src={cat} alt="" className={styles.pill_image} />
            passion for web development which began my love affair with ReactJS.
            My goal? To build stunning websites that are both
            <Image src={flower} alt="" className={styles.pill_image} />
            aesthetically pleasing and functional, all the while surrounded by
            awesome people. But, it’s not all about coding and pixels! I also
            like to explore
            <Image src={fashion} alt="" className={styles.pill_image} />
            fashion with friends or
            <Image src={gym} alt="" className={styles.pill_image} />
            workout in my backyard.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
