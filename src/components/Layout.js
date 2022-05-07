import React from "react"
import Footer from "./Footer"
import Header from "./Header"

import "../styles/main.scss"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
