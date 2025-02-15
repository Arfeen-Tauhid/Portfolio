import React from "react";

import styles from "./Education.module.css";
import m1 from '../../assets/skills/html.png'
import m2 from '../../assets/skills/css.png'
import m3 from '../../assets/skills/react.png'
import m4 from '../../assets/skills/node.png'
import m5 from '../../assets/skills/java.png'
import m6 from '../../assets/skills/mongodb.png'
import m7 from '../../assets/skills/figma.png'
import m8 from '../../assets/skills/java-script.png'
import imageS from "../../assets/history/ies.png" 
import imageSr from "../../assets/history/sdv.png" 


export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Education , Coding Language And Frameworks</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={m1} alt="HTML" />
                </div>
                <p>HTML</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={m2} alt="CSS" />
                </div>
                <p>CSS</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={m3} alt="React" />
                </div>
                <p>React</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={m4} alt="Node" />
                </div>
                <p>Node</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={m5} alt="JAVA" />
                </div>
                <p>JAVA</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={m6} alt="MongoDB" />
                </div>
                <p>MongoDB</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={m7} alt="Figma" />
                </div>
                <p>Figma</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={m8} alt="java-script" />
                </div>
                <p>Javascript</p>
              </div>
        </div>
        <ul className={styles.history}>
              <li className={styles.historyItem}>
                <img
                  src={imageS}
                  alt="Logo"
                />
                <div className={styles.historyItemDetails}>
                  <h3>B-Tech  Computer Science </h3>
                  <p>IES University , Bhopal , MP</p>
                  <p>Sept, 2022 - Present</p>
                  <ul>
                    <li>CURRENT CGPA : 8.04</li>
                  </ul>
                </div>
              </li>
              <li className={styles.historyItem}>
                <img
                  src={imageSr}
                  alt="Logo"
                />
                <div className={styles.historyItemDetails}>
                  <h3>12th</h3>
                  <p>Sadhana Devi Vidyapith , Samastipur , Bihar</p>
                  <p>June, 2019 - March, 2021</p>
                  <ul>
                    <li>Percentage : 80.8</li>
                  </ul>
                </div>
              </li>
              <li className={styles.historyItem}>
                <img
                  src={imageSr}
                  alt="Logo"
                />
                <div className={styles.historyItemDetails}>
                  <h3>10th</h3>
                  <p>Sadhana Devi Vidyapith , Samastipur , Bihar</p>
                  <p>March, 2018 - May, 2019</p>
                  <ul>
                    <li>Percentage : 70.8</li>
                  </ul>
                </div>
              </li>
        </ul>
      </div>
    </section>
  );
};
export default Experience