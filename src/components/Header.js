import { Link } from "gatsby"
import React, { useState } from "react"
import { motion } from "framer-motion"

import * as styles from "../styles/components/header.module.scss"

const headerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
}

const navVariants = {
  initial: {
    x: "150%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
      delay: 0.2,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
}

export default function Header({ setCursorLinkHover }) {
  const [toggleNavbar, setToggleNavbar] = useState(false)

  const navs = [
    { menu: "About", link: "/#about" },
    { menu: "Works", link: "/#works" },
    { menu: "Contact", link: "/#contact" },
  ]

  return (
    <motion.nav
      className={styles.header}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={navVariants}>
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
          {navs.map(nav => (
            <li
              onMouseOver={e => setCursorLinkHover(true)}
              onMouseLeave={e => setCursorLinkHover(false)}
            >
              <Link to={nav.link} onClick={() => setToggleNavbar(false)}>
                {nav.menu}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}
