module.exports = {
  siteMetadata: {
    title: 'Nowy Świat Fizjoterapii',
    description: 'Gabinet Fizjoterapii.',
  },
  plugins: [
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
  ],
}
