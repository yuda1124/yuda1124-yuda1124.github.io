import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Layout, PostSummaryList, Category, SEO } from '../components';
import { PostSummariesData } from '../types';

type IndexPageProps = {
  data: PostSummariesData;
};

const IndexPage = ({ data }: IndexPageProps) => {
  const [category, setCategory] = useState<string>('ALL');
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;
  const categories = Array.from(new Set(edges.map(edge => edge.node.fields.category)));
  const summaries = category === 'ALL' ? edges : edges.filter(edge => edge.node.fields.category === category);

  return (
    <Layout>
      <SEO title="home" />
      <Category {...{ categories, setCategory, selectedCategory: category }} />
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
            category
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
