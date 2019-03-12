module.exports = {
  siteMetadata: {
    title: `Vampire Codex`,
    description: `Une bibliothèque d'informations sur le Jeu de Role Vampire (extraites depuis les Litanies de Sang)`,
    author: `@zaratan`,
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vampire-codex`,
        short_name: `vampire`,
        start_url: `/`,
        background_color: `#4A7296`,
        theme_color: `#4A7296`,
        display: 'standalone',
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
