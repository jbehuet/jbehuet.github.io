module.exports = {
  siteMetadata: {
    title: `Jerome BEHUET`,
    description: `Développeur passionné, ayant plus de 10ans d'expérience.`,
    keywords:`developpeur,full stack,javascript,java,developer,angular,angularjs,js,node,nodejs,react,vuejs`,
    author: `@jbehuet`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#263238`,
        theme_color: `#263238`,
        display: `minimal-ui`,
        icon: `src/images/profil.jpg`, // This path is relative to the root of the site.
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`data`,
        path: `${__dirname}/src/data`
      }
    }
  ],
}
