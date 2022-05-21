import React, { useContext } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { cursorContext } from "../../contexts/cursorContext"

import * as styles from "../../styles/components/sections/contact.module.scss"

export default function Contact() {
  const { cursorChangeHandler } = useContext(cursorContext)
  const { scrollYProgress } = useViewportScroll()

  const buttonXPosition = useTransform(scrollYProgress, [0.8, 1], [-10, -90])

  const bubbleYValue1 = useTransform(scrollYProgress, [0.8, 1], [-100, 0])
  const bubbleYValue2 = useTransform(scrollYProgress, [0.8, 1], [100, 0])

  const contacts = [
    {
      label: "marcello.sebastian09@gmail.com",
      link: "mailto:marcello.sebastian09@gmail.com",
    },
    {
      label: "+886 909 568 271",
      link: "tel:+886909568271",
    },
  ]

  const socials = [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/marcello-sebastian/",
    },
    {
      label: "GitHub",
      link: "https://github.com/mush-mush-mush",
    },
  ]

  return (
    <motion.section
      className={styles.contact}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: [0.6, 0.01, -0.05, 0.95],
        },
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.contact__heading}>
        <h2 className="heading-underline">Get in touch</h2>
        <p>
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>
      </div>

      <div className={styles.contact__hello}>
        <motion.a
          href="mailto:marcello.sebastian09@gmail.com"
          style={{ x: buttonXPosition }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
        >
          Say Hello!
        </motion.a>
        <hr />
      </div>

      <div className={styles.contact__details}>
        <div>
          <h4>Contact details</h4>
          {contacts.map(contact => (
            <a
              href={contact.link}
              onMouseEnter={() => cursorChangeHandler("cursor--on-link-over")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              {contact.label}
            </a>
          ))}
        </div>
        <div>
          <h4>Socials</h4>
          {socials.map(social => (
            <a
              href={social.link}
              onMouseEnter={() => cursorChangeHandler("cursor--on-link-over")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.contact__background}>
        <motion.div
          className={styles.contact__backgroundObject1}
          style={{ y: bubbleYValue1 }}
        ></motion.div>
        <motion.div
          className={styles.contact__backgroundObject2}
          style={{ y: bubbleYValue2 }}
        ></motion.div>
      </div>
    </motion.section>
  )
}
