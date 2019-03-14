module.exports = {
  siteMetadata: {
    title:
      'Nowy Świat Fizjoterapii Anna Roczniak-Zubrycka - Fizjoterapia, Supraśl',
    description: 'Gabinet Fizjoterapii.',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nowy Świat Fizjoterapii Anna Roczniak-Zubrycka`,
        short_name: `Nowy Świat Fizjoterapii`,
        start_url: `/`,
        background_color: `#F4F4F4`,
        theme_color: `#F4F4F4`,
        display: `standalone`,
        icon: `src/assets/images/globe.svg`,
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
  ],
}
