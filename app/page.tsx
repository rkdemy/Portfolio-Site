import styles from "./page.module.css";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} id="home">
        <Hero />
      </section>
      <section className={styles.portfolio} id="portfolio">
        <Projects />
      </section>
      <section className={styles.about} id="about">
        <About />
      </section>
      <section className={styles.skills} id="skills">
        <Skills />
      </section>
    </main>
  );
}
