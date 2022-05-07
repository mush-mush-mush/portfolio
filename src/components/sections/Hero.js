import React from "react"
import * as styles from "../../styles/components/sections/hero.module.scss"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>
        Dream. Design. Develop. <br />
        For the web.
      </h1>
      <div className={styles.hero__background}>
        <div className={styles.hero__backgroundContainer}>
          <div className={styles.hero__backgroundObject1}></div>
          <div className={styles.hero__backgroundObject2}></div>
          <div className={styles.hero__backgroundObject3}></div>
          <div className={styles.hero__backgroundObject4}></div>
        </div>
      </div>
    </section>
  )
}
