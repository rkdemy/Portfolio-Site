import styles from "./page.module.css";
import Hero from "./component/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} id="home">
        <Hero />
      </section>
    </main>
  );
}
