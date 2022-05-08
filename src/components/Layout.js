import React, { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"

import "../styles/main.scss"
import Loader from "./Loader"
import Helmet from "react-helmet"

export default function Layout({ children, location }) {
  const isHome = location.pathname === "/" && location.hash === ""
  const [isLoading, setIsLoading] = useState(true)

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

  return (
    <>
      <Helmet>
        <title>Made by Cello</title>
        <meta
          name="description"
          content="Hi, my name is Marcello Sebastian, a javascript developer who focuses on modern front end web development."
        />

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
      {isLoading && isHome ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}
