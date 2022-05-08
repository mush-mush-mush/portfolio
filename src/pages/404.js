import React from "react"
import Layout from "../components/Layout"

import * as styles from "../styles/pages/404.module.scss"

function errorPage({ location }) {
  return (
    <Layout location={location}>
      <main className={styles.notfound}>
        <h1>404</h1>
        <h3>Page not found!</h3>
      </main>
    </Layout>
  )
}

export default errorPage
