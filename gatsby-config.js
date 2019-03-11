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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vampire-codex`,
        short_name: `vampire`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: 'standalone',
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
