import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"

import * as styles from "../styles/pages/404.module.scss"

function errorPage({ location }) {
  return (
    <Layout location={location}>
      <Helmet>
        <title>404 | Made by Cello</title>
        <meta
          name="description"
          content="Marcello Sebastian is a javascript developer who focuses on modern front end web development."
        />
      </Helmet>
      <main className={styles.notfound}>
        <h1>404</h1>
        <h3>Page not found!</h3>
      </main>
    </Layout>
  )
}

export default errorPage
