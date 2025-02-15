import React from "react";
import m1 from "../../assets/projects/theplanet.png"
import m2 from "../../assets/projects/zajno.png"
import m3 from "../../assets/projects/Stop-Watch.png"
import styles from "./ProjectCard.module.css";


export const ProjectCard = () => {
  return (
    <section className={styles.coo}>
    <div className={styles.container}>
      <img src={m1} alt="Image Of The Planet" className={styles.image}/>
      <h3 className={styles.title}>The Planet</h3>
      <p className={styles.description}>This project is made to learn the latest three.js features by building a website. I use the scroll function on this website. When you scroll your mouse wheel (in any direction), the planets move in a clockwise direction.</p>
      <ul className={styles.skills}>
      <li className={styles.skill}>Three.js</li>
      </ul>
      <div className={styles.links}>
        <a href="https://theplanetthreejs.vercel.app" className={styles.link}>
          Demo
        </a>
        <a href="https://github.com/Arfeen-Tauhid/The-Planet-1.git" className={styles.link}>
          Source
        </a>
      </div>
    </div>
    <div className={styles.container}>
      <img src={m2} alt="Image Of The Planet" className={styles.image}/>
      <h3 className={styles.title}>Zajno</h3>
      <p className={styles.description}>This is a project made to learn the latest three.js features by building an Website Clone Zajno.</p>
      <ul className={styles.skills}>
      <li className={styles.skill}>Three.js</li>
      </ul>
      <div className={styles.links}>
        <a href="https://zajno-two.vercel.app" className={styles.link}>
          Demo
        </a>
        <a href="https://github.com/Arfeen-Tauhid/Zajno.git" className={styles.link}>
          Source
        </a>
      </div>
    </div>
    <div className={styles.container}>
      <img src={m3} alt="Image Of Stop-Watch" className={styles.image}/>
      <h3 className={styles.title}>Stop-Watch</h3>
      <p className={styles.description}>This is a project made to learn how to make functions in javascript and how function work.</p>
      <ul className={styles.skills}>
      <li className={styles.skill}>HTML</li>
      <li className={styles.skill}>CSS</li>
      <li className={styles.skill}>Javascript</li>
      </ul>
      <div className={styles.links}>
        <a href="https://stop-watch-git-main-arfeen-tauhids-projects.vercel.app" className={styles.link}>
          Demo
        </a>
        <a href="https://github.com/Arfeen-Tauhid/StopWatch.git" className={styles.link}>
          Source
        </a>
      </div>
    </div>
    </section>
  );
};

export default ProjectCard