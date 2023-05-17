import React from "react";
import styles from "./Skills.module.css";
import dynamic from "next/dynamic";

// Dynamic imports for the React icons
const AiFillHtml5 = dynamic(() =>
  import("react-icons/ai").then((module) => module.AiFillHtml5)
);
const DiCss3 = dynamic(() =>
  import("react-icons/di").then((module) => module.DiCss3)
);
const SiJavascript = dynamic(() =>
  import("react-icons/si").then((module) => module.SiJavascript)
);
const DiReact = dynamic(() =>
  import("react-icons/di").then((module) => module.DiReact)
);
const SiNextdotjs = dynamic(() =>
  import("react-icons/si").then((module) => module.SiNextdotjs)
);
const SiTypescript = dynamic(() =>
  import("react-icons/si").then((module) => module.SiTypescript)
);
const AiFillGithub = dynamic(() =>
  import("react-icons/ai").then((module) => module.AiFillGithub)
);
const SiFirebase = dynamic(() =>
  import("react-icons/si").then((module) => module.SiFirebase)
);
const SiAuth0 = dynamic(() =>
  import("react-icons/si").then((module) => module.SiAuth0)
);
const SiFigma = dynamic(() =>
  import("react-icons/si").then((module) => module.SiFigma)
);
const SiStyledcomponents = dynamic(() =>
  import("react-icons/si").then((module) => module.SiStyledcomponents)
);

const Skills = () => {
  return (
    <div className={styles.skills_container}>
      <h2>SKILLS & TOOLS</h2>
      <p>The skills, tools and technologies I've used to create my projects:</p>

      <article className={styles.skills_content}>
        <p>
          <span>
            <AiFillHtml5 />
          </span>
          HTML
        </p>
        <p>
          <span>
            <DiCss3 />
          </span>
          CSS
        </p>
        <p>
          <span>
            <SiJavascript />
          </span>
          JavaScript
        </p>
        <p>
          <span>
            <DiReact />
          </span>
          React
        </p>
        <p>
          <span>
            <AiFillGithub />
          </span>
          GitHub
        </p>
        <p>
          <span>
            <SiFirebase />
          </span>
          Firebase
        </p>
        <p>
          <span>
            <SiAuth0 />
          </span>
          Auth-0
        </p>
        <p>
          <span>
            <SiFigma />
          </span>
          Figma
        </p>
        <p>
          <span>
            <SiStyledcomponents />
          </span>
          styled-components
        </p>
      </article>

      <h4 className={styles.skills_learning}>I'm currently working on:</h4>
      <article className={styles.skills_learning_content}>
        <p>
          <span>
            <SiNextdotjs />
          </span>
          Next.JS
        </p>
        <p>
          <span>
            <SiTypescript />
          </span>
          Typescript
        </p>
      </article>
    </div>
  );
};

export default Skills;
