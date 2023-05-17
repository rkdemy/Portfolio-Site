import styles from "./Portfolio.module.css";
import Image from "next/image";
import netflix from "../assets/portfolio_images/netflix.png";
import ecommerce from "../assets/portfolio_images/ecommerce.png";

const Portfolio = () => {
  return (
    <>
      <section className={styles.section}>
        <article className={styles.article}>
          <aside className={styles.aside}>
            <h1>
              <span>02.</span>FEATURED WORKS
            </h1>
            <Image
              className={styles.image}
              src={netflix}
              alt="Netflix Login Screen"
            />
          </aside>
          <figure className={styles.figure}>
            <h2>
              <span>2023</span> Netflix Clone
            </h2>

            <p>
              I wanted to challenge myself by recreating Netflix without looking
              at Netflix tutorials on Youtube or Github. My main goal was to
              gain more styling experience as I previously only focused on logic
              code (APIs, State Management, Event handlers, etc). I found
              styling to be an enjoyable yet difficult challenge especially when
              it came to responsive design.
            </p>
            <span className={styles.tech}>React</span>
            <span className={styles.tech}>Styled-Components</span>
            <span className={styles.tech}>Firebase</span>
          </figure>
        </article>
        <article className={styles.article}>
          <aside className={styles.aside}>
            <Image
              className={styles.image}
              src={ecommerce}
              alt="Ecommerce Shop"
            />
          </aside>
          <figure className={styles.figure}>
            <h2>
              <span>2023</span> E-commerce Store
            </h2>
            <p>
              Building this website marked a significant milestone for me as a
              developer. Prior to this project, I completed small but focused
              projects to gain confidence with React. While I did follow a Udemy
              course by John Smilga for styling, I took the initiative to
              independently code the majority of the logic. This project served
              as a stepping stone before tackling personal projects and provided
              important lessons in programming practices and new perspectives on
              coding.
            </p>
            <span className={styles.tech}>React</span>
            <span className={styles.tech}>Styled-Components</span>
            <span className={styles.tech}>Auth-0</span>
          </figure>
        </article>
      </section>
    </>
  );
};

export default Portfolio;
