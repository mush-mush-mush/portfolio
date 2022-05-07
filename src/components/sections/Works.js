import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import * as styles from "../../styles/components/sections/works.module.scss"

export default function Works() {
  const data = useStaticQuery(graphql`
    query MyWorks {
      works: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            featuredImg {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
            type
            slug
          }
        }
      }
    }
  `)

  return (
    <section className={styles.works} id="works">
      <h2 className={"heading-underline " + styles.works__title}>
        Things i've built
      </h2>
      <div className={styles.works__container}>
        {data.works.nodes.map(work => (
          <Link
            to={"/works/" + work.frontmatter.slug}
            className={styles.works__card}
          >
            <figure>
              <GatsbyImage
                image={
                  work.frontmatter.featuredImg.childImageSharp.gatsbyImageData
                }
              ></GatsbyImage>
            </figure>
            <div className={styles.works__cardBody}>
              <p>{work.frontmatter.type}</p>
              <h3>{work.frontmatter.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <a
        href="https://github.com/mush-mush-mush?tab=repositories"
        className={"button " + styles.works__button}
      >
        See more in GitHub
      </a>
    </section>
  )
}
