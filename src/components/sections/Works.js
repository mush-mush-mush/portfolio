import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"

import * as styles from "../../styles/components/sections/works.module.scss"
import { useMediaQuery } from "../../hooks/useMediaQuery"

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
                fluid {
                  src
                }
              }
            }
            type
            tools
            live
            github
            desc
          }
        }
      }
    }
  `)

  const { scrollYProgress } = useViewportScroll()

  const cardParallax = useTransform(scrollYProgress, [0, 1], [-300, 600])

  const imgParallax2 = useTransform(
    scrollYProgress,
    value => -65 + value * 30 + "%"
  )

  const isDesktop = useMediaQuery(
    "(min-width: 1200px) and (orientation: landscape)"
  )

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
        {data.works.nodes.map((work, index) => (
          <motion.div
            className={styles.works__card}
            key={work.frontmatter.title}
            style={index % 2 !== 0 && isDesktop ? { y: cardParallax } : ""}
          >
            <figure>
              <motion.img
                src={work.frontmatter.featuredImg.childImageSharp.fluid.src}
                alt={work.frontmatter.title}
                style={{ y: imgParallax2 }}
                whileHover={{ scale: 1.1 }}
              ></motion.img>
              <div className={styles.works__cardActions}>
                <a
                  href={work.frontmatter.live}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--dark"
                >
                  View Site
                </a>
                {work.frontmatter.github && (
                  <a
                    href={work.frontmatter.github}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--dark"
                  >
                    View Code
                  </a>
                )}
              </div>
            </figure>
            <div className={styles.works__cardBody}>
              <h3>{work.frontmatter.title}</h3>
              <p>{work.frontmatter.desc}</p>
              <hr />
              <span>{work.frontmatter.tools.join(", ")}</span>
            </div>
          </motion.div>
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
