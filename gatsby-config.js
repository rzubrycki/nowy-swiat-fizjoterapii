module.exports = {
  siteMetadata: {
    title: 'Nowy Świat Fizjoterapii',
    description: 'Gabinet Fizjoterapii.',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#DCD0C0`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/images/globe.svg`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
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
            family: `Raleway`,
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
  ],
}
