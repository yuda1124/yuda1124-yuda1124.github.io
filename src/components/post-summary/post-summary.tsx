import React from 'react';
import * as styles from './post-summary.module.scss';
import { PostHeader } from '..';
import { PostSummaryData, PRIMARY_COLOR } from '../../types';

type PostSummaryProps = {
  summary: PostSummaryData;
  color: PRIMARY_COLOR;
};

const PostSummary = ({ summary, color }: PostSummaryProps) => {
  const { node } = summary;
  const { excerpt, fields, frontmatter } = node;
  const { slug } = fields;
  const { date, title } = frontmatter;
  return (
    <article className={`${styles.container} ${color}`}>
      <PostHeader {...{ title, date, slug, color }} />
      <p className={styles.description}>{excerpt}</p>
    </article>
  );
};

export { PostSummary };
