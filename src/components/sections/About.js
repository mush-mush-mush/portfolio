import React from "react"

import * as styles from "../../styles/components/sections/about.module.scss"

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={"heading-underline " + styles.about__title}>About me</h2>
      <p className={styles.about__subtitle}>
        Hi, my name is
        <span className={styles.about__name}>Marcello Sebastian</span>
      </p>
      <p className={styles.about__content}>
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
      <a href="/resume.pdf" className={"button " + styles.about__button}>
        My Resume
      </a>
    </section>
  )
}
