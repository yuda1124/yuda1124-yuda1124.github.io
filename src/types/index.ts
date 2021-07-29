type Frontmatter = {
  title: string;
  date: string;
};

export type BlogPostData = {
  markdownRemark: {
    id: string;
    html: string;
    frontmatter: Frontmatter;
  };
};

export type PostSummaryData = {
  node: {
    id: string;
    excerpt: string;
    fields: {
      slug: string;
      category: string;
    };
    frontmatter: Frontmatter;
  };
};
export type PostSummariesData = {
  allMarkdownRemark: {
    edges: PostSummaryData[];
  };
};
