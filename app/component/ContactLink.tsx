import React from "react";
import dynamic from "next/dynamic";

const AiFillLinkedin = dynamic(() =>
  import("react-icons/ai").then((module) => module.AiFillLinkedin)
);

const AiFillGithub = dynamic(() =>
  import("react-icons/ai").then((module) => module.AiFillGithub)
);
const ContactLink = () => {
  return (
    <ul style={{ listStyle: "none" }}>
      <li>
        <a
          href="https://www.linkedin.com/in/roy-kim-0428b7276/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/rkdemy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </li>
    </ul>
  );
};

export default ContactLink;
