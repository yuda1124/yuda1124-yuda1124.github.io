import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { PageHeader } from '..';
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
      <div className={styles.container}>
        <PageHeader title={data.site.siteMetadata.title} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export { Layout };
