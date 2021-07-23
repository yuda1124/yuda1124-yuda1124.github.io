import React from 'react';
import * as styles from './post-header.module.scss';

type PostHeaderProps = {
  title: string;
  date: string;
};

const PostHeader = ({ title, date }: PostHeaderProps) => (
  <header className={styles.header}>
    <h3 className={styles.title}>{title}</h3>
    <span>🗓️</span>
    <small className={styles.date}>{date}</small>
  </header>
);

export { PostHeader };
