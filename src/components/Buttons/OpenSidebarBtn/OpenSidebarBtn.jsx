import React from 'react';
import styles from './OpenSidebarBtn.module.css';
import icons from '../../../img/icons.svg';

export default function OpenSidebarBtn({ openBurgerMenu }) {
  const openSidebar = () => {
    openBurgerMenu();
    document.body.style.overflow = 'hidden';
  };

  return (
    <button className={styles.buttonOpen} type="button" onClick={openSidebar}>
      <svg className={styles.iconMenu}>
        <use className={styles.iconMenu} href={icons + '#menu-01'}></use>
      </svg>
    </button>
  );
}
