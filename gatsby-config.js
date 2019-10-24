const { NODE_ENV, NOW_GITHUB_COMMIT_REF } = process.env;
const isProduction =
  NODE_ENV === 'production' && NOW_GITHUB_COMMIT_REF === 'master';
const envir =
  isProduction || NODE_ENV === 'development' ? 'production' : 'else';
const siteUrl = isProduction
  ? 'https://vampire.zaratan.fr'
  : 'https://vampire-next.zaratan.fr';

module.exports = {
  siteMetadata: {
    title: `Vampire Codex`,
    description: `Une bibliothèque d'informations sur le Jeu de Role Vampire (extraites depuis les Litanies de Sang)`,
    author: `@zaratan`,
    siteUrl,
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
    `gatsby-plugin-styled-components`,
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
        lang: `fr`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => envir,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          else: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};
