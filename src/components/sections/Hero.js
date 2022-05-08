import React from "react"
import { motion } from "framer-motion"
import * as styles from "../../styles/components/sections/hero.module.scss"

const backgroundVariants = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
}

const bubbleAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.3,
    transition: {
      duration: 5,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>
        Dream. Design. Develop. <br />
        For the web.
      </h1>
      <div className={styles.hero__background}>
        <motion.div
          className={styles.hero__backgroundContainer}
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className={styles.hero__backgroundObject1}
            variants={bubbleAnimation}
          ></motion.div>
          <motion.div
            className={styles.hero__backgroundObject2}
            variants={bubbleAnimation}
          ></motion.div>
          <motion.div
            className={styles.hero__backgroundObject3}
            variants={bubbleAnimation}
          ></motion.div>
          <motion.div
            className={styles.hero__backgroundObject4}
            variants={bubbleAnimation}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  )
}
