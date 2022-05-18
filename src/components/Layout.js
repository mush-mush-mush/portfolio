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

  return (
    <motion.div
      className="layout"
      onMouseMove={e => setMousePosition(getCursorCoordinates(e))}
    >
      <Helmet>
        <title>Made by Cello</title>
        <meta
          name="description"
          content="Hi, my name is Marcello Sebastian, a javascript developer who focuses on modern front end web development."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>

        <meta property="og:url" content="https://madebycello.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Made by Cello" />
        <meta
          property="og:description"
          content="Hi, my name is Marcello Sebastian, a javascript developer who focuses on modern front end web development."
        />
        <meta
          property="og:image"
          content="https://madebycello.netlify.app/og.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="madebycello.netlify.app" />
        <meta
          property="twitter:url"
          content="https://madebycello.netlify.app/"
        />
        <meta name="twitter:title" content="Made by Cello" />
        <meta
          name="twitter:description"
          content="Hi, my name is Marcello Sebastian, a javascript developer who focuses on modern front end web development."
        />
        <meta
          name="twitter:image"
          content="https://madebycello.netlify.app/og.png"
        />
      </Helmet>
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
