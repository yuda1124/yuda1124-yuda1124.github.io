import React from 'react';
import { Link } from 'gatsby';
import * as styles from './post-summary.module.scss';
import { PostHeader } from '..';
import { PostSummaryData } from '../../types';

type PostSummaryProps = {
  summary: PostSummaryData;
};

const PostSummary = ({ summary }: PostSummaryProps) => {
  const { node } = summary;
  const { excerpt, fields, frontmatter } = node;
  const { slug } = fields;
  const { date, title } = frontmatter;
  return (
    <Link to={slug}>
      <article className={styles.container}>
        <PostHeader {...{ title, date }} />
        <p className={styles.description}>{excerpt}</p>
      </article>
    </Link>
  );
};

export { PostSummary };
