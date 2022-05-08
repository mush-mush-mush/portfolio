import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { motion } from "framer-motion"

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
    <motion.section
      className={styles.works}
      id="works"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: [0.6, 0.01, -0.05, 0.95],
        },
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className={"heading-underline " + styles.works__title}>
        Things i've built
      </h2>
      <div className={styles.works__container}>
        {data.works.nodes.map(work => (
          <Link
            to={"/works/" + work.frontmatter.slug}
            className={styles.works__card}
            key={work.frontmatter.slug}
          >
            <figure>
              <GatsbyImage
                image={
                  work.frontmatter.featuredImg.childImageSharp.gatsbyImageData
                }
                alt={work.frontmatter.slug}
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
    </motion.section>
  )
}
