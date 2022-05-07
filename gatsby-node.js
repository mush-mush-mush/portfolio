const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Works {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(work => {
    actions.createPage({
      path: "/works/" + work.frontmatter.slug,
      component: path.resolve("./src/templates/work-details.js"),
      context: {
        slug: work.frontmatter.slug,
      },
    })
  })
}
