import React from "react"
import Layout from "../components/Layout"
import About from "../components/sections/About"
import Contact from "../components/sections/Contact"
import Hero from "../components/sections/Hero"
import Works from "../components/sections/Works"

import { motion } from "framer-motion"

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <motion.main
        className="wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Hero />
        <About />
        <Works />
        <Contact />
      </motion.main>
    </Layout>
  )
}
