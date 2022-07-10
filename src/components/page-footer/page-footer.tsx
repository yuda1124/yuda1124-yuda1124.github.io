import React from 'react';
import * as styles from './page-footer.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { SiteData } from '../../types';

const PageFooter = () => {
  const data = useStaticQuery<SiteData>(graphql`
    query SiteData {
      site {
        siteMetadata {
          author
          github
        }
      }
    }
  `);
  const {
    site: {
      siteMetadata: { author, github },
    },
  } = data;
  return (
    <footer className={styles.container}>
      <p className={styles.credits}>
        @ Made by{' '}
        <a className={styles.github} href={`https://github.com/${github}`}>
          {author}
        </a>{' '}
        !
      </p>
    </footer>
  );
};

export { PageFooter };
