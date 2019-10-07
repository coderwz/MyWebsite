import React from 'react';
import BlogIndexCard from '../components/blog-index-card';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const BlogIndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const posts = edges
        .filter((edge) => !!edge.node.frontmatter.date)
        .map((edge) => <BlogIndexCard key={edge.node.id} post={edge.node} />);
    return <Layout title="Wen Zhu's Blog" path='/blog/'><div className='blog-index'>{posts}</div></Layout>;
};

export default BlogIndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            summary
          }
        }
      }
    }
  }
`