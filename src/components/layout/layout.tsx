import React, { ReactNode } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
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
    <main className={styles.main}>
      <div className={styles.container}>
        <h3>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h3>
        {children}
      </div>
    </main>
  );
};

export { Layout };
