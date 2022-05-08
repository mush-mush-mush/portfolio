/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Made by Cello",
    description:
      "Hi, my name is Marcello Sebastian, a javascript developer who focuses on modern front end web development.",
    siteUrl: "https://madebycello.netlify.app",
    image: "/og.png",
    logo: "/favicon.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/src/data/works`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Made by Cello",
        short_name: "MadebyCello",
        start_url: "/",
        background_color: "#00000",
        theme_color: "#00000",
        display: "standalone",
        icon: "/static/favicon.png",
      },
    },
  ],
}
