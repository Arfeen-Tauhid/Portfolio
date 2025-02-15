import React from "react";

import styles from "./About.module.css";
import m1 from "../../assets/about/aboutImage.png"
import m2 from "../../assets/about/cursorIcon.png"
import m3 from "../../assets/about/serverIcon.png"
import m4 from "../../assets/about/cursorIcon.png"


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={m1}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={m2} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              {/* <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p> */}
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={m3} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              {/* <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p> */}
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={m4} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Java</h3>
              {/* <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p> */}
            </div>
            </li>
        </ul>
      </div>
    </section>
  );
};
export default About