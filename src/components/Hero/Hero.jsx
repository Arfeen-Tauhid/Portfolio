import React from 'react'
import styles from "./Hero.module.css"
import picture from '../../assets/hero/heroImage.png';
const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Hi , I'm Arfeen Tauhid</h1>
    <p className={styles.discription}>I'm a Full-Stack Developer with 0 Years of Experience using React and Node.js Reach Out to us </p>
    <a href='/resume' className={styles.contactBtn}>Resume</a>
    </div>
    <img src={picture} alt='hero image of me' className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section> 
}

export default Hero;