module.exports = {
  siteMetadata: {
    siteUrl: "https://www.kelaridis.com",
    title: "Kelaridis",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_API_BASE_URL || "https://kelaridis.herokuapp.com",
        collectionTypes: [`stats`],
        singleTypes: [`message`],

        queryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

  ],
};
