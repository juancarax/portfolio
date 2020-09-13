/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create post", result.errors)
  }

  const projects = result.data.allMdx.nodes

  projects.forEach(post => {
    actions.createPage({
      path: `/projects/${post.frontmatter.slug}`,
      component: require.resolve("./src/templates/project/project.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
