const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node }) => {
    const { slug } = node.fields;
    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, trailingSlash: false });

    const category = slug.split('/').slice(-1)[0];
    console.log(category);
    createNodeField({
      node,
      value: slug,
      name: 'slug',
    });
    createNodeField({
      node,
      value: category,
      name: 'category',
    });
  }
};
