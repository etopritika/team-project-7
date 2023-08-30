import React from 'react';
import styles from './ThemeToggler.module.css';
import icons from '../../img/icons.svg';
import { useLocation } from 'react-router-dom';
import { useTheme } from 'hooks/useTheme';

const ThemeToggler = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const handleTheme = evt => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    location.pathname !== '/' && (
      <button className={styles.toggleBtn} type="button" onClick={handleTheme}>
        {theme === 'light' ? (
          <svg className={styles.iconMoon}>
            <use href={`${icons}#moon`}></use>
          </svg>
        ) : (
          <svg className={styles.iconMoon}>
            <use href={`${icons}#sun`}></use>
          </svg>
        )}
      </button>
    )
  );
};

export default ThemeToggler;
