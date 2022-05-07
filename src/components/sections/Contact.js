import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import * as styles from "../../styles/components/sections/contact.module.scss"

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contact__heading}>
        <h2 className="heading-underline">Get in touch</h2>
        <p>
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>
      </div>

      <div className={styles.contact__hello}>
        <a href="mailto:marcello.sebastian09@gmail.com">Say Hello!</a>
        <hr />
      </div>

      <div className={styles.contact__details}>
        <div>
          <h4>Contact details</h4>
          <a href="mailto:marcello.sebastian09@gmail.com">
            marcello.sebastian09@gmail.com
          </a>
          <a href="tel:+886909568271">+886 909 568 271</a>
        </div>
        <div>
          <h4>Socials</h4>
          <a href="https://www.linkedin.com/in/marcello-sebastian/">LinkedIn</a>
          <a href="https://github.com/mush-mush-mush">GitHub</a>
        </div>
      </div>

      <div className={styles.contact__background}>
        <div className={styles.contact__backgroundObject1}></div>
        <div className={styles.contact__backgroundObject2}></div>
      </div>
    </section>
  )
}
