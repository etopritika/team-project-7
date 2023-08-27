import React from 'react';
import styles from './ThemeToggler.module.css';

function ThemeToggler() {
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
}

export default ThemeToggler;
