import React from "react"
import { motion } from "framer-motion"

import * as styles from "../../styles/components/sections/about.module.scss"

export default function About() {
  return (
    <motion.section
      className={styles.about}
      id="about"
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
      <p>
        Hi, my name is
        <span className={styles.about__name}>Marcello Sebastian</span>
      </p>
      <p>
        A <strong>javascript developer</strong> who focuses on{" "}
        <strong>modern front end web development</strong>. Passionate in
        bringing aesthetics and functionality together through front end
        development. This includes strong interest in{" "}
        <strong>UI/UX design</strong>,{" "}
        <strong>SPA (Single Page Application)</strong>,{" "}
        <strong>PWA (Progressisve Web App)</strong>, and{" "}
        <strong>serverless technology</strong>. Motivated to be an inspiring
        developer who is able not only to invent & innovate; but also share
        knowledge with others.
      </p>
      <a href="/resume.pdf" className="button">
        My Resume
      </a>
    </motion.section>
  )
}
