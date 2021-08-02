import React from 'react';
import * as styles from './page-footer.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { SiteMetadata } from '../../types';

const PageFooter = () => {
  const data = useStaticQuery<SiteMetadata>(graphql`
    query SiteMetadata {
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
