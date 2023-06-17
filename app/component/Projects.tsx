import React from "react";
import styles from "./Projects.module.css";
import NetflixLogo from "../assets/portfolio_images/netflix_logo.png";
import NotIkea from "../assets/portfolio_images/notikealogo.png";
import Disney from "../assets/portfolio_images/disney.png";
import Card from "./Card";

const Projects = () => {
  return (
    <div className={styles.project}>
      <div className={styles.project_container}>
        <div className={styles.heading}>
          <h1>Portfolio</h1>
          <aside>
            <h4>Here are some notable projects that I've completed.</h4>
            <p>- Click on a card -</p>
          </aside>
        </div>
        <div className={styles.cards}>
          <span className={styles.card_content} key="1">
            <Card
              key="1"
              title="Disney Clone"
              image={Disney}
              tech={["React", "TMDB API", "Firebase"]}
              tag="Disney"
            />
          </span>
          <span className={styles.card_content} key="2">
            <Card
              key="2"
              title="Ecommerce Store"
              image={NotIkea}
              tech={["React", "API", "styled-components"]}
              tag="NOT IKEA"
            />
          </span>

          <span className={styles.card_content} key="3">
            <Card
              key="3"
              title="Netflix Clone"
              image={NetflixLogo}
              tech={["React", "API"]}
              tag="Netflix"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
