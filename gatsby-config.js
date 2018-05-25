module.exports = {
  siteMetadata: {
    title: 'Akademickie Koło Aplikacji Interentowych',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
  ],
};
