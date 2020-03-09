/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const webpack = require('webpack');
const axios = require(`axios`)
// Requiring function causes error during builds
// as the code tries to reference window
// Error
// Wrap the require in check for window
/*exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-owl-carousel/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}*/
if (process.env.NODE_ENV === 'development') {
  process.env.GATSBY_WEBPACK_PUBLICPATH = '/'
}
const { createFilePath } = require(`gatsby-source-filesystem`)
const {fmImagesToRelative} = require('gatsby-remark-relative-images')
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/articleTemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
new webpack.ProvidePlugin({
            $: path.resolve(path.join(__dirname, 'node_modules/jquery')),
            jQuery: path.resolve(path.join(__dirname, 'node_modules/jquery')),
            'window.jQuery': path.resolve(path.join(__dirname, 'node_modules/jquery')),
        }),
exports.onCreateWebpackConfig = ({stage, rules, loaders, plugins, actions,}) => {
  switch (stage) {
    case 'build-html':
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-owl-carousel/,
              use: [loaders.null()]
            },

          ]
        }
      });
      break;
  }
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
    ],
  })
}

