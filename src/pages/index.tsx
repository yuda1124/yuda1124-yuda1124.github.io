import React from 'react';
import { graphql } from 'gatsby';
import { Layout, PostSummaryList } from '../components';
import { PostSummariesData } from '../types';

type IndexPageProps = {
  data: PostSummariesData;
};

const IndexPage = ({ data }: IndexPageProps) => {
  const { allMarkdownRemark } = data;
  const { edges: summaries } = allMarkdownRemark;
  return (
    <Layout>
      <PostSummaryList {...{ summaries }} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query PostSummaries {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200, truncate: true)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
