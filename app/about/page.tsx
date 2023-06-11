import Image from "next/image";
import roy from "../assets/hero_images/PictureofRoy.jpg";
import styles from "./About.module.css";
import AnimateText from "../component/animation/AnimateText";
import ContactBadge from "../component/ContactBadge";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_container}>
        <div className={styles.about_container_text}>
          <h2>
            <span>02.</span>
            <AnimateText text="WHO AM I" />
          </h2>
          <p>
            My name is Roy Kim a student at WSU. I'm a front-end web developer
            from Sydney. My goal? To build stunning websites that are both
            aesthetically pleasing and functional, all the while surrounded by
            awesome people. <br />
            <br />
            But, it's not all about coding and pixels! I also like to explore
            fashion with friends or workout in my backyard.
          </p>
        </div>
      </div>
      <div className={styles.image_container}>
        <div className={styles.badge}>
          <ContactBadge />
        </div>
        <Image
          src={roy}
          className={styles.avatar_img}
          alt="Black and white image of a young man with glasses"
        />
      </div>
    </div>
  );
};

export default About;
