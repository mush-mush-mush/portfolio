import { Link } from "gatsby"
import React, { useState } from "react"
import { motion } from "framer-motion"

import * as styles from "../styles/components/header.module.scss"

const navVariants = {
  initial: {
    y: -100,
    x: "-50%",
  },
  animate: {
    y: 0,
    x: "-50%",
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
}

export default function Header() {
  const [toggleNavbar, setToggleNavbar] = useState(false)

  return (
    <motion.nav
      className={"wrapper " + styles.header}
      variants={navVariants}
      initial="initial"
      animate="animate"
    >
      <Link to="/" className={styles.header__logo}>
        Made by Cello
      </Link>
      <button
        className={`${styles.header__toggler} ${
          toggleNavbar ? styles.header__togglerActive : ""
        }`}
        onClick={() => setToggleNavbar(!toggleNavbar)}
      >
        <span></span>
        <span></span>
      </button>
      <ul
        className={`${styles.header__nav} ${
          toggleNavbar ? styles.header__navOpen : ""
        }`}
      >
        <li>
          <Link to="/#about" onClick={() => setToggleNavbar(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/#works" onClick={() => setToggleNavbar(false)}>
            Works
          </Link>
        </li>
        <li>
          <Link to="/#contact" onClick={() => setToggleNavbar(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  )
}
