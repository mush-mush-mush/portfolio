import { Link } from "gatsby"
import React, { useState } from "react"

import * as styles from "../styles/components/header.module.scss"

export default function Header() {
  const [toggleNavbar, setToggleNavbar] = useState(false)

  return (
    <nav className={"wrapper " + styles.header}>
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
    </nav>
  )
}
