import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { PageHeader, PageFooter } from '..';
import * as styles from './layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={styles.root}>
      <PageHeader title={data.site.siteMetadata.title} />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <PageFooter />
    </div>
  );
};

export { Layout };
