import React from 'react';
import styles from './ThemeToggler.module.css';
import icons from '../../img/icons.svg'

function ThemeToggler() {
  return (
    <>
      <button
        className={styles.toggleBtn}
        type="button"
        // onClick=() => {}
      >
        <svg className={styles.iconMoon} >
          <use href={icons + '#moon'}></use>

        </svg>
      </button>
    </>
  );
}

export default ThemeToggler;
