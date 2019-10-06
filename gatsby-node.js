/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const readingListTemplate = path.resolve(`src/templates/reading-list.js`);
  const aboutTemplate = path.resolve(`src/templates/about.js`);

  const blogResult = await graphql(`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}, 
        limit: 1000, 
        filter: {frontmatter: {path: {glob: "/blog/*"}}}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  const readingResult = await graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/reading/"}}}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }  
  `);

  const aboutResult = await graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/me/"}}}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }  
  `);

  // Handle errors
  if (blogResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for blog posts.`)
    return;
  }

  if (readingResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for reading list.`)
    return;
  }

  if (aboutResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for about me.`)
    return;
  }
  
  // Blog post page.
  blogResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });

  // Reading list page.
  readingResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: readingListTemplate,
      context: {}, // additional data can be passed via context
    });
  });

  // About me page.
  aboutResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: aboutTemplate,
      context: {}, // additional data can be passed via context
    });
  });
}
