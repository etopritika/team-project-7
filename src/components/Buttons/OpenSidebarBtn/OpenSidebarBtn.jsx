import React from 'react';
import styles from './OpenSidebarBtn.module.css';
import { HiMenu } from 'react-icons/hi';

export default function OpenSidebarBtn({ openBurgerMenu }) {
  const openSidebar = () => {
    openBurgerMenu();
    document.body.style.overflow = 'hidden';
  };

  return (
    <button className={styles.buttonOpen} type="button" onClick={openSidebar}>
      <HiMenu className={styles.iconMenu} />
    </button>
  );
}
