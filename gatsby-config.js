module.exports = {
  siteMetadata: {
    title: `AFP`,
    description: `Anchor Flank Pinch. Wildland fire consultants and trainers. `,
    author: `@hitheretrevorhere`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
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
        short_name: `AFP`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/penrose.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `Tinos`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto Mono`,
    //         variants: [`400`, `700`]
    //       },
    //       {
    //         family: `Roboto`,
    //         subsets: [`latin`],
    //         variants: [`100`,`400`, `700`]
    //       },
    //       {
    //         family: `Tinos`,
    //         subsets: [`serif`],
    //         variants: [`100`,`400`, `700`]
    //       },
    //     ],
    //   }
    // }
    // `gatsby-plugin-offline`,
  ],
}
