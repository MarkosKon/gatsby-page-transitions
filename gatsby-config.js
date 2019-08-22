const remarkSlug = require("remark-slug")

const remarkPlugins = [remarkSlug]

const baseGatsbyMdxConfig = {
  resolve: "gatsby-plugin-mdx",
  options: {
    extensions: [".mdx"],
    remarkPlugins,
    gatsbyRemarkPlugins: ["gatsby-remark-prismjs"],
  },
}

module.exports = {
  siteMetadata: {
    title: `page-transitions`,
    description: `Page Transitions in Gatsby`,
    author: `Mark`
  },
  plugins: [
    {
      resolve: "@affectionatedoor/gatsby-theme-ui",
      options: {
        gatsbyMdxConfig: baseGatsbyMdxConfig,
      },
    },
  ],
}
