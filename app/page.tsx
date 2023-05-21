import styles from "./page.module.css";
import Link from "next/link";
import Hero from "./component/Hero";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Skills from "./component/Skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} id="home">
        <Hero />
      </section>

      <section className={styles.about} id="about">
        <About />
      </section>

      <section className={styles.skills} id="skills">
        <Skills />
      </section>
      <section className={styles.portfolio} id="portfolio">
        <Portfolio />
      </section>
      <section className={styles.contact} id="contact">
        <Contact />
      </section>
    </main>
  );
}
