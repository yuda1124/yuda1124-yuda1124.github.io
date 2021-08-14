import React, { ReactNode, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { PageHeader, PageFooter } from '..';
import { PrimaryColorContext } from '../../context';
import { PRIMARY_COLOR } from '../../types';
import * as styles from './layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const InitialPrimaryColor = PRIMARY_COLOR.PURPLE;

const Layout = ({ children }: LayoutProps) => {
  const { primaryColor } = useContext(PrimaryColorContext);
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
    <div className={`${styles.root} ${primaryColor || InitialPrimaryColor}`}>
      <PageHeader title={data.site.siteMetadata.title} />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <PageFooter />
    </div>
  );
};

export { Layout };
