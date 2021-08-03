import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const ThemeSwitch = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <span>
        <input
          type="checkbox"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        Dark mode
      </span>
    )}
  </ThemeToggler>
);

export { ThemeSwitch };
