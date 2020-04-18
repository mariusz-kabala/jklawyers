require('dotenv').config()

const { CMS_URL } = process.env

module.exports = {
  siteMetadata: {
    title: `JKLawyers: Grzegorz, Jamrozy Monika Kabała`,
    description: ``,
    siteUrl: 'https://jklawyers.pl',
    author: `Mariusz Kabala`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: CMS_URL,
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "languages",
          "working-areas",
          "translations",
          "articles",
          "user",
        ],
        singleTypes: ['seo', 'address'],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163892582-1",
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "JKLaywers: Grzegorz Jamrozy, Monika Kabała",
        short_name: "JKLaywers",
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#970052",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    'gatsby-plugin-sitemap'
  ],
}
