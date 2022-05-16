import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Footer from "./Footer"
import Header from "./Header"

import "../styles/main.scss"
import Loader from "./Loader"

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

  console.log(mousePosition)
  return (
    <motion.div
      className="layout"
      onMouseMove={e => setMousePosition(getCursorCoordinates(e))}
    >
      <motion.div
        className="cursor cursor--lg"
        initial={{ x: -20, y: -20 }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          transition: {
            duration: 0.05,
            ease: [0.6, 0.01, -0.05, 0.95],
            type: "tween",
          },
        }}
      ></motion.div>
      <motion.div
        className="cursor cursor--sm"
        initial={{ x: -10, y: -10 }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          transition: {
            type: "spring",
          },
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
