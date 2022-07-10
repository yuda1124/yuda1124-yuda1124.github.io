import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { PrimaryColorContext } from '../../context';
import { PRIMARY_COLOR } from '../../types';
import * as styles from './post-header.module.scss';

type PostHeaderProps = {
  title: string;
  date: string;
  slug?: string;
  color: PRIMARY_COLOR;
};

const PostHeader = ({ title, date, slug, color }: PostHeaderProps) => {
  const { setPrimaryColor } = useContext(PrimaryColorContext);
  return (
    <header className={styles.header}>
      {slug ? (
        <Link to={slug} onClick={() => setPrimaryColor(color)}>
          <h3 className={`${styles.title} post-title`}>{title}</h3>
        </Link>
      ) : (
        <h3 className={`${styles.title} post-title`}>{title}</h3>
      )}
      <span>🗓️</span>
      <small className={styles.date}>{date}</small>
    </header>
  );
};

export { PostHeader };
