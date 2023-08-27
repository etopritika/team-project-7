import React from 'react';
import styles from './ThemeToggler.module.css';

export const ThemeToggler = () => {
  return (
    <>
      <button
        className={styles.toogleBtn}
        type="button"
        // onClick=() => {}
      >
        <span className={styles.hiddenTitle}>Theme Toggle</span>
      </button>
    </>
  );
};
