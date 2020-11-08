/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Your website title',
    description: 'What is your website all about?',
    author: 'Your name',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Inter',
            variants: ['400', '500', '700'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-styled-components-dark-mode',
      options: {
        light: require(`${__dirname}/src/themes/light.js`),
        dark: require(`${__dirname}/src/themes/dark.js`),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
