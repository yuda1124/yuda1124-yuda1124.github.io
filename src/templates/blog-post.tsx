import React from 'react';
import { graphql } from 'gatsby';
import { BlogPostData, PRIMARY_COLOR } from '../types';
import { Layout, PostHeader, SEO } from '../components';

type BlogPostProps = {
  data: BlogPostData;
};

export default ({ data: { markdownRemark } }: BlogPostProps) => {
  const {
    html,
    frontmatter: { title, date },
    excerpt,
  } = markdownRemark;
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <PostHeader {...{ title, date, color: PRIMARY_COLOR.PURPLE }} />
      <div>
        <article>
          <div dangerouslySetInnerHTML={{ __html: html }} className="post-container" />
        </article>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 200, truncate: true)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
