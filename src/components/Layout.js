import React, { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"

import "../styles/main.scss"
import Loader from "./Loader"

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
