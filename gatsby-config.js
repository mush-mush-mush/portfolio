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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`png`, `jpg`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    ,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/src/markdowns/works`,
      },
    },
  ],
}
