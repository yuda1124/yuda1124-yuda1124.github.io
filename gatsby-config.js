module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'young-blog',
  },

  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-dts-css-modules',
  ],
};
