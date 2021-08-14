import React from 'react';
import useDarkMode from 'use-dark-mode';
import { isMobile } from 'react-device-detect';
import * as styles from './theme-switch.module.scss';

const DARK_MODE_EMOJI = '👿';
const LIGHT_MODE_EMOJI = '😇';

const ThemeSwitch = () => {
  const { value: isDarkMode, toggle } = useDarkMode(false);

  return (
    <div className={styles.container}>
      <div type="button" className={styles.inner} onClick={toggle}>
        <span className={styles.front}>
          {(isDarkMode && isMobile) || (!isMobile && !isDarkMode) ? LIGHT_MODE_EMOJI : DARK_MODE_EMOJI}
        </span>
        <span className={styles.back}>
          {(isDarkMode && !isMobile) || (!isMobile && isDarkMode) ? LIGHT_MODE_EMOJI : DARK_MODE_EMOJI}
        </span>
      </div>
    </div>
  );
};

export { ThemeSwitch };
