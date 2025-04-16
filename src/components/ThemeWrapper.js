'use client';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useTheme } from '@/utils/context/ThemeContext';

function ThemeWrapper({ children }) {
  const { theme } = useTheme();
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    // Apply fade effect when theme changes
    setFadeClass('fade-out');

    const timer = setTimeout(() => {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(theme);
      setFadeClass('fade-in');
    }, 100); // wait a bit before applying the new theme

    return () => clearTimeout(timer);
  }, [theme]);

  return <div className={fadeClass}>{children}</div>;
}

export default ThemeWrapper;

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
