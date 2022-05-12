import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import * as styles from "../../styles/components/sections/hero.module.scss"

const titleVariants = {
  animate: {
    transition: {
      staggerChildren: 0.6,
    },
  },
}

const titleAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
}

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
  const { scrollYProgress } = useViewportScroll()

  const filter = useTransform(scrollYProgress, v => `blur(${v * 40}px)`)

  const bubbleYValue1 = useTransform(scrollYProgress, [0, 0.3], [-350, -100])
  const bubbleYValue2 = useTransform(scrollYProgress, [0, 0.3], [0, -200])
  const bubbleYValue3 = useTransform(scrollYProgress, [0, 0.3], [50, 250])
  const bubbleYValue4 = useTransform(scrollYProgress, [0, 0.3], [-300, -350])

  return (
    <section className={styles.hero}>
      <motion.h1 variants={titleVariants} initial="initial" animate="animate">
        <motion.span variants={titleAnimation}>Dream. </motion.span>
        <motion.span variants={titleAnimation}>Design. </motion.span>
        <motion.span variants={titleAnimation}>Develop. </motion.span>
        <br />
        <motion.span variants={titleAnimation}>For the web.</motion.span>
      </motion.h1>
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
            style={{ y: bubbleYValue1, filter }}
          ></motion.div>
          <motion.div
            className={styles.hero__backgroundObject2}
            variants={bubbleAnimation}
            style={{ y: bubbleYValue2, filter }}
          ></motion.div>
          <motion.div
            className={styles.hero__backgroundObject3}
            variants={bubbleAnimation}
            style={{ y: bubbleYValue3, filter }}
          ></motion.div>
          <motion.div
            className={styles.hero__backgroundObject4}
            variants={bubbleAnimation}
            style={{ y: bubbleYValue4, filter }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  )
}
