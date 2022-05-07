import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faBoxOpen,
  faCodePullRequest,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"

import * as styles from "../styles/pages/work-details.module.scss"

export default function workDetail({ data }) {
  const { html } = data.markdownRemark
  const { title, type, role, tools, date, github, live } =
    data.markdownRemark.frontmatter
  const banner = data.markdownRemark.frontmatter.featuredImg
  const createdDate = new Date(date)
  const dateOpt = { year: "numeric", month: "long" }

  return (
    <Layout>
      <div className={styles.workDetails}>
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
      </div>
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
