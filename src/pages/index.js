import React from "react"
import Layout from "../components/Layout"
import About from "../components/sections/About"
import Contact from "../components/sections/Contact"
import Hero from "../components/sections/Hero"
import Works from "../components/sections/Works"

export default function Home() {
  return (
    <Layout>
      <main className="wrapper">
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
    </Layout>
  )
}
