'use client';

import { useEffect, useState } from 'react';

export default function useTheme(defaultTheme = 'light') {
  const [theme, setTheme] = useState(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
        document.body.className = storedTheme;
      } else {
        document.body.className = defaultTheme;
      }
      setMounted(true);
    }
  }, [defaultTheme]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
      document.body.className = theme;
    }
  }, [theme, mounted]);

  return [theme, setTheme];
}
