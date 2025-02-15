import React from 'react'
import styles from './Resume.module.css'

const Resume = () => {
  const resumeUrl = "/src/assets/Resume/Resume.png#toolbar=0&navpanes=0&scrollbar=0&height=480px&width=350px&margin-top=50px";
  const download = "/src/assets/Resume/Resume.png";
  return (
    <section>
      <div className={styles.con}>
      <div className={styles.container}>
        <iframe src={resumeUrl} frameborder='0' className={styles.Resume} style={{ border: "none" }} title="Resume Preview" ></iframe>
      </div>
      <div className={styles.downloadBtn}>
        <a href={download} target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
      </div>
      </section>
  )
}

export default Resume

