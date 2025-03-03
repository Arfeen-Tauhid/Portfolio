import React from 'react'
import styles from './Resume.module.css'
import pdf from "../../assets/Resume/Resume.pdf"

const Resume = () => {
  // const resumeUrl = "#toolbar=0&navpanes=0&scrollbar=0&height=480px&width=350px&margin-top=50px";

  return (
    <section>
      <div className={styles.con}>
      <div className={styles.container}>
      <object 
    data={`${pdf}#toolbar=0&navpanes=0&scrollbar=0`} 
    type="application/pdf" 
    className={styles.Resume} 
    style={{ width: "100%", height: "630px", border: "none" }} 
    title="Resume Preview"
>
</object>
      </div>
      <div className={styles.downloadBtn}>
        <a href={pdf} target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
      </div>
      </section>
  )
}

export default Resume

