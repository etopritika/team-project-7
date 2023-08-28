import React from 'react';
import styles from './OpenSidebarBtn.module.css';
import { HiMenu } from 'react-icons/hi';

export default function OpenSidebarBtn({ openBurgerMenu, isSidebarOpen }) {
  const openSidebar = () => {
    openBurgerMenu();
  };

  return (
    <button
      className={`${styles.buttonOpen} ${isSidebarOpen ? styles.hidden : ''}`}
      type="button"
      onClick={openSidebar}
    >
      <HiMenu className={styles.iconMenu} />
    </button>
  );
}
