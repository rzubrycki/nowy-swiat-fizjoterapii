const config = require('./config/site')

module.exports = {
  siteMetadata: {
    ...config
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: config.display,
        icon: config.favicon,
        include_favicon: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     resolve: `gatsby-plugin-sitemap`,
    //     options: {
    //       sitemapSize: 5000,
    //       query: `
    //       {
    //         site {
    //           siteMetadata {
    //             siteURLe
    //           }
    //         }
    //         allSitePage {
    //           edges {
    //             node {
    //               path
    //             }
    //           }
    //         }
    //       }
    //       `,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-135953660-1',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Baloo`,
            variants: [`400`],
            subsets: [`latin-ext`],
          },
          {
            family: `Muli`,
            variants: [`400`],
            subsets: [`latin-ext`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: '@import "variables.scss";',
        includePaths: ['src/styles'],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-leaflet`,
    `gatsby-plugin-offline`,
  ],
}
