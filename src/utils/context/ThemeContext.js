'use client';

import React, { createContext, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import useTheme from './useTheme';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useTheme('light');

  const value = useMemo(() => {
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    return {
      theme,
      setTheme,
      toggleTheme,
    };
  }, [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useDiffTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
