'use client';

import { Button } from 'react-bootstrap';
import { useTheme } from '@/utils/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-wrapper">
      <Button className={`theme-toggle ${theme}`} onClick={toggleTheme} aria-label="Toggle dark/light mode">
        <div className="icon">{theme === 'light' ? <FaSun /> : <FaMoon />}</div>
      </Button>
    </div>
  );
}

export default ThemeToggle;
