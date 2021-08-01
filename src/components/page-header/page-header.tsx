import React from 'react';
import { Link } from 'gatsby';
import * as styles from './page-header.module.scss';

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => (
  <header className={styles.container}>
    <Link to="/">
      <h3 className={styles.title}>{title}</h3>
    </Link>
  </header>
);

export { PageHeader };
