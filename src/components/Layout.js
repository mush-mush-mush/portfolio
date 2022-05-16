import React, { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"

import "../styles/main.scss"
import Loader from "./Loader"
import Helmet from "react-helmet"
import { motion } from "framer-motion"

export default function Layout({ children, location }) {
  const isHome = location.pathname === "/" && location.hash === ""
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({})

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView()
        }
      }, 50)
    }
  }, [location])

  const getCursorCoordinates = e => {
    return {
      x: e.pageX,
      y: e.pageY,
    }
  }

  return (
    <motion.div
      className="layout"
      onMouseMove={e => setMousePosition(getCursorCoordinates(e))}
    >
      <motion.div
        className="cursor cursor--lg"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          transition: {
            duration: 0.05,
            ease: [0.6, 0.01, -0.05, 0.95],
            type: "tween",
          },
        }}
      ></motion.div>
      <motion.div
        className="cursor cursor--sm"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
      ></motion.div>
      {isLoading && isHome ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="layout__container wrapper">
          <Header />
          <main className="layout__content ">
            {children}
            <Footer />
          </main>
        </div>
      )}
    </motion.div>
  )
}
