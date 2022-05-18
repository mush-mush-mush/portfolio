import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import About from "../components/sections/About"
import Contact from "../components/sections/Contact"
import Hero from "../components/sections/Hero"
import Works from "../components/sections/Works"

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <Hero />
      <About />
      <Works />
      <Contact />
    </Layout>
  )
}
