import React from 'react';
import { Link } from 'gatsby';
import * as styles from './post-summary.module.scss';
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
    <article className={styles.container}>
      <header className={styles.header}>
        <Link to={slug}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <span>🗓️</span>
        <small className={styles.date}>{date}</small>
      </header>
      <p className={styles.description}>{excerpt}</p>
    </article>
  );
};

export { PostSummary };
