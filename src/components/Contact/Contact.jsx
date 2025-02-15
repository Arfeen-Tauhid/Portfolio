import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_auy4jq6', 'template_ys0otln', form.current, {publicKey: 'Nd-iAAEfYG9IWkyFp',})
      .then(() => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent to Arfeen Tauhid');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )};
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.ContactsPage}>
              <h1 className={styles.ContactsPageTitle}>Contact Us</h1>
              <span className={styles.ContactsDesc}>Please fill out the form below to Discuss Something Personal to Me</span>
              <form className={styles.ContactsForm} ref={form} onSubmit={sendEmail}>
                    <input className={styles.name} type="text" placeholder='Your Name' name="user_name"/>
                    <input className={styles.email} type="email" placeholder='abc@email.com' name="user_email"/>
                    <textarea className={styles.msg} name="message"  rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className={styles.submitBtn}>Submit</button>
              </form>
      </div>
      <div className={styles.first}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="./assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:arfeentauhid09@gmail.com">arfeentauhid09@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="./assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/arfeen-tauhid">linkedin.com/Arfeen Tauhid</a>
        </li>
        <li className={styles.link}>
          <img src="./assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://www.github.com/Arfeen-Tauhid">github.com/ArfeenTauhid</a>
        </li>
      </ul>
      <ul className={styles.links2}>
      <li className={styles.link}>
      <img
            src="./assets/contact/LeetCode.png"
            alt="LinkedIn icon"
          />
          <a href="https://leetcode.com/u/Arfeen_Tauhid/">LeetCode.com/Arfeen Tauhid</a>
      </li>
      <li className={styles.link}>
      <img
            src="./assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
           height="35px"/>
          <a href="https://codolio.com/profile/Arfeen">Codolio.com/Arfeen Tauhid</a>
      </li>
      </ul>
      </div>
    </footer>
  );
};
export default Contact