import React from 'react';
import useDarkMode from 'use-dark-mode';

const ThemeSwitch = () => {
  const { value, toggle } = useDarkMode(false);
  return (
    <span>
      <input type="checkbox" onChange={e => toggle()} checked={value === 'dark'} /> Dark mode
    </span>
  );
};

export { ThemeSwitch };
