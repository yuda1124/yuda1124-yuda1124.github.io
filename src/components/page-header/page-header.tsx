import React from 'react';
import { Link } from 'gatsby';
import { ThemeSwitch } from '..';
import * as styles from './page-header.module.scss';

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => (
  <header className={styles.container}>
    <Link to="/">
      <h3 className={`${styles.title} page-title`}>{title}</h3>
    </Link>
    <ThemeSwitch />
  </header>
);

export { PageHeader };
