module.exports = {
  siteMetadata: {
    title: `Autorejestr`,
    description: `Autorejestr`,
    author: `@sarpisik`,
    siteUrl: 'https://www.autorejestr.pl'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-background-image-es5`
  ]
};
