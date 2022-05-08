import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import { motion } from "framer-motion"

import * as styles from "../styles/pages/work-details.module.scss"
import Helmet from "react-helmet"

export default function workDetail({ data, location }) {
  const { html } = data.markdownRemark
  const { title, type, role, tools, date, github, live } =
    data.markdownRemark.frontmatter
  const banner = data.markdownRemark.frontmatter.featuredImg
  const createdDate = new Date(date)
  const dateOpt = { year: "numeric", month: "long" }

  return (
    <Layout location={location}>
      <Helmet>
        <title>{title} | Made by Cello</title>
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
      <motion.div
        className={styles.workDetails}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <figure>
          <GatsbyImage
            image={banner.childImageSharp.gatsbyImageData}
            alt={title}
          />
        </figure>
        <section className="wrapper">
          <article>
            <header>
              <h1>{title}</h1>
              <p>{type}</p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
            <div className={styles.workDetails__actions}>
              <a
                href={live}
                className={"button-icon " + styles.workDetails__actionsItem}
              >
                <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
              </a>
              {github && (
                <a
                  href={github}
                  className={"button-icon " + styles.workDetails__actionsItem}
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              )}
            </div>
          </article>

          <aside>
            <ul>
              <li>
                <h4>Role</h4>
                <span>{role}</span>
              </li>
              <li>
                <h4>Tools</h4>
                <span>{tools.join(", ")}</span>
              </li>
              <li>
                <h4>Date</h4>
                <span>{createdDate.toLocaleDateString("en-US", dateOpt)}</span>
              </li>
            </ul>
          </aside>
        </section>
      </motion.div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        github
        live
        title
        tools
        type
        role
        date
      }
      html
    }
  }
`
